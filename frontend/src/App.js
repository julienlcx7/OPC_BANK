import { BrowserRouter, createBrowserRouter,Route,RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import Main from './page/Main/Main';
import Login from './page/Login/Login';
import Account from './page/Account/Account'

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Main/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/account' element={<Account/>}/>

          </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
