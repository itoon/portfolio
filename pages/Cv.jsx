import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

class Cv extends React.Component {
    render() {
        return (
            <BaseLayout { ...this.props.auth }>
                <BasePage>
                    <h1>Hello World CV</h1>                
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Cv