import './App.css'
import WorkBench from './components/WorkBench'
import NewWorkBench from './pages/NewWorkbench'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import CreatePart from './pages/CreatePart'
import AllParts from './pages/AllParts'
import AllCpu from './pages/AllCpu'
import AllGpu from './pages/AllGpu'
import AllCase from './pages/AllCase'
import AllMobo from './pages/AllMobo'
import AllOther from './pages/AllOther'
import AllRam from './pages/AllRam'
import AllBenches from './pages/AllWorkBench'
import ShowWorkBench from './pages/ShowWorkBench'

const App = () => {
  return (
    <div className="App">
      <header></header>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parts" element={<WorkBench />} />
          <Route path="/parts/create" element={<CreatePart />} />
          <Route path="/wb/all" element={<AllBenches />} />
          <Route path="/wb/create" element={<NewWorkBench />} />
          <Route path="/parts/all" element={<AllParts />} />
          {/* <Route path="/parts/type/CPU" element={<AllCpu />} /> */}
          {/* <Route path="/parts/type/MOTHERBOARD" element={<AllMobo />} /> */}
          {/* <Route path="/parts/type/RAM" element={<AllRam />} /> */}
          {/* <Route path="/parts/type/GPU" element={<AllGpu />} /> */}
          <Route path="/parts/type/:id" element={<AllCase />} />
          {/* <Route path="/parts/type/OTHER" element={<AllOther />} /> */}
          <Route path="/wb/:id" element={<ShowWorkBench />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
