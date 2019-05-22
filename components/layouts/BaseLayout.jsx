import React from 'react'
import Header from '../common/Header'

const BaseLayout = (props) =>{
    const { className, children, isAuthenticated, user } = props 
    return (
        <div className="layout-container" >
            <Header isAuthenticated = { isAuthenticated } user = { user } />
            <main className={`cover ${className}`}>
                <div className="wrapper">
                {children}
                </div>
            </main>
        </div>
    )
}

BaseLayout.defaultProps = {
    className: ''
}

export default BaseLayout