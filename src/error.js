import React, { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        console.log('Error getDerivedStateFromError: ', error.message)
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log('Error: ', error)
        console.log('Info: ', info)
    }

    render() {
        return this.state.hasError ? <h1>Error</h1> : this.props.children
    }
}

export default ErrorBoundary