import { render } from '@redwoodjs/testing/web'

import UkPage from './UkPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UkPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UkPage />)
    }).not.toThrow()
  })
})
