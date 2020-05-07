import React from 'react';
import Form from './Form';

class App extends React.Component{
  render(){
    return (
      <div className="col-md-6">
        <h3>What is your probability of being admitted to Harvard?</h3>
        <Form />
      </div>
    );
  }
}

export default App;
