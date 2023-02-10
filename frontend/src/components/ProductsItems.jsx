import React from 'react'
import { FaEye, FaShoppingCart, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductsItems = () => {
  return (
    <div className='productsItems'>
      <div className="productsItemsDiv">
        <div className="productsItemsTop">
          <img src="./assets/uploads/products-page-heading.jpg" alt="" />
          <div className="productsItemsTexts">
            <h2>Check Our Products</h2>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
          </div>
        </div>



      </div>

      <div className="productsItemsOthers">
        <div className="productsItemsContent">
          <h2>Our Latest Products</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
        </div>

        <div className="productsItemsImages">
          <div className='sliderImgDiv'>

            <div className="sliderImgTop">

              <div className="sliderImgTopInner">
                <img src='./assets//uploads/men-03.jpg' alt='' className="sliderImage"></img>
              </div>

              <div className="sliderImgTopHover">
                <Link to="/" className='sliderImgLink'>
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

              <div className="sliderImgBottomTop">
                <h3 className="sliderImgTitle">Love Nana '20</h3>
                <span className="sliderImgStar">5 <FaStar /></span>
              </div>

              <div className="sliderImgBottomBottom">
                <h4 className="sliderImgPrice">$ 150.00</h4>

              </div>

            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default ProductsItems