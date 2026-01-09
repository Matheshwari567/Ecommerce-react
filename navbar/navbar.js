import { FaShoppingCart, FaSearch } from "react-icons/fa";
import image from '../image/Brown and Beige Watercolor Sketch Online Shop Logo.png';
import '../navbar/navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/Cartcontext';

function Navbar() {
    const navigate = useNavigate();
    const { getCartCount } = useCart();

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src={image} alt="img" className="logoimg" />
                </div>
                <div className="ul-div">
                    <ul className='div-ull'>

                       <Link to='/' style={{textDecorationLine:'none', color:'black'}}><li className='nav-li'>Home</li></Link>
                        <li className="nav-li dropdown">
                            Categories
                            <ul className="dropdown-menu">
                           <Link to='/anarkali' style={{textDecorationLine:'none' ,outline: 'none'}}> <li className="dropdown-item">Anarkali</li></Link>
                           <Link to='/saree' style={{textDecorationLine:'none', outline: 'none'}}> <li className="dropdown-item">Srees</li></Link>
                           <Link to='/western' style={{textDecorationLine:'none', outline: 'none'}}> <li className="dropdown-item">Western</li></Link>
                           <Link to='/kurti' style={{textDecorationLine:'none', outline: 'none'}}> <li className="dropdown-item">Kurtis</li></Link>                             
                           <Link to='/tops' style={{textDecorationLine:'none', outline: 'none'}}>   <li className="dropdown-item">Jeans/Tops</li></Link>
                           <Link to='/sweater' style={{textDecorationLine:'none', outline: 'none'}}>    <li className="dropdown-item">Sweaters</li></Link>
                            </ul>
                        </li>

                      <Link to='about' style={{textDecorationLine:'none', color:'black'}}><li className='nav-li'>About </li></Link>
                       <Link to='contact'  style={{textDecorationLine:'none', color: 'black'}}> <li className='nav-li'>Contact</li></Link>
                    </ul>
                </div>
                <div className="navbar-cart">
                    <FaSearch style={{ position: 'absolute', paddingLeft: '10px', height: '25px', width: '35px', paddingTop: '7px' }} />
                    <input type='search' placeholder='Easy To Search ' className='search-ip'>
                    </input></div>
                <div onClick={()=>navigate('/login')}>
                    <button className='btton '>Login</button>
                </div>
                <div onClick={() => navigate('/cart')}  className="cart-icon-contain">

                    <FaShoppingCart style={{ height: '25px', width: '25px', marginRight: '30px' }}/>
                    <span className="cart-count">{getCartCount()}</span>
                     </div> 
            </div>
            <hr></hr>



        </>
    )
}
export default Navbar;