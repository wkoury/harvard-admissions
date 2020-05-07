import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mathSAT: null,
            verbalSAT: null,
            GPA: null,
            avgSubjectSAT: null,
            citizenship: null,
            ethnicity: null,
            connections: null
        };

       this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){

        return(
            <div>
                <form>
                    <p><label>What was your highest score on the math section of the SAT?</label></p>
                    <input type='number' placeholder='200-800' name='mathSAT' onChange={this.handleChange}/>
                    <p><label>What was your highest score on the verbal section of the SAT?</label></p>
                    <input type='number' placeholder='200-800' name='verbalSAT' onChange={this.handleChange}/>
                    <p><label>What is your high school GPA (normalized to a 4-point scale)?</label></p>
                    <input type='number' placeholder='4.0' name='GPA' onChange={this.handleChange}/>
                    <p><label>What is your average score across all of the SAT II subject tests that you've taken?</label></p>
                    <input type='number' placeholder='200-800' name='avgSubjectSAT' onChange={this.handleChange}/>
                    <p><label>Are you a US citizen or permanent resident?</label></p>
                    yes<input type='checkbox' name='citizenship'/> no<input type='checkbox'/>
                    <p><label>What is your race/ethnicity?</label></p>
                    <select id="ethnicities">
                        <option value='white'>White</option>
                        <option value='african-american'>African American</option>
                        <option value='hispanic'>Hispanic</option>
                        <option value='asian-american'>Asian-American</option>
                        <option value='other'>Other</option>
                        <option value='undisclosed'>Prefer not to say</option>
                    </select>
                    <p><label>Do you have a special connection to Harvard? For example, do any of the following cases apply to you:</label></p>
                    <ul>
                        <li>You are being recruited as a varsity athlete.</li>
                        <li>You have relatives who are Harvard alumni.</li>
                        <li>You have relatives who are Harvard employees.</li>
                        <li>You have relatives who made large donations to Harvard in the past.</li>
                    </ul>
                    yes<input type='checkbox' name='connections'/> no<input type='checkbox'/>
                </form>
            </div>
        );
    }
}

export default Form;
