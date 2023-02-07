import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <div className='explore'>
      <div className="exploreDiv">

        <div className="exploreDivLeft">
          <h2 className="exploreTitle">Explore our products</h2>
          <span className="exploreDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
          <div className="exploreQuote">
            <FaQuoteLeft />
            <p className="exploreQuoteText">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <p className="exploreDescText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque est numquam repudiandae minus quidem voluptate quis ullam tempora itaque esse natus, impedit enim animi corporis culpa fugiat, architecto voluptatum reiciendis!</p>

          <p className="exploreDescText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque est numquam repudiandae minus quidem...  <Link to="/contact">Contact Us</Link></p>
          <Link to="/" className='exploreLink'>Discover More</Link>
        </div>

        <div className="exploreDivRight">
          <div className="exploreDivCards">
            <div className="exploreDivCard">
              <div className="exploreDivTexts">
                <h4>Leather Bags</h4>
                <span>Latest Collection</span>
              </div>
            </div>
            <div className="exploreDivCard">
              <div className="exploreDivImg">
                <img src="./assets/uploads/explore-image-01.jpg" alt="" />
              </div>
            </div>
            <div className="exploreDivCard">
            <div className="exploreDivImg">
                <img src="./assets/uploads/explore-image-02.jpg" alt="" />
              </div>
            </div>
            <div className="exploreDivCard">
            <div className="exploreDivTexts">
                <h4>Different Types</h4>
                <span>Over 304 Products</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Explore