import { FaHeart } from 'react-icons/fa';
import image1 from '../image/anarkali/anarkali dress (1).jpg';
import image2 from '../image/anarkali/anarkali dress (2).jpg';
import image3 from '../image/anarkali/anarkali dress (3).jpg';
import image4 from '../image/anarkali/anarkali dress (4).jpg';
import image5 from'../image/anarkali/anarkali (5).jpg';
import image6 from'../image/anarkali/anarkali (6).jpg';
import image7 from'../image/anarkali/anarkali (7).jpg';
import image8 from'../image/anarkali/anarkali (8).jpg';
import image9 from '../image/anarkali/anarkali (4).jpg';
import image10 from '../image/anarkali/anarkali (1).jpg';
import image11 from '../image/anarkali/anarkali (2).jpg';
import image12 from '../image/anarkali/anarkali (3).jpg';
import '../categories/anarkai.css';
import { useCart } from '../context/Cartcontext';
function Anar(){
    const{addToCart,handleAddToWishlist}=useCart();
    const data1 = [{ id: 1, image:  image1 , name: 'Anarkali Dress', price: 430 },
                   { id: 2, image: image2 , name: 'Anarkali Dress', price: 530 },
                   { id: 3, image: image3 , name: 'Anarkali Dress', price: 330 },
                   { id: 4, image: image4 , name: 'Anarkali Dress', price: 450 },
                   { id: 5, image:  image5 , name: 'Anarkali Dress', price: 430 },
                   { id: 6, image:  image6 , name: 'Anarkali Dress', price: 630 },
                   { id: 7, image:  image7 , name: 'Anarkali Dress', price: 830 },

                   { id: 8, image:  image8 , name: 'Anarkali Dress', price: 430 },
                   { id: 9, image:  image9 , name: 'Anarkali Dress', price: 330 },
                   { id: 10, image:  image10 , name: 'Anarkali Dress', price: 430 },
                   { id: 11, image:  image11 , name: 'Anarkali Dress', price: 230 },
                   { id: 12, image:  image12 , name: 'Anarkali Dress', price: 430 },]

    return(
        <>
          <div className='anar-div'>
            <h1>New Collections</h1>
           <div className='div-p'> <p>Discover the latest fashion style with our brand-new collection of dresses, 
                designed to capture elegance, confidence, and modern flair. 
              these new arrivals contemporary cuts with timeless beauty 
                to suit every occasion.</p></div>
                <div className='anar-imgdiv'>
                {data1.map((item) => (
                    <div key={item.id} className='anar-img'>
                        <div className="wishlist-icon" onClick={() => handleAddToWishlist(item)}>
                                <FaHeart />
                            </div>
                            <img src={item.image} alt='img'></img>
                                <h1>{item.name}</h1>
                                <p>price Rs:{item.price}</p>
                                <button className='btn' onClick={()=>addToCart(item)}>Buy Now</button>

                    </div>
                        ))}</div>
            

          </div>

        </>
    )
}
export default Anar;