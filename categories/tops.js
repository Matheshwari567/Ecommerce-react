import '../categories/tops.css';
import image1 from '../image/top&pant/tops (1).jpg';
import image2 from '../image/top&pant/tops (2).jpg';
import image3 from '../image/top&pant/tops (3).jpg';
import image4 from '../image/top&pant/tops (4).jpg';
import image5 from '../image/top&pant/tops (5).jpg';
import image6 from '../image/top&pant/tops (6).jpg';
import image7 from '../image/top&pant/pants (1).jpg';
import image8 from '../image/top&pant/pants (2).jpg';
import { useCart } from "../context/Cartcontext";
import image9 from '../image/top&pant/pants (3).jpg';
import image10 from '../image/top&pant/pants (4).jpg';
import image11 from '../image/top&pant/pants (5).jpg';
import image12 from '../image/top&pant/pants (6).jpg';
function Tops(){
  const { addToCart } = useCart();
    const data1 = [{ id: 1, image:  image1 , name: 'Women Tops', price: 430 },
                   { id: 2, image: image2 , name: 'Women Tops', price: 530 },
                   { id: 3, image: image3 , name: 'Women Tops', price: 330 },
                   { id: 4, image: image4 , name: 'Women Tops', price: 450 },
                   { id: 5, image:  image5 , name: 'Women Tops', price: 430 },
                   { id: 6, image:  image6 , name: 'Women Tops', price: 630 },
                   { id: 7, image:  image7 , name: 'Women Pants', price: 830 },

                   { id: 8, image:  image8 , name: 'Women Pants', price: 430 },
                   { id: 9, image:  image9 , name: 'Women Pants', price: 330 },
                   { id: 10, image:  image10 , name: 'Women Pants', price: 430 },
                   { id: 11, image:  image11 , name: 'Women Pants', price: 230 },
                   { id: 12, image:  image12 , name: 'Women Pants', price: 430 },]

    return(
        <>
          <div className='tops-div'>
            <h1>New Collection</h1>
           <div className='div-p'> <p>This women's top and pants set blends style with everyday
             comfort. The top features a flattering cut with modern detailing, perfect 
             for casual outings or relaxed evenings. Paired with tailored pants, 
             the outfit offers a sleek yet easygoing look.</p></div>
                <div className='tops-imgdiv'>
                {data1.map((item) => (
                    <div key={item.id} className='tops-img'>
                        
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
export default Tops;