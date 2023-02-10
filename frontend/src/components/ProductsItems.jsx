import React from 'react'
import ProductItem from './ProductItem'

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
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          i will add pagination when i do the backend
        </div>

      </div>


    </div>
  )
}

export default ProductsItems