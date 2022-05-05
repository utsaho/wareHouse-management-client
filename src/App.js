import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
    return (
        <div className='home mx-auto'>
            <div className='w-100'>
                <Header></Header>
                <Routes>
                    <Route path='/' element={<Home></Home>} />
                    <Route path='/home' element={<Home></Home>} />
                    <Route path='/blogs' element={<Blogs></Blogs>} />
                </Routes>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default App;
