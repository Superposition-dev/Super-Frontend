import { Routes, Route } from 'react-router-dom'
import Layout from '../components/common/Layout'
import MainPage from '../pages/main'
import Detail from '../components/Detail'

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path='/detail' element={<Detail/>}></Route>
      </Route>
    </Routes>
  )
}

export default Routers