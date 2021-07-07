/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'

import { render, screen } from '@testing-library/react'
import SearchInput from './index'

describe('search input component', () => {
    it('should render input without crashing', () => {
        const { getByRole } = render(<SearchInput />)
        const input = getByRole('textbox');
        expect(input).toBeInTheDocument()
    })
})
