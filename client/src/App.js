import './App.css'
import WorkBench from './components/WorkBench'
import NewWorkBench from './pages/NewWorkbench'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import CreatePart from './pages/CreatePart'
import AllParts from './pages/AllParts'
import AllCpu from './pages/AllCpu'

const App = () => {
  return (
    <div className="App">
      <header></header>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parts" element={<WorkBench />} />
          <Route path="/parts/create" element={<CreatePart />} />
          <Route path="/wb/create" element={<NewWorkBench />} />
          <Route path="/parts/all" element={<AllParts />} />
          <Route path="/parts/type/:id" element={<AllCpu />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
