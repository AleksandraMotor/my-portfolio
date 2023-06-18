import React from 'react';
import * as SiIcons from 'react-icons/si';
import ButtonHtml from '../../components/buttons/button-html/ButtonHtml';
import ButtonSass from '../../components/buttons/button-sass/ButtonSass';
import ButtonJs from '../../components/buttons/button-js/ButtonJs';
import ButtonReact from '../../components/buttons/button-react/ButtonReact';
import ButtonAffinity from '../../components/buttons/button-affinity/ButtonAffinity';
import ButtonGit from '../../components/buttons/button-git/buttonGit';

import './Skills.scss';

const Skills: React.FunctionComponent = () => {
    return (
        <div className='skills'>
            <ButtonHtml/>
            <ButtonSass/>
            <ButtonJs/>
            <ButtonReact/>
            <ButtonAffinity/>
            <ButtonGit/>

            <SiIcons.SiTypescript/>
            <SiIcons.SiAngular/>
            <SiIcons.SiBootstrap/>
            <SiIcons.SiTailwindcss/>
            <SiIcons.SiCypress/>
            
            <SiIcons.SiAdobephotoshop/>
        </div>
    );
};

export default Skills;
