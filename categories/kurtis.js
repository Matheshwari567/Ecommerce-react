import image1 from '../image/kurtis/kurtiss (1).jpg';
import image2 from '../image/kurtis/kurtiss (2).jpg';
import image3 from '../image/kurtis/kurtiss (3).jpg';
import image4 from '../image/kurtis/kurtiss (4).jpg';
import image6 from '../image/kurtis/kurtiss (6).jpg';
import image7 from '../image/kurtis/kurtiss (7).jpg';
import image8 from '../image/kurtis/kurtiss (8).jpg';
import image9 from '../image/kurtis/kurtiss (9).jpg';
import image10 from '../image/kurtis/kurtiss (10).jpg';
import image11 from '../image/kurtis/kurtiss (11).jpg';
import image12 from '../image/kurtis/kurtiss (12).jpg';
import image5 from '../image/kurtis/kurtiss (13).jpg';
import '../categories/kurtis.css';
import { useCart } from "../context/Cartcontext";
function Kurti(){
     const{addToCart}=useCart();
    const data1 = [{ id: 1, image:  image1 , name: 'Kurtis Dress', price: 430 },
                   { id: 2, image: image2 , name: 'Kurtis Dress', price: 530 },
                   { id: 3, image: image3 , name: 'Kurtis Dress', price: 330 },
                   { id: 4, image: image4 , name: 'Kurtis Dress', price: 450 },
                   { id: 5, image:  image5 , name: 'Kurtis Dress', price: 430 },
                   { id: 6, image:  image6 , name: 'Kurtis Dress', price: 630 },
                   { id: 7, image:  image7 , name: 'Kurtis Dress', price: 830 },

                   { id: 8, image:  image8 , name: 'Kurtis Dress', price: 430 },
                   { id: 9, image:  image9 , name: 'Kurtis Dress', price: 330 },
                   { id: 10, image:  image10 , name: 'Kurtis Dress', price: 430 },
                   { id: 11, image:  image11 , name: 'Kurtis Dress', price: 230 },
                   { id: 12, image:  image12 , name: 'Kurtis Dress', price: 430 },]

    return(
        <>
          <div className='kurti-div'>
            <h1>New Collections</h1>
           <div className='div-p'> <p>"Kurtis are the perfect blend of comfort, elegance, and everyday style. 
            Whether you're dressing up for a festive occasion or keeping it casual at work, 
            our collection offers something for every mood. "</p></div>
                <div className='kurti-imgdiv'>
                {data1.map((item) => (
                    <div key={item.id} className='kurti-img'>
                        
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
export default Kurti;