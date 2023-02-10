import React from 'react'
import { FaEye, FaShoppingCart, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductItem = () => {
  return (
    <div className='sliderImgDiv'>

        <div className="sliderImgTop product">

          <div className="sliderImgTopInner">
            <img src='./assets//uploads/men-03.jpg' alt='' className="sliderImage"></img>
          </div>

          <div className="sliderImgTopHover">
            <Link to="/product/23234" className='sliderImgLink'>
              <FaEye />
            </Link>
            <Link to="/" className='sliderImgLink'>
              <FaStar />
            </Link>
            <Link to="/" className='sliderImgLink'>
              <FaShoppingCart />
            </Link>
          </div>

        </div>

        <div className="sliderImgBottom">

          <div className="sliderImgBottomTop productTop">
            <h3 className="sliderImgTitle productTitle">Love Nana '20</h3>
            <span className="sliderImgStar">5 <FaStar /></span>
          </div>

          <div className="sliderImgBottomBottom">
            <h4 className="sliderImgPrice">$ 150.00</h4>

          </div>

        </div>
    </div>
  )
}

export default ProductItem