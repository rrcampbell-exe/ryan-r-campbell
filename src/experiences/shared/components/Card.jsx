import React from 'react'
import styled from 'styled-components'

// TODO: size should flex based on number of cards
// TODO: need to set up theme colors

const StyledDiv = styled.div`
  height: 16rem;
  width: 16rem;
  border: 1px solid #242424;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
`

const Card = ({ children }) => {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}

export default Card
