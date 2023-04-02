import React from 'react';
import styled from 'styled-components';

const 
WidgetsText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Widgets: React.FunctionComponent = () => {
    return (
        <WidgetsText>Widgets</WidgetsText>
    )
}

export default Widgets;
