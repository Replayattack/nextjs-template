import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'

test('should render Home page', () => {
  expect.hasAssertions()
  render(<Home />)

  expect(
    screen.getByRole('heading', { name: /welcome to next.js!/i }),
  ).toBeInTheDocument()
})
