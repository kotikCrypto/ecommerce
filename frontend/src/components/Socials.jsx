import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Socials = () => {
  return (
    <div className='socials'>
      <div className="socialsDiv">
        <div className="socialsTop">
          <h2>Socail Media</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div className="socialsBottom">

          <div className="socialsBottomImages">
            <div className="socialsBottomImg">
              <img src="./assets/uploads/instagram-01.jpg" alt="" />
              <div className="socialsHover">
                <Link to="">Fashion</Link>
                <FaInstagram/>
              </div>
            </div>
            <div className="socialsBottomImg">
              <img src="./assets/uploads/instagram-02.jpg" alt="" />
              <div className="socialsHover">
                <Link to="">New</Link>
                <FaInstagram/>
              </div>
            </div>
            <div className="socialsBottomImg">
              <img src="./assets/uploads/instagram-03.jpg" alt="" />
              <div className="socialsHover">
                <Link to="">Brand</Link>
                <FaInstagram/>
              </div>
            </div>
            <div className="socialsBottomImg">
              <img src="./assets/uploads/instagram-04.jpg" alt="" />
              <div className="socialsHover">
                <Link to="">Makeup</Link>
                <FaInstagram/>
              </div>
            </div>
            <div className="socialsBottomImg">
              <img src="./assets/uploads/instagram-05.jpg" alt="" />
              <div className="socialsHover">
                <Link to="">Leather</Link>
                <FaInstagram/>
              </div>
            </div>
            <div className="socialsBottomImg">
              <img src="./assets/uploads/instagram-06.jpg" alt="" />
              <div className="socialsHover">
                <Link to="">Bag</Link>
                <FaInstagram/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Socials