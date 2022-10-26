import './App.css'
import WorkBench from './components/WorkBench'
import NewWorkBench from './pages/NewWorkbench'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import CreatePart from './pages/CreatePart'
import AllParts from './pages/AllParts'
import ListPart from './pages/ListPart'
import AllBenches from './pages/AllWorkBench'
import ShowWorkBench from './pages/ShowWorkBench'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className="App">
      <header className="titleBlock">
        <h1 className="title">Computer Workbench</h1>
        <Nav />
      </header>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parts" element={<WorkBench />} />
          <Route path="/parts/create" element={<CreatePart />} />
          <Route path="/wb/all" element={<AllBenches />} />
          <Route path="/wb/:id" element={<ShowWorkBench />} />
          <Route path="/wb/create" element={<NewWorkBench />} />
          <Route path="/parts/all" element={<AllParts />} />
          <Route path="/parts/type/:id" element={<ListPart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
