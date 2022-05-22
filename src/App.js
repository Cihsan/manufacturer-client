import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllBlog from './Pages/AllBlog/AllBlog';
import Blog from './Pages/Home/Blog';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Shared/Footer';
import Header from './Shared/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/blogs" element={<AllBlog/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
