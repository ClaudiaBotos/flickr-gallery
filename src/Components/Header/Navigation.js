import React from 'react';
import {NavLink} from 'react-router-dom';




const Navigation =(props) => (


              <nav className="main-nav">
                <ul>
                  <li><NavLink to='/flowers'>Flowers</NavLink></li>
                  <li><NavLink to='/castles'>Castles</NavLink></li>
                  <li><NavLink to='/nature'>Nature</NavLink></li>
                </ul>
              </nav>





)

export default Navigation;
