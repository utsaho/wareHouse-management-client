import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';

function App() {
    return (
        <div className='home mx-auto'>
            <div className='w-100'>
                <Header></Header>
                <Routes>
                    <Route path='/' element={<Home></Home>} />
                    <Route path='/home' element={<Home></Home>} />
                    <Route path='/blogs' element={
                        <RequireAuth>
                            <Blogs></Blogs>
                        </RequireAuth>
                    } />
                    <Route path='/login' element={<Login></Login>} />
                    <Route path='/register' element={<Register></Register>} />
                </Routes>
                {/* <Footer></Footer> */}
            </div>
        </div>
    );
}

export default App;
