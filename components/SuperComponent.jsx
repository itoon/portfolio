import React from 'react'
import BaseLayout from './layouts/BaseLayout'

class SuperComponent extends React.Component {
    

    constructor(props) {
        super(props)               
        this.someValiable = 'Just'
    }

    alertName(title) {
        alert(title)
    }

    render() {
        return (
            <BaseLayout>
                <h1>I am Super Component</h1>
            </BaseLayout>
        )
    }
}

export default SuperComponent