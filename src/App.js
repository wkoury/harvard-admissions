import React from 'react';
import Form from './components/Form';
import About from './components/About';
import Footer from './components/Footer';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { about: false };

    this.toggle = this.toggle.bind(this);
  }

  toggle(event){
    let inverse = !(this.state.about);
    this.setState({ about: inverse });
  }

  render(){
    return (
      <div className='parent'>
        <div className='app'>
          <h3 className='title'>What is your probability of being admitted to Harvard?</h3>
          {this.state.about ? <About /> : <Form />}
        </div>        
        <Footer about={this.state.about} onClick={this.toggle}/>
      </div>
    );
  }
}

export default App;
