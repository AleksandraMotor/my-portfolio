import React from 'react';
import styled from 'styled-components';

const 
NotFoundText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const NotFound: React.FunctionComponent = () => {
    return (
        <NotFoundText>Not Found</NotFoundText>
    )
}

export default NotFound;
