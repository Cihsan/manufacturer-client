import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllBlog from './Pages/AllBlog/AllBlog';
import AddReview from './Pages/DashBoard/AddReview';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrders from './Pages/DashBoard/MyOrders';
import MyProfile from './Pages/DashBoard/MyProfile';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Portfolio from './Pages/Portfolio/Portfolio';
import Purchase from './Pages/Purchase/Purchase';
import Header from './Shared/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<AllBlog />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/purchase" element={<Purchase/>}></Route>

        <Route path='/dashboard' element={<DashBoard />}>
          <Route index element={<MyOrders />}></Route>
          <Route path='add-review' element={<AddReview />}></Route>
          <Route path='my-profile' element={<MyProfile />}></Route>

        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
