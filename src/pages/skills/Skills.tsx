import React from 'react';
import * as SiIcons from 'react-icons/si';
import ButtonHtml from '../../components/buttons/button-html/ButtonHtml';
import ButtonSass from '../../components/buttons/button-sass/ButtonSass';
import ButtonJs from '../../components/buttons/button-js/ButtonJs';
import ButtonReact from '../../components/buttons/button-react/ButtonReact';

import './Skills.scss';


const Skills: React.FunctionComponent = () => {
    return (
        <div className='skills'>
            <div className='skills__item'>
                <ButtonHtml/>
            </div>
            <div className='skills__item'>
                <ButtonSass/>
            </div>
            <div className='skills__item'>
                <ButtonJs/>
            </div>
            <div className='skills__item'>
                <ButtonReact/>
            </div>
            <div className='skills__item'>
            <SiIcons.SiTypescript/>
            </div>
            <div className='skills__item'>
            <SiIcons.SiAngular/>
            </div>
            <div className='skills__item'>
            <SiIcons.SiBootstrap/>
            </div>
            <div className='skills__item'>
            <SiIcons.SiTailwindcss/>
            </div>
            <div className='skills__item'>
            <SiIcons.SiCypress/>
            </div>
            <div className='skills__item'>
            <SiIcons.SiGithub/>
            </div>
            <div className='skills__item'>
            <SiIcons.SiAdobephotoshop/>
            </div>
            <div className='skills__item'>
            <SiIcons.SiAffinityphoto/>
            </div>
        </div>
    );
};

export default Skills;
