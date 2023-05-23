import { render, screen } from '@testing-library/react';
import { configure } from 'axe-core';
import { configureAxe } from 'cypress-axe';
import App from './App';

const { toHaveNoViolations } = require('jest-axe')
const axe = configureAxe({
  rules: {
    'image-alt': { enabled: false }
  },
  // impactLevels: ['', '']
})
expect.extend(toHaveNoViolations)

it('should not have any accessibility errors', async () => {
  render(<App />, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})