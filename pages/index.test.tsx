import { render, screen } from '@testing-library/react'
import Home from './index'

test('should render Home page', () => {
  render(<Home />)

  expect(
    screen.getByRole('heading', { name: /welcome to next.js!/i }),
  ).toBeInTheDocument()
})
