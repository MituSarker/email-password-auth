
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import RegisterReactBoatstarp from './components/RegisterReactBoatstarp';
import LoginBootstrap from './components/LoginBootstrap';
import Main from './components/layout/Main';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Main></Main>,

    children :[
     {
      path:'/',
      element:<RegisterReactBoatstarp></RegisterReactBoatstarp>
     },
     {
      path:'/register',
      element:<RegisterReactBoatstarp></RegisterReactBoatstarp>
     },
     {
      path:'/login',
      element:<LoginBootstrap></LoginBootstrap>
     },

    ]
  }
])




function App() {
  return (
    <div className=''>
  <RouterProvider router={router}></RouterProvider>
    
    </div>
  );
}

export default App;
