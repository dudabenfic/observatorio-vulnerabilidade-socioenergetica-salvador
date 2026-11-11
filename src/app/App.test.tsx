import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App'
const app = () => render(<BrowserRouter><App /></BrowserRouter>)
afterEach(cleanup)
describe('Observatório', () => { it('renders demonstrative notice and overview', () => { app(); expect(screen.getByText(/modo demonstrativo/i)).toBeInTheDocument(); expect(screen.getByRole('heading', { name: /entendendo a vulnerabilidade/i })).toBeInTheDocument() }); it('navigates to comparison', async () => { const user=userEvent.setup(); app(); await user.click(screen.getByRole('link',{name:'Comparativo'})); expect(await screen.findByRole('heading',{name:/compare com contexto/i})).toBeInTheDocument() }) })
