import React from 'react'
import styled from 'styled-components'
function BlankPage() {
    return (
        <Container>
            
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 20vh;
    background: transperant;

    @media only screen and (max-width: 1200px){
        height: 30vh;
      }
`
export default BlankPage