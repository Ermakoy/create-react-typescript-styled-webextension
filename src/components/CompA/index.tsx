/**
 * Shared component
 */
import * as React from 'react'
import styled from 'styled-components'

const CompA = styled.div`
  padding: 10px;
  text-align: center;
  border: 5px solid orangered;
`

const CompATitle = styled.h1`
  color: orange;
`

const _greet = () => browser.runtime.sendMessage({ type: 'GREETING' })
  .then(response => alert(`Background Script: "${response}"`))
  .catch(console.error)

export default () => (
  <CompA>
    <CompATitle>This is a shared component</CompATitle>
    <button onClick={_greet}>Say Hi to Background Script!</button>
  </CompA>
)
