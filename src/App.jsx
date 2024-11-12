import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login'
import Register from './Pages/Register';
import Topics from './Pages/Topics'
import QuizSelector from './Pages/QuizSelector'
import TopicsAdmin from './Pages/TopicsAdmin'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/topics' element={<Topics/>} />
          <Route path='/quiz' element={<QuizSelector/>} />
          <Route path='/topicsadmin' element={<TopicsAdmin/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
