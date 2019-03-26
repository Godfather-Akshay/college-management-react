import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <LoginOrDashboard />
    );
  }
}
class LoginOrDashboard extends Component  {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        Hello, World!
        </div>
    )
  }
}
export default App;