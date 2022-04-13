import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css';
import Index from './components/Index';
import Show from './components/Show';
import New from './components/New';
import Edit from './components/Edit';

function App() {
  return (
    <Router>
      <nav className="nav1">
        <Link to='/'>Home</Link>
        <Link to='/aboutme'>About Me</Link>
        <Link to='/new'>Create new Blog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="/aboutme" element={<AboutMe />} /> */}
        <Route path="/:id" element={<Show />} />
        <Route path='/new' element={<New />} />
        <Route path='/:id/edit' element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
