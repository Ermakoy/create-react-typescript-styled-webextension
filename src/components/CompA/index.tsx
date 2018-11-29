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

class Comp extends React.Component<{}, any> {
  _greet = () => {
    browser.runtime.sendMessage({ type: 'GREETING' })
      .then(response => alert(`Background Script: "${response}"`))
      .catch(console.error)
  }

  render () {
    return (
      <CompA>
        <CompATitle>This is a shared component</CompATitle>
        <button onClick={this._greet}>Say Hi to Background Script!</button>
      </CompA>
    )
  }
}

export default Comp
