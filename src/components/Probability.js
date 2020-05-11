import React from 'react';

class Probability extends React.Component {
    
    render(){
        return(
            <div className='probability'>
                <p>Your probability of being accepted at Harvard is {this.props.percent}%.</p>
            </div>
        );
    }

}

export default Probability;