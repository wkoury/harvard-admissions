import React from 'react';

class Probability extends React.Component {
    
    render(){
        return(
            <div className='probability'>
                <p>{this.props.percentage}% of students with similar credentials were accepted to Harvard.</p>
            </div>
        );
    }

}

export default Probability;