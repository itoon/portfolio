import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
// Functional Component
// dumb component 
// get data
// return data
/*
const Index = () =>{
    return (
        <h1>Hello World</h1>
    )
}
*/

/*
const Index = function(){
    return (
        <h1>Hello World Normal Function</h1>
    )
}
*/

// class component
// More function 
// More Stuff
// User Lifecycle function
class Index extends React.Component{
    render() {
        return (
            <BaseLayout>                
                <h1 style={{fontSize: 60}}>Hello World Class Component</h1>                
            </BaseLayout>
        )
    }
}

export default Index;

/*
import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import SuperComponent from '../components/SuperComponent'
import axios from 'axios'
import { Button } from 'reactstrap'

class Index extends React.Component{

    static async getInitialProps() {
        let userData = {}
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            userData = response.data
        }catch(err){
            console.log(err)
        }
        return {initData: [1,2,3,4], userData}
    }

    constructor(props) {
        super(props)
        this.state = {
            title: 'I am Index Page'
        }
        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    updateTitle() {
        this.setState({
            title: 'I am Update Index Page'
        })
    }

    render() {
        const { title } = this.state
        const { userData, initData } = this.props

        return (
            <BaseLayout>                
                <h1 style={{fontSize: 50}}>Hello World Class Component</h1>
                <h2>{ this.state.title }</h2>
                <button onClick={ () => this.updateTitle() }> Change Title </button>
            </BaseLayout>
        )
    }
}

export default Index;
*/