import { Link } from '../../routes'
import { Container, Row, Col  } from 'reactstrap'

class Header extends React.Component{
    
    render() {        
        const title = this.props.title
        return (        
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>.col</Col>
                        <Col>.col</Col>
                    </Row>
                </Container>
                <p className="customClass">{ title }</p>
                { this.props.children }
                <Link href="/blog"><a>About</a></Link>
                <Link href="/portfolios"><a>port</a></Link>
                <Link href="/cv"><a>cv</a></Link>
                <Link href="/"><a>index</a></Link>
                <style jsx>
                    {
                        `
                        a{
                            color: red;
                            padding: 5px 10px;
                        }
                        .title{
                            font-size: 40px;
                        }
                        `
                    }
                </style>
            </React.Fragment>
        )
    }
}

export default Header