import { Routes, Route } from 'react-router-dom'
import Layout from '../components/common/Layout'

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<div>Home</div>}/>
      </Route>
    </Routes>
  )
}

export default Routers