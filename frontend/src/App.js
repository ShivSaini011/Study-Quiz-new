import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/register';
import Course from './Components/course';
import Courses from './Components/Courses';
import Profile from './Components/profile';
import Learnings from './Components/learnings';
import Home from './Components/Home';
import AddCourse from './Components/AddCourse';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/DashBoard/Dashboard';
import 'boxicons/css/boxicons.min.css';
import EditCourse from './Components/EditCourses';
import DUsers from './Components/DashBoard/DUsers';
import DCourses from './Components/DashBoard/DCourses';
import Assessment from './Components/Assessment';
import ErrorPage from './Components/ErrorPage';
import AddQuestions from './Components/AddQuestions';
import Performance from './Components/DashBoard/Performance';
import DTutors from './Components/DashBoard/DTutors';
import certificate from './Components/certificate';
import Forum from './Components/forum';
import About from './Components/About';
import { ProtectedRoute, AdminRoute } from './Components/ProtectedRoute';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/addquestions/:id" element={<AdminRoute><AddQuestions/></AdminRoute>}/>
          <Route path='/dashboard' element={<AdminRoute><Dashboard/></AdminRoute>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/courses' element={<ProtectedRoute><Courses/></ProtectedRoute>} />
          <Route path='/course/:id' element={<ProtectedRoute><Course/></ProtectedRoute>} />
          <Route path='/discussion/:id' element={<ProtectedRoute><Forum/></ProtectedRoute>} />
          <Route path='/certificate/:id' element={<ProtectedRoute><certificate/></ProtectedRoute>} />
          <Route path='/assessment/:id' element={<ProtectedRoute><Assessment/></ProtectedRoute>} />
          <Route path='/addcourse' element={<AdminRoute><AddCourse/></AdminRoute>} />
          <Route path='/editCourse/:id' element={<AdminRoute><EditCourse/></AdminRoute>} />
          <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
          <Route path='/Learnings' element={<ProtectedRoute><Learnings/></ProtectedRoute>} />
          <Route path='/Dcourses' element={<AdminRoute><DCourses/></AdminRoute>} />
          <Route path='/Dusers' element={<AdminRoute><DUsers/></AdminRoute>} />
          <Route path='/Dtutors' element={<AdminRoute><DTutors/></AdminRoute>} />
          <Route path='/Performance' element={<AdminRoute><Performance/></AdminRoute>} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
