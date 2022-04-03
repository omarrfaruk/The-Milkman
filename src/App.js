import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs'
function App() {
  return (
    <div>
      <Header></Header>
      {/* <Home></Home> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route></Route>
      </Routes>
      {/* <Review></Review> */}
    </div>
  );
}

export default App;
