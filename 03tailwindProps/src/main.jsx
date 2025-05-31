import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card username="Komal" post='Software Engineer'/>
    <Card username="Kelvin" post='Software Architect'/>
    <Card />
  </StrictMode>,
)
