import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
         <Nav>
                 <Link to='/login'>LOgin</Link>
                <Link to='/register'>Register</Link>
           </Nav>
           
            <Outlet></Outlet>
        </div>
    );
};

export default Main;