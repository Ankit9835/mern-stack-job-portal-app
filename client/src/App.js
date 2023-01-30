
import styled from 'styled-components';
import logo from './assets/images/logo.svg'
import main from './assets/images/main.svg'
import Wrapper from "./assets/wrappers/LandingPage";
import {Logo} from "./components/"
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import {Register,Landing,Error,ProtectedRoute} from './pages'
import {AddJob,AllJobs,Profile,SharedLayout,Stats} from './pages/dashboard'


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Stats />}></Route>
            <Route path='/all-jobs' element={<AllJobs />}></Route>
            <Route path='/add-jobs' element={<AddJob />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
          </Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
          <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
