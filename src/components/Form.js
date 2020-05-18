import React from 'react';
import Probability from './Probability';
import '../App.css'

class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mathSAT: 500,
            verbalSAT: 500,
            GPA: 2.0,
            subjectSAT: 500,
            citizenship: true,
            ethnicity: 'white',
            athletics: false,
            connections: false
        };

       this.handleChange = this.handleChange.bind(this);
       this.check = this.check.bind(this);
    }

    handleChange(event){
        event.preventDefault();
       
        //prevent the user from putting invalid GPAs in the refine box
        if(event.target.name==='GPA'){
            if(event.target.value > 4 || event.target.value < 0){
                //do nothing, this input is invalid
            }else{
                let GPA = +event.target.value;
                
                if((GPA * 100) % 1 !== 0){ //if we have more than 2 decimal places...
                    GPA = parseFloat(event.target.value).toFixed(2); //...restrict GPA to 2 decimal places
                }

                this.setState({
                    [event.target.name]: GPA
                });
            }
        }else{
            this.setState({
                [event.target.name]: event.target.value
            });
        }
    }

    check(event){
        let checked = event.target.checked;
        if(checked){
            this.setState({
                [event.target.name]: true
            })
        }else{
            this.setState({
                [event.target.name]: false
            })
        }
    }

    render(){
        return(
            <div className='content'>

            <div className='row'>
                <div className='column left'>
                    <p><label>What was your highest score on the math section of the SAT?</label></p>
                </div>
                <div className='column right'>
                    <input 
                        type='range' 
                        min={200} 
                        max={800} 
                        value={this.state.mathSAT} 
                        step={10} name='mathSAT' 
                        onChange={this.handleChange}/>
                    <span>{this.state.mathSAT}</span>
                </div>
            </div>

            <div className='row'>
                <div className='column left'>
                    <p><label>What was your highest score on the verbal section of the SAT?</label></p>
                </div>
                <div className='column right'>
                    <input 
                    type='range' 
                        min={200} 
                        max={800} 
                        value={this.state.verbalSAT} 
                        step={10} name='verbalSAT' 
                        onChange={this.handleChange}/>
                    <span>{this.state.verbalSAT}</span>
                </div>
            </div>
            
            <div className='row'>
                <div className='column left'>
                    <p><label>What is your average score across all of the SAT II subject tests that you've taken?</label></p>
                </div>
                <div className='column right'>
                    <input 
                            type='range' 
                            min={200} 
                            max={800} 
                            value={this.state.subjetSAT} 
                            step={10} name='subjectSAT' 
                            onChange={this.handleChange}/>
                    <span>{this.state.subjectSAT}</span>
                </div>
            </div>

            <div className='row'>
                <div className='column left'>
                    <p><label>What was your high school GPA (normalized to a 4-point scale)?</label></p>
                </div>
                <div className='column right'>
                    <input 
                        type='range' 
                        min={0.0} 
                        max={4.0} 
                        value={this.state.GPA} 
                        step={0.01} 
                        name='GPA' 
                        onChange={this.handleChange}
                        />
                    {/* <span> | Refine: </span> */}
                    <input
                        type='number'
                        min={0}
                        max={4}
                        step={0.01}
                        value={this.state.GPA}
                        maxLength={3}
                        name='GPA'
                        size={75}
                        onChange={this.handleChange} />
                </div>
            </div>

            <div className='row'>
                <div className='column left'>
                    <p><label>Are you a US citizen or permanent resident?</label></p>
                </div>
                <div className='column right'>
                    Yes<input 
                        type='checkbox' 
                        checked={this.state.citizenship} 
                        name='citizenship' 
                        onChange={this.check}/>
                </div>
            </div>
            <div className='row'>
                <div className='column left'>
                    <p><label>What is your race/ethnicity?</label></p>
                </div>
                <div className='column right'>
                <select 
                        name="ethnicity" 
                        checked={this.state.ethnicity} 
                        onChange={this.handleChange}>
                            <option value='white'>White</option>
                            <option value='african-american'>African American</option>
                            <option value='hispanic'>Hispanic</option>
                            <option value='asian-american'>Asian-American</option>
                            <option value='other'>Other</option>
                            <option value='undisclosed'>Prefer not to say</option>
                    </select>
                </div>
            </div>

            <div className='row'>
                <div className='column left'>
                    <p><label>Are you being recruited by Harvard for varsity athletics?</label></p>
                </div>
                <div className='column right'>
                    Yes<input 
                        type='checkbox' 
                        name='athletics'
                        checked={this.state.athletics}
                        onChange={this.check}/> 
                </div>
            </div>

            <div className='row'>
                <div className='column left'>
                    <p><label>Do any of the following cases apply to you?</label></p>
                    <ul>
                        <li>You have relatives who are Harvard alumni.</li>
                        <li>You have relatives who are Harvard employees.</li>
                        <li>You have relatives who made large donations to Harvard in the past.</li>
                    </ul>
                </div>
                <div className='column right'>
                    Yes<input 
                        type='checkbox' 
                        name='connections'
                        checked={this.state.connections}
                        onChange={this.check}/>
                </div>
            </div>
                        
                <div>
                    <Probability 
                        mathSAT={this.state.mathSAT}
                        verbalSAT={this.state.verbalSAT}
                        GPA={this.state.GPA}
                        subjectSAT={this.state.subjectSAT}
                        citizenship={this.state.citizenship}
                        ethnicity={this.state.ethnicity}
                        athletics={this.state.athletics}
                        connections={this.state.connections}/>
                </div>
        </div>
        );   
    }
}

export default Input;
