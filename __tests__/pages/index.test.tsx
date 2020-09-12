import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'

test('should render Home page', () => {
  expect.hasAssertions()

  render(<Home />)

  expect(
    screen.getByRole('heading', {
      name: /react template with next\.js, typescript and tailwind css/i,
    }),
  ).toBeInTheDocument()
})
