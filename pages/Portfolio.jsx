import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import axios from 'axios';
import { withRouter } from 'next/router'

class Portfolio extends React.Component {

    static async getInitialProps({ query }){  
        console.log('getInitialProps')
        const portfolioId = query.id
        let portfolio = {}
        try{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${ portfolioId }`)
            portfolio = response.data
        }catch(err){
            console.log(err)
        }
        return { portfolio }
    }

    render() {   
        const { title, body } = this.props.portfolio
        return (
            <BaseLayout { ...this.props.auth }>
                <BasePage>
                    <h1>Title: { title }</h1>                     
                    <p>{ body }</p>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio)