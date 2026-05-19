import React from "react";

class ErrorBoundary extends React.Component{

    constructor(props){
        super(props);
        this.state = {hasError : false}
    }

    static getDerivedStateFromError(error){
        return {hasError:true}
    }

    componentDidCrash(error,info){
        console.error("Error Caught:", error, info);
    }

    render(){
        if(this.state.hasError){
            return(
                <div>
                    <h2> Something went wrong! </h2>
                    <p> We couldn't load this page. </p>
                </div>
            )
        }

        return this.props.children
    }

}

export default ErrorBoundary