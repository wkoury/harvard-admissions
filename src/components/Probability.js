import React from 'react';
import data from '../assets/Data';

class Probability extends React.Component {

    //returns a style variable based on the percentage
    //red: below 2.5%
    //yellow: between 2.5 and 4% (4% was Harvard's admit rate in 2019)
    //green: anything above that
    getColor(percentage) { 
        let color;

        if(percentage < 2.5){
            color = 'red';
        }else if(percentage >= 2.5 && percentage < 4){
            color = 'yellow';
        }else{
            color = 'green';
        }

        return color;
    }

    //All functions below are based on pseudocode from Dr. Tyler Ransom.

    calculatePercentage() {
        let percentage = -1; //if -1 shows up on the site, then something needs to be fixed
        
        //Redundant variable name changes, but it makes the code more readable
        let athletics = this.props.athletics;
        let ethnicity = this.props.ethnicity;
        let connections = this.props.connections;
        let citizenship = this.props.citizenship;

        if(!citizenship){
            return <p>Your admissions chances are unknown!</p>;
        }

        let decile = this.calculateDecile();

        if(connections){
            if(ethnicity==='white'){
                percentage = data[decile][1];
            }else if(ethnicity==='african-american'){
                percentage = data[decile][3];
            }else if(ethnicity==='hispanic'){
                percentage = data[decile][5];
            }else if(ethnicity==='asian-american'){
                percentage = data[decile][7];
            }else{
                percentage = data[decile][9];
            }
        }else{
            if(ethnicity==='white'){
                percentage = data[decile][0];
            }else if(ethnicity==='african-american'){
                percentage = data[decile][2];
            }else if(ethnicity==='hispanic'){
                percentage = data[decile][4];
            }else if(ethnicity==='asian-american'){
                percentage = data[decile][6];
            }else{
                percentage = data[decile][8];
            }
        }

        if(athletics){ //athletics should override all other conditions, so this if-else cascade should be last.
            if(decile < 1){
                percentage = 50;
            }else if(decile >= 1 && decile <= 3){
                percentage = 79.52;
            }else if(decile >= 4 && decile <= 6){
                percentage = 87.21;
            }else if(decile >= 7 && decile <= 9){
                percentage = 94.04;
            }
        }

        return <p><span style={{
            color: this.getColor(percentage)
        }}className='bigger'>{percentage}%</span> of students with your attributes were accepted to Harvard.</p>
    }

    calculateAcademicIndex() { //the + sign is a unary operator to convert the props from strings to numbers
        return ((+this.props.mathSAT + +this.props.verbalSAT)/20 + +this.props.GPA*20 + +this.props.subjectSAT/10);
    }

    calculateDecile() {
        let ai = +this.calculateAcademicIndex();
        let decile;
        //this function assumes that 40 <= ai <= 240
        if(40<= ai && ai <=193.5){
            decile = 1;
        }else if(193.5 < ai && ai <= 205.5){
            decile = 2;
        }else if(205.5 < ai && ai <= 213){
            decile = 3;
        }else if(213 < ai && ai <= 218.5){
            decile = 4;
        }else if(218.5 < ai && ai <= 223){
            decile = 5;
        }else if(223 < ai && ai<= 226.5){
            decile = 6;
        }else if(226.5 < ai && ai <= 229.5){
            decile = 7;
        }else if(229.5 < ai && ai <= 232.5){
            decile = 8;
        }else if(232.5 < ai && ai<= 235.8){
            decile = 9;
        }else if(235.8 < ai && ai <= 240){
            decile = 10;
        }

        decile--;

        return decile;
    }
    
    render(){
        return(
            <div className='probability'>
                <h4>{this.calculatePercentage()}</h4>
                <p><b>Stats for nerds:</b></p>
                <p>Total SAT: {+this.props.mathSAT + +this.props.verbalSAT}</p>
                <p>Academic Index: {(+this.props.mathSAT + +this.props.verbalSAT)/20 + +this.props.GPA*20 + +this.props.subjectSAT/10}</p>
                <p>Academic Index Decile: {+this.calculateDecile() + 1}</p>
            </div>
        );
    }

}

export default Probability;