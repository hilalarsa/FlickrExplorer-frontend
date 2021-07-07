/**
 * @jest-environment jsdom
 */

import React from 'react'
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render } from '@testing-library/react'
import App from '../pages/index'

describe('App', () => {
    it('should render the main page normally', () => {
        const { getByText } = render(<App />)

        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(getByText('Search'))
    })
})
