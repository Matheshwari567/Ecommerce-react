import { FaPhone, FaWhatsapp, FaEnvelope, FaStore } from 'react-icons/fa';
import '../contact/contact.css';
function Contact() {
    const submit=()=>{
   alert('submitted')
    }
    return (<>
        <div className="Contact-main">
            <div className="contact-div">
                <h1>Contact Us</h1>
                <p>@ Velvet Lvy</p>
            </div>
            <div className='tact-div'>
                <div className='navdiv'>
                    <nav>
                        <div className='nav-div'>
                            <FaPhone className='nav-icon' />
                            <h1>Phone</h1>
                        </div>
                        <div className='nav-div' >
                            <FaWhatsapp className='nav-icon' />
                            <h1>Whatsapp</h1>
                        </div>
                        <div className='nav-div'>
                            <FaEnvelope className='nav-icon' />
                            <h1>E-Mail</h1>
                        </div>
                        <div className='nav-div'>
                            <FaStore className='nav-icon' />
                            <h1>Our Shop</h1>
                        </div>
                    </nav>
                    <article>
                        <iframe
                            title="Tenkasi Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31529.3667019528!2d77.31524917704431!3d8.956400831495932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429c15ac547f7%3A0x9a707276cd8ae327!2sTenkasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1753348693326!5m2!1sen!2sin"
                            width="570"
                            height="360"
                            style={{ border: 0, marginTop: '20px', marginLeft: '40px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </article>
                </div>
                <hr></hr>
                <div className='form-div'>
                    <form>
                        <h1>Get In Touch</h1>
                        <p>
                            Get in touch with us for any questions, feedback, or support.<br />
                            We're here to help you every step of the way.
                        </p>
                        <h5>Name</h5>
                       <input type='text' ></input><br></br>
                       <h5>E-Mail</h5>
                       <input type='text' ></input><br></br>
                       <h5>Subject</h5>
                       <input type='text' ></input><br></br>
                       <h5>Message</h5>
                       <textarea type='textarea' ></textarea><br></br>
                       <button type='submit' onClick={submit}>Submit</button>
                       </form>
                </div>
            </div>
        </div>
    </>)
}
export default Contact;