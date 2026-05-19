import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.setState({ hasError: false })
    }
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>⚠️ Something went wrong!</h2>
          <p>We couldn't load this genre. Please try another one.</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary