import React from 'react'


class App extends React.Component {
  construction () {
    super()
    this.state = {
       isLoggedIn: false
    }
  }
  render() {
     let wordDisplay
     if(this.state.isLoggedIn) {
       wordDisplay = 'in'
     }else {
       wordDisplay = 'out'
     }
     return (
        <div>
          <h1>You are currently loged {wordDisplay}</h1>
        </div>
     )
  }
}

export default App;
