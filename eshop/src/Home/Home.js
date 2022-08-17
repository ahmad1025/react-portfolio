import React from 'react'
import "./Home.css"
import "../image/download.jpeg"
import Product from "../Product/Product"

function Home() {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <img src="../image/download.jpeg" alt="" className="home__image" />
                <div className="home__rows">
                <Product />
                <Product />
                </div>
                <div className="home__rows">
                <Product />
                <Product />
                <Product />                    
                </div>
                <div className="home__rows">
                <Product />                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home