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
        this.setState({
            [event.target.name]: event.target.value
        });
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
            <div className='form'>
                <div className='column left'>
                    <form>
                        <p><label>What was your highest score on the math section of the SAT?</label></p>
                        <input 
                            type='range' 
                            min={200} 
                            max={800} 
                            value={this.state.mathSAT} 
                            step={10} name='mathSAT' 
                            onChange={this.handleChange}/>
                        <div>{this.state.mathSAT}</div>
                        
                        <p><label>What was your highest score on the verbal section of the SAT?</label></p>
                        <input 
                            type='range' 
                            min={200} 
                            max={800} 
                            value={this.state.verbalSAT} 
                            step={10} name='verbalSAT' 
                            onChange={this.handleChange}/>
                        <div>{this.state.verbalSAT}</div>

                        <p><label>What is your high school GPA (normalized to a 4-point scale)?</label></p>
                        <input 
                            type='range' 
                            min={0.0} 
                            max={4.0} 
                            value={this.state.GPA} 
                            step={0.01} 
                            name='GPA' 
                            onChange={this.handleChange}/>
                        <div>{this.state.GPA}</div> {/* Not sure if we should have 2 or 3 significant figures here */}

                        <p><label>What is your average score across all of the SAT II subject tests that you've taken?</label></p>
                        <input 
                            type='range' 
                            min={200} 
                            max={800} 
                            value={this.state.subjetSAT} 
                            step={10} name='subjectSAT' 
                            onChange={this.handleChange}/>
                        <div>{this.state.subjectSAT}</div>

                        <p><label>Are you a US citizen or permanent resident?</label></p>
                        Yes<input 
                            type='checkbox' 
                            checked={this.state.citizenship} 
                            name='citizenship' 
                            onChange={this.check}/>
                    
                        <p><label>What is your race/ethnicity?</label></p>
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

                        <p><label>Are you being recruited by Harvard for varsity athletics?</label></p>
                        Yes<input 
                            type='checkbox' 
                            name='athletics'
                            checked={this.state.athletics}
                            onChange={this.check}/> 

                        <p><label>Do you have any non-athletic special connection to Harvard? For example, do any of the following cases apply to you:</label></p>
                        <ul>
                            <li>You have relatives who are Harvard alumni.</li>
                            <li>You have relatives who are Harvard employees.</li>
                            <li>You have relatives who made large donations to Harvard in the past.</li>
                        </ul>
                        Yes<input 
                            type='checkbox' 
                            name='connections'
                            checked={this.state.connections}
                            onChange={this.check}/>
                    </form>
                </div>
                <div className='column right'>
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
