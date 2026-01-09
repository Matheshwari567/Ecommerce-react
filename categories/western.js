import { useCart } from "../context/Cartcontext";
import image1 from "../image/dress/western (7).jpg";
import image2 from "../image/dress/western (6).jpg";
import image3 from "../image/dress/western (1).jpg";
import image4 from "../image/dress/dresss (3).jpg";
import image5 from "../image/dress/dresss (4).jpg";
import image6 from "../image/dress/dresss (5).jpg";
import image7 from "../image/dress/dresss (6).jpg";
import image8 from "../image/dress/dresss (7).jpg";
import image9 from "../image/dress/western (2).jpg";
import image10 from "../image/dress/western (3).jpg";
import image11 from "../image/dress/western (4).jpg";
import image12 from "../image/dress/western (5).jpg";
import '../categories/wester.css';
function West() {
    const { addToCart } = useCart();
    const data1 = [{ id: 1, image: image1, name: 'Western Wear', price: 430 },
    { id: 2, image: image2, name: 'Western Wear', price: 530 },
    { id: 3, image: image3, name: 'Western Wear', price: 330 },
    { id: 4, image: image4, name: 'Western Wear', price: 450 },
    { id: 5, image: image5, name: 'Western Wear', price: 430 },
    { id: 6, image: image6, name: 'Western Wear', price: 630 },
    { id: 7, image: image7, name: 'Western Wear', price: 830 },

    { id: 8, image: image8, name: 'Western Wears', price: 430 },
    { id: 9, image: image9, name: 'Western Wear', price: 330 },
    { id: 10, image: image10, name: 'Western Wear', price: 430 },
    { id: 11, image: image11, name: 'Western Wear', price: 230 },
    { id: 12, image: image12, name: 'Western Wear', price: 430 },]

    return (
        <>
            <div className='west-div'>
                <h1>Western Wears</h1>
                <div className='div-p'> <p>"Step into effortless style with our chic collectio
                    n of western dresses. Designed to flatter every silhouette, these pieces 
                    blend comfort with modern trends. From casual daywear to statement evening  looks, find the perfect dress for every moment."</p></div>
                <div className='west-imgdiv'>
                    {data1.map((item) => (
                        <div key={item.id} className='west-img'>

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
export default West;