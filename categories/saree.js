import image1 from '../image/saree/sarees (1).jpg';
import image2 from '../image/saree/sarees (2).jpg';
import image3 from '../image/saree/sarees (3).jpg';
import image4 from '../image/saree/sarees (4).jpg';
import image5 from '../image/saree/cotton (1).jpg';
import image6 from '../image/saree/cotton (2).jpg';
import image7 from '../image/saree/cotton (3).jpg';
import image8 from '../image/saree/cotton (4).jpg';
import image9 from '../image/saree/fancy (1).jpg';
import image10 from '../image/saree/fancy (2).jpg';
import image11 from '../image/saree/fancy (3).jpg';
import image12 from '../image/saree/fancy (4).jpg';
import '../categories/saree.css';
import { useCart } from "../context/Cartcontext";
function Saree() {
    const { addToCart } = useCart();
    const data1 = [{ id: 1, image: image1, name: 'Organza Saree', price: 430 },
    { id: 2, image: image2, name: 'Organza Saree', price: 530 },
    { id: 3, image: image3, name: 'Organza Saree', price: 330 },
    { id: 4, image: image4, name: 'Organza Saree', price: 450 },
    { id: 5, image: image5, name: 'Cotton Saree', price: 430 },
    { id: 6, image: image6, name: 'Cotton Saree', price: 630 },
    { id: 7, image: image7, name: 'Cotton Saree', price: 830 },

    { id: 8, image: image8, name: 'Cotton Sarees', price: 430 },
    { id: 9, image: image9, name: 'Fancy Sarees', price: 330 },
    { id: 10, image: image10, name: 'Fancy Saree', price: 430 },
    { id: 11, image: image11, name: 'Fancy Sarees', price: 230 },
    { id: 12, image: image12, name: 'Fancy Sarees', price: 430 },]

    return (
        <>
            <div className='saree-div'>
                <h1>Alluring Sarees</h1>
                <div className='div-p'> <p>"The saree is more than just a garment—it's a symbol
                    of tradition, grace, and timeless beauty.
                    Woven with intricate craftsmanship and rich heritage,
                    each saree tells a story of culture and elegance."</p></div>
                <div className='saree-imgdiv'>
                    {data1.map((item) => (
                        <div key={item.id} className='saree-img'>

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
export default Saree;