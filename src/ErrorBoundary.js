import { Component } from "react";
import { Link } from "react-router-dom";//eslint-disable-line

class ErrorBoundary extends Component{
    state = {hasError: false};
    static getDerivedStateFromError(){
        return {hasError: true}
    }
    componentDidCatch(error, info){
        // I log this to sentry, Azure Monitor, New Relic, TrackJS

        console.error("ErrorBoundary caught an error", error, info);
    }
    render(){
        if(this.state.hasError){
            return (
                <h2>
                    This listing has an error. <Link to='/'>Click here</Link> to go back to the home page.
                </h2>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;