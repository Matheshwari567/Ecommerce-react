import './home.css';
import { useCart } from '../context/Cartcontext';
import { FaHeart } from 'react-icons/fa';
import image11 from '../image/saree/sarees (5).jpg';
import image22 from '../image/saree/sarees (2).jpg';
import image33 from '../image/saree/sarees (3).jpg';
import image44 from '../image/saree/sarees (4).jpg';

import image111 from '../image/kurtis/kurtiss (9).jpg';
import image222 from '../image/kurtis/kurtiss (10).jpg';
import image333 from '../image/kurtis/kurtiss (11).jpg';
// import image444 from '../image/kurtis/kurtiss (5).jpg';
import image555 from '../image/kurtis/kurtiss (12).jpg';
import image6 from '../image/kurtis/kurtiss (13).jpg';
import image7 from '../image/kurtis/kurtiss (8).jpg';

import image21 from '../image/dress/dresss (6).jpg';
import image02 from '../image/dress/dresss (7).jpg';
import image23 from '../image/dress/dresss (3).jpg';
import image24 from '../image/dress/dresss (4).jpg';
import image25 from '../image/dress/dresss (5).jpg';
import image1 from '../image/anarkali/anarkali dress (1).jpg';
import image2 from '../image/anarkali/anarkali dress (2).jpg';
import image3 from '../image/anarkali/anarkali dress (3).jpg';
import image4 from '../image/anarkali/anarkali dress (4).jpg';
import banner1 from '../image/banners/banner (1).jpg';
import banner2 from '../image/banners/download (1).jpg';
import banner3 from '../image/banners/download.jpg';
import img from '../image/fashion women.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Home() {
    const { handleAddToWishlist, addToCart } = useCart();
    const navigate = useNavigate();
    const data1 = [{ id: 1, image: image1, name: 'Anarkali Dress', price: 430 },
    { id: 2, image: image2, name: 'Anarkali Dress', price: 530 },
    { id: 3, image: image3, name: 'Anarkali Dress', price: 330 },
    { id: 4, image: image4, name: 'Anarkali Dress', price: 450 },]

    const data2 = [{ id: 1, image: image11, name: 'Organza Saree', price: 430 },
    { id: 2, image: image22, name: 'Organza Saree', price: 530 },
    { id: 3, image: image33, name: 'Organza Saree', price: 330 },
    { id: 4, image: image44, name: 'Organza Saree', price: 450 },]

    const data3 = [{ id: 1, image: image21, name: 'Western Wear', price: 430 },
    { id: 2, image: image02, name: 'Western Wear', price: 530 },
    { id: 3, image: image23, name: 'Western Wear', price: 330 },
    { id: 4, image: image24, name: 'Western Wear', price: 450 },]

    const data4 = [{ id: 1, image: image111, name: 'Cotton Kurtis', price: 430 },
    { id: 2, image: image222, name: 'Cotton Kurtis', price: 530 },
    { id: 3, image: image333, name: 'Cotton Kurtis', price: 330 },
    { id: 4, image: image555, name: 'Cotton Kurtis', price: 450 },]

    const data5 = [{ id: 1, image: image6, name: 'Cotton Kurtis', price: 430 },
    { id: 2, image: image7, name: 'Cotton Kurtis', price: 530 },
    { id: 3, image: image555, name: 'Cotton Kurtis', price: 330 },
    { id: 4, image: image25, name: 'Western Wear', price: 450 },
    { id: 5, image: image2, name: 'Cotton Kurtis', price: 450 },
    { id: 6, image: image02, name: 'Western Wear', price: 450 },
    { id: 7, image: image222, name: 'Cotton Kurtis', price: 450 },
    { id: 8, image: image23, name: 'Weatern Wear', price: 450 },]


    return (<>

        <div className="main">
            <div className='first'>
                <div className='cont'>
                    <h1 >Walk With Confidence,Wear With Style</h1>
                    <p>Just click and enjoy the special offer to buy and walk with your own style.
                        Your appearance matters as it informs others what and how to think of you.
                    </p>
                    <Link to='anarkali'> <button className="btn1" style={{ height: '40px', width: '110px', marginTop: '35px' }}>Shop Now</button></Link>
                </div>
                <div className='img'>
                    <img src={img} alt='img' />
                </div>
            </div>
            <hr /> <h1 className='heading'>Special Offer</h1>
            <div id="carouselExampleDark" style={{ marginTop: '150px', margin: '20px' }} className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators" data-bs-interval="500" data-bs-pause="false" data-bs-wrap="true" >
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="500">
                        <Link to='sweater'><img src={banner3} className="d-block w-100" class='ban' alt="..." /> </Link>
                        <div className="carousel-caption d-none d-md-block">

                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="500">
                        <Link to='tops'> <img src={banner2} className="d-block w-100" class='ban' alt="..." /></Link>
                        <div className="carousel-caption d-none d-md-block">

                        </div>
                    </div>
                    <div className="carousel-item">
                        <Link to='tops'> <img src={banner1} className="d-block w-100" class='ban' alt="..." /></Link>
                        <div className="carousel-caption d-none d-md-block">

                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>

                </button>
            </div>
            <div className='third'>
                <h5>New Arrivals</h5>
                <div className='home-div'>
                    {data1.map((item) => (
                        <div className='homediv-img'>
                            <div className="wishlist-icon" onClick={() => handleAddToWishlist(item)}>
                                <FaHeart />
                            </div>
                            <img src={item.image} alt='img' onClick={() => navigate('/anarkali')} />
                            <h1>{item.name}</h1>
                            <p>Price Rs:{item.price}</p>
                            <button className='btn' onClick={() => addToCart(item)}>Add To Cart</button>
                        </div>))}</div>
            </div>
            <div className='third'>
                <h5>New Collections</h5>
                <div className='home-div'>
                    {data2.map((item) => (
                        <div className='homediv-img'>
                            <div className="wishlist-icon" onClick={() => handleAddToWishlist(item)}>
                                <FaHeart />
                            </div>
                            <img src={item.image} alt='img' onClick={() => navigate('/saree')} />
                            <h1>{item.name}</h1>
                            <p>Price Rs:{item.price}</p>
                            <button className='btn' onClick={() => addToCart(item)}>Add To Cart</button>
                        </div>))}</div>
            </div>
            <div className='third'>
                <h5>New Arrivals</h5>
                <div className='home-div'>
                    {data3.map((item) => (
                        <div className='homediv-img'>
                            <div className="wishlist-icon" onClick={() => handleAddToWishlist(item)}>
                                <FaHeart />
                            </div>
                            <img src={item.image} alt='img' onClick={() => navigate('/western')} />
                            <h1>{item.name}</h1>
                            <p>Price Rs:{item.price}</p>
                            <button className='btn' onClick={() => addToCart(item)}>Add To Cart</button>
                        </div>))}</div>
            </div>

            <div className='third'>
                <h5>Special Off Kurtis</h5>
                <div className='home-div'>
                    {data4.map((item) => (
                        <div className='homediv-img'>
                            <div className="wishlist-icon" onClick={() => handleAddToWishlist(item)}>
                                <FaHeart />
                            </div>
                            <img src={item.image} alt='img' onClick={() => navigate('/kurti')} />
                            <h1>{item.name}</h1>
                            <p>Price Rs:{item.price}</p>
                            <button className='btn' onClick={() => addToCart(item)}>Add To Cart</button>
                        </div>))}</div>
            </div>

            <div className='offer'>
                <h1>Special Discounts (50% Offer)</h1>
                <div className='home-div'>
                    {data5.map((item) => (
                        <div className='homediv-img'>
                            <div className="wishlist-icon" onClick={() => handleAddToWishlist(item)}>
                                <FaHeart />
                            </div>
                            <img src={item.image} alt='img' onClick={() => navigate('/kurti')} />
                            <h1>{item.name}</h1>
                            <p>Price Rs:{item.price}<span className='span-div'>50%</span></p>
                            <button className='btn' onClick={() => addToCart(item)}>Add To Cart</button>
                        </div>))}</div>

            </div>
        </div>








    </>)
}
export default Home;