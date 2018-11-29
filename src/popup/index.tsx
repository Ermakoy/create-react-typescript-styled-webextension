import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
// Shared components
import CompA from '../components/CompA'
// Private components
import App from './components/App'

const Global = createGlobalStyle`
  min-width: 800px;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`
/**
 * Shared component
 */

ReactDOM.render(
  <div><Global /><App/><CompA/></div>,
  document.getElementById('root') as HTMLElement
)
