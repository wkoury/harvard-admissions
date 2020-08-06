import React from 'react';

const About = () => {
    return(
        <div className='about'>
            <p>The purpose of this website is to inform interested parties about their likelihood of admission to Harvard University based on academic credentials, race/ethnicity, and special connections.</p>
            <p>The admissions statistics are based on Harvard admissions data from the Classes of 2014-2019 made public through the SFFA v. Harvard (2018) lawsuit. See below for specific references.</p>
            <p>Harvard employs a holistic admissions process, which means that there are many other factors than academics that determine your admissions chances.</p>
            <p>Holistic admissions are inherently random, so even the most academically qualified applicants may not have a large admissions probability.</p>
            <p>The designers of this website hope that you will use this information when deciding which colleges to apply to. Our primary motivation is providing information to the public.</p>
            <p>The underlying research behind this site was done by Drs. Tyler Ransom, Josh Kinsler, and Peter Arcidiacono. Web development was done by Will Koury.</p>
            <span><center><a href='https://tyleransom.github.io/research/legacyathlete.pdf' rel='noopener noreferrer' target='_blank'>Research</a> | <a href='https://github.com/wkoury/harvard-admissions' rel='noopener noreferrer' target='_blank'>GitHub</a></center></span>
        </div>
    );
};

export default About;
