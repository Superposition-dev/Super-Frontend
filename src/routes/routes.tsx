import { Routes, Route } from 'react-router-dom'
import Layout from '../components/common/Layout'
import MainPage from '../pages/main'

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<MainPage/>}/>
      </Route>
    </Routes>
  )
}

export default Routers