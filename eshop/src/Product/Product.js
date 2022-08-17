import React from 'react'
import "./Product.css"

function Product() {
  return (
    <div>
        <div className="product">
            <div className="product__info">
                <p>Title</p>
                <p className="product__price">$30</p>
                <div className="produc__rating">##### Rating</div>
            </div>
            <img src="../image/download.jpg" alt="" className="product__img" />
            <button>Add To Bascket</button>
        </div>
    </div>
  )
}

export default Product