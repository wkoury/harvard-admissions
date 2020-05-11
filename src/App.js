import React from 'react';
import Input from './components/Input';
import Probability from './components/Probability';

class App extends React.Component{
  render(){
    return (
      <div className="app">
        <h3>What is your probability of being admitted to Harvard?</h3>
        <Input />
        <Probability 
          percent='X'
        />
      </div>
    );
  }
}

export default App;
