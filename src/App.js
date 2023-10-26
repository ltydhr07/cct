import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeRoute, PrivacyRoute } from './routes/routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeRoute />} />
        <Route path='/privacy' element={<PrivacyRoute />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
