import React from 'react';
import styled from 'styled-components';

const SkillsText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Skills: React.FunctionComponent = () => {
    return (
        <SkillsText>Skills</SkillsText>
    )
}

export default Skills;
