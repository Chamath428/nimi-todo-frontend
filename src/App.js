import './App.css';
import HomePage from './pages/homePage';
import CreateToDo from './pages/createTodo';
import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>

      {/* <Sidebar></Sidebar> */}

      <Router>
        <Routes>
          <Route exact  path='/' element={<HomePage/>}/>
          <Route exact  path='/create' element={<CreateToDo/>}/>
        </Routes>
    </Router>
    </div>
    
  );
}

export default App;
