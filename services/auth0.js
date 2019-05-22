import auth0 from 'auth0-js'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
import axios from 'axios'

class Auth0 {  
  constructor() {
    this.auth0 = new auth0.WebAuth({
        domain: 'marvelous-studio.auth0.com',
        clientID: 'sHsD76ZBw7vm1Wnte0LnAz4SZ28vVYdE',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile'
    });

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)    
    this.handleAuthentication = this.handleAuthentication.bind(this)
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);        
          resolve()
        } else if (err) {                  
          console.log(err);
          alert(`Error: ${err.error}. Check the console for further details.`);
          reject()
        }
      })
    })  
  }
  
  setSession(authResult) {        
    const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();    
    Cookies.set('user', authResult.idTokenPayLoad)
    Cookies.set('jwt', authResult.idToken)
    Cookies.set('expiresAt', expiresAt)
  }

  logout() {
    Cookies.remove('user')
    Cookies.remove('jwt')
    Cookies.remove('expiresAt')
    this.auth0.logout({
      returnTo: '',
      clientID: 'sHsD76ZBw7vm1Wnte0LnAz4SZ28vVYdE'
    })
  }

  async getJWKS() {
    const res = await axios.get('https://marvelous-studio.auth0.com/.well-known/jwks.json')
    const jwks = res.data
    return jwks
  }

  async verifyToken(token) {  
    if(token){      
      const decodeToken = jwt.decode(token, {complete: true})      
      const jwks = await this.getJWKS()
      const jwk = jwks.keys[0]      
      //Build Cert
      let cert = jwk.x5c[0]
      cert = cert.match(/.{1,64}/g).join('\n')
      cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`
      // End

      if(jwk.kid == decodeToken.header.kid){
        try {
          const verifyToken = jwt.verify(token, cert)
          const expiresAt = verifyToken.exp * 1000          
          return (verifyToken && new Date().getTime() < expiresAt) ? verifyToken : undefined
        } catch (err) {          
          return undefined
        }
      }          
    }
    return undefined
  }

  async clientAuth() {
    const token = Cookies.getJSON('jwt')
    const verifyToken = await this.verifyToken(token)
    return verifyToken
  }  

  async serverAuth(req) {    
    if(req.headers.cookie){
      const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
      if(!jwtCookie){ return undefined }
      const token = jwtCookie.split('=')[1]
      const verifyToken = await this.verifyToken(token)
      return verifyToken
    }
  }
}

const auth0Client = new Auth0()
export default auth0Client