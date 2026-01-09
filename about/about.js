import {
    FaShippingFast,
    FaUndoAlt,
    FaLock,
    FaMoneyBillWave,
    
} from 'react-icons/fa';

import '../about/about.css';
import image from '../image/download.jpg';
import image1 from '../image/banners/banner (1).jpg';
import image2 from '../image/banners/banner (2).jpg';
function About() {
    return (<>
        <div className="about-div">
            <h1 style={{marginTop:'150px',marginLeft:'560px'}} >About Us</h1>
            <div className="aboutimg-div">
                <div>
                    <img src={image} alt="img"></img></div>
                <div className='about-p'>
                    <p>Welcome to Velvet Lvy, your destination for stylish, affordable, and trend-forward women’s fashion.
                        Founded with a passion for empowering women through clothing, we offer a curated collection of dresses,
                        tops, western wear, and everyday essentials designed to help you express your unique style.
                        Whether you're dressing for a casual day out or a special occasion, our handpicked pieces
                        blend comfort, quality, and the latest fashion trends. At the heart of our shop is a
                        commitment to making every woman feel confident, beautiful, and inspired — one outfit at a
                        time. Thank you for choosing us to be part of your style journey.
                        At Velvet Lvy, we believe that fashion should be inclusive, accessible, and enjoyable. That’s why we offer a wide range of sizes, styles, and price points to suit every body and budget. Our customer-first approach ensures a smooth shopping experience, from browsing to checkout, with secure payments, fast delivery, and responsive support.

                        We’re proud to be a brand that champions self-love, celebrates diversity, and encourages women to express who they are through fashion. Whether you're shopping for a casual brunch, a bold evening look, or cozy loungewear, we’ve got something that’s just right for you.

                        Thank you for choosing us — we’re excited to be a part of your style journey.

                    </p></div>


            </div>
            <h1>Why Shop With Us</h1>
            <div className='serv-div'>

                <div className='div-ser'>
                    <FaShippingFast className='ser-icon' />
                    <h1>Free Shipping</h1>
                    <p>Enjoy free shipping on all orders over ₹999. We believe fashion should come with convenience — and no extra costs.

                    </p>
                </div>
                <div className='div-ser'>
                    < FaUndoAlt className='ser-icon' />
                    <h1> Easy Returns & Exchanges
                    </h1>
                    <p>If it doesn’t fit or feel right, no worries. We offer hassle-free
                        returns and exchanges within 7 days of delivery.
                        Your satisfaction is our priority.</p>
                </div>
                <div className='div-ser'>
                    < FaLock className='ser-icon' />
                    <h1>  Secure Payments

                    </h1>
                    <p>Shop with confidence. Our store uses secure, encrypted payment gateways
                        (UPI, cards, wallets, and COD) to keep your transactions safe.

                    </p>
                </div>
                <div className='div-ser'>
                    <FaMoneyBillWave  className='ser-icon' />
                    <h1> Cash On Delivery

                    </h1>
                    <p>Prefer to pay when it arrives? Choose Cash on Delivery at checkout — it’s simple, safe, and convenient.

                    </p>
                </div>
            </div>
            <div className='banner-div'>
                <h1>Special Offers</h1>
            <img src={image1} alt='img'></img>
            <div className='dress-div'>
                <h1>Limited-Time Offers on Women's Dresses!</h1>
                <p>Step into style and savings with our exclusive offers on women's dresses! Whether
                     you're looking for casual comfort, office-ready outfits, or head-turning evening wear, 
                     now is the perfect time to refresh your wardrobe. Enjoy up to 50% off on our most loved
                      styles — from elegant western dresses to everyday essentials. Crafted for comfort, designed to flatter, and priced to excite — these deals won’t last long.
                     Shop now and make every outfit count, only at Velvet Lvy</p>
                     <img src={image2} alt='img'></img>
            </div>
            </div>
        </div>
    </>)
}
export default About;