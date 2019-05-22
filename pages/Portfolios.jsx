import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import axios from 'axios';
import { Link } from '../routes'
import { Card } from 'reactstrap'

class Portfolios extends React.Component {

    static async getInitialProps() {
        let posts = []
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            posts = response.data
        }catch(err){
            console.log(err)
        }
        return { posts: posts.splice(0,10) }
    }

    renderPosts(posts) {
        return posts.map((post, index) => {
            return (
                <li key={index}>
                    <Card>
                        <Link route={`portfolio`} params={{id: post.id}}>
                            <a>
                                {post.title}
                            </a>
                        </Link>
                    </Card>
                </li>
            )
        })
    }

    render() {
        const { posts } = this.props
        return (
            <BaseLayout { ...this.props.auth }>
                <BasePage>
                    <h1>Hello World Port Component</h1>
                    <ul>
                        { this.renderPosts(posts) }                    
                    </ul> 
                </BasePage>        
            </BaseLayout>
        )
    }
}

export default Portfolios