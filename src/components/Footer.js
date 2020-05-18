import React from 'react';

const Footer = (props) => {
    return(
        <div className='footer'>
            <a href='#top' onClick={props.onClick}>
                {props.about ? 'Back' : 'About'}
            </a>
        </div>
    );
}

export default Footer;
