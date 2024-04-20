import React from 'react'
import styled from 'styled-components'
function Map() {
    return (
        <Container>
            <img src='./banner.jpg' />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;

    background: black;
    position: fixed;
    top: 0;

    img{
        width: 100%;
        height: 100%;
    }
    
`
export default Map