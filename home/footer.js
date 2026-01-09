import { Link } from 'react-router-dom';
import './footer.css';
function Footer(){
    return(

<footer className="footer-container">
  <div className="footer-content">
    <div className="footer-about">
      <h3>About Us</h3>
      <p>We offer the latest and best fashion dresses, sarees, kurtis and western wear for you to walk with confidence and style.</p>
    </div>

    <div className="footer-links">
      <h3>Quick Links</h3>
      <ul>
      <Link to='/' style={{textDecorationLine:'none' ,color:"white"}}> <li>Home</li></Link> 
      <Link to='/' style={{textDecorationLine:'none',color:"white"}}>  <li>Shop </li></Link>
        <Link to ='about' style={{textDecorationLine:'none',color:"white"}}><li> About</li></Link>
        <Link to='contact' style={{textDecorationLine:'none',color:"white"}}> <li>Contact</li></Link>
      </ul>
    </div>

    <div className="footer-contact">
      <h3>Contact Us</h3>
      <p>Email: support@Velvet Lvy.com</p>
      <p>Phone: +91 9876543210</p>
      <p>Address: 123 Fashion Street, Style City</p>
    </div>

    <div className="footer-social">
      <h3>Follow Us</h3>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">Facebook</a> | 
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a> | 
        <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">Twitter</a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} Velvet Lvy. All rights reserved.</p>
  </div>
</footer>)}
export default Footer;