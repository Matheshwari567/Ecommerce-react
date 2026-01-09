import { useCart } from "../context/Cartcontext";
import '../categories/sweater.css';
import image1 from '../image/sweater/sweater (1).jpg';
import image2 from '../image/sweater/sweater (2).jpg';
import image3 from '../image/sweater/sweater (3).jpg';
import image4 from '../image/sweater/sweater (4).jpg';
import image5 from '../image/sweater/sweater (5).jpg';
import image6 from '../image/sweater/sweater (6).jpg';
import image7 from '../image/sweater/sweater (7).jpg';
import image8 from '../image/sweater/sweater (8).jpg';
import image9 from '../image/sweater/sweater (9).jpg';
import image10 from '../image/sweater/sweater (10).jpg';
import image11 from '../image/sweater/sweater (13).jpg';
import image12 from '../image/sweater/sweater (12).jpg';
function Sweater(){
    const { addToCart } = useCart();
    const data1 = [{ id: 1, image:  image1 , name: 'Women Sweater', price: 530 },
                   { id: 2, image: image2 , name: 'Women Sweater', price: 530 },
                   { id: 3, image: image3 , name: 'Women Sweater', price: 630 },
                   { id: 4, image: image4 , name: 'Women Sweater', price: 450 },
                   { id: 5, image:  image5 , name: 'Women Sweater', price: 430 },
                   { id: 6, image:  image6 , name: 'Women Sweater', price: 630 },
                   { id: 7, image:  image7 , name: 'Women Sweater', price: 430 },

                   { id: 8, image:  image8 , name: 'Women Sweater', price: 430 },
                   { id: 9, image:  image9 , name: 'Women Sweater', price: 530 },
                   { id: 10, image:  image10 , name: 'Women Sweater', price: 430 },
                   { id: 11, image:  image11 , name: 'Women Sweater', price: 430 },
                   { id: 12, image:  image12 , name: 'Women Sweater', price: 430 },]

    return(
        <>
          <div className='sweat-div'>
            <h1>New Collections</h1>
           <div className='div-p'> <p>This women's sweater offers cozy warmth with a touch of elegance, perfect for chilly days. 
            Made from soft, breathable fabric, it ensures all-day comfort without compromising style. Its classic design pairs effortlessly with jeans, skirts, or 
            trousers for a timeless look.</p></div>
                <div className='sweat-imgdiv'>
                {data1.map((item) => (
                    <div key={item.id} className='sweat-img'>
                        
                            <img src={item.image} alt='img'></img>
                                <h1>{item.name}</h1>
                                <p>price Rs:{item.price}</p>
                                <button className='btn'  onClick={()=>addToCart(item)}>Buy Now</button>

                    </div>
                        ))}</div>
            

          </div>

        </>
    )
}
export default Sweater;