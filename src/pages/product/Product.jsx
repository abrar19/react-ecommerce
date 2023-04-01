import React, { useState } from 'react';
import './product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'

const Product = () => {

    const images = [
        "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    ]

    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(1);

    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
                    <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span>$199</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum accusamus ducimus quibusdam quod odio sapiente, culpa sit iusto recusandae facere deleniti laborum corporis voluptas reiciendis amet at illum sequi!
                </p>
                <div className="quantity">
                    <button onClick={()=>setQuantity(quantity-1)} disabled={quantity<=1}>-</button>
                    {quantity}
                    <button onClick={()=>setQuantity(quantity+1)}>+</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className="link">
                    <div className="item">
                        <FavoriteBorderIcon/>ADD TO WISHLIST
                    </div>
                    <div className="item">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
