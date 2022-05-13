import { render } from '@redwoodjs/testing/web'

import UsPage from './UsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UsPage />)
    }).not.toThrow()
  })
})
