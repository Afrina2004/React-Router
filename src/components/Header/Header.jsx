import { Link , NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
         <h2>Navber</h2>
         <nav>
           
            <Link to='/'>Home</Link>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/about'>About Us</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
           
      </nav>   
        </div>
    );
};

export default Header;