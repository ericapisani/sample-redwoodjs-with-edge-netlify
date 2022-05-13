import { render } from '@redwoodjs/testing/web'

import CanadaPage from './CanadaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CanadaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CanadaPage />)
    }).not.toThrow()
  })
})
