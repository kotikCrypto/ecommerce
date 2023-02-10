import React from 'react'
import { FaStar } from 'react-icons/fa'

const ProductDetails = () => {
  return (
    <div className='productDetails'>
      <div className="productDetailsDiv">
        <div className="productDetailsTop">
          <img src="../assets/uploads/products-page-heading.jpg" alt="" />
          <div className="productDetailsTexts">
            <h2>Single Product Page</h2>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
          </div>
        </div>

        <div className="productDetailsBottom">
          <div className="productDetailsBottomLeft">

            <div className="productDetailsBottomImg">
              <img src="../assets/uploads/single-product-01.jpg" alt="" />
            </div>

            <div className="productDetailsBottomImg">
              <img src="../assets/uploads/single-product-02.jpg" alt="" />
            </div>

          </div>
          <div className="productDetailsBottomRight">

            <div className="productDetailsBottomTexts">

              <div className="productDetailsBottomContent">
                <h4>New Green Jacket</h4>
                <span><FaStar /></span>
              </div>
              <span className='productPrice'>$ 75.00</span>
              <span className='productDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officia, asperiores voluptas nulla corrupti cum ipsam saepe sapiente sint</span>

            </div>

            <div className="productDetailsBottomSocials">
              <div className="productQuantity">
                <div className="productQuantityLeft">
                  <h6>No. of Orders</h6>
                </div>
                <div className="productQuantityRught">
                  <input type="button" value="-" className='minus' />
                  <input type="number" min="1" step="1" value="1" className='vlaue'/>
                  <input type="button" value="+" className='plus' />
                </div>
              </div>
            </div>

            <div className="productDetailsBottomSocials total">
              <div className="productTotal">
                  <h4>Total: $210.00</h4>
                  <button>Add to Cart</button>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default ProductDetails