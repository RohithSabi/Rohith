import { Link } from 'react-router-dom';
import '../App.css';
import { FaShoppingCart } from "react-icons/fa";

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} ><h2>TOYSTORE</h2></div>
           <Link to={'/login'} className='login'> Login</Link> 
            
            <div onClick={() => props.handleShow(true)}> <h2><FaShoppingCart /> {props.count} </h2>
                
            </div>
        </div>
    );
}

export default Header;