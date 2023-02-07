import React from 'react'
import { FaShoppingCart, FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Slider from "react-slick"

const KidsLatest = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};  
  return (
    <div className='latestContainer'>
      <div className="latestDiv">

        <div className="latestText">
          <h3 className="latestTitle">Kids Latest</h3>
          <p className='latestDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="latestDivImg">
          <div className="latestDivContent">
            <Slider {...settings}>

              <div className='sliderImgDiv'>

                <div className="sliderImgTop">

                  <div className="sliderImgTopInner">
                    <img src='./assets//uploads/kid-03.jpg' alt='' className="sliderImage"></img>
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

              <div className='sliderImgDiv'>
                <div className="sliderImgTop">

                  <div className="sliderImgTopInner">
                    <img src='./assets//uploads/kid-01.jpg' alt='' className="sliderImage"></img>
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
                    <h3 className="sliderImgTitle">Classic Spring </h3>
                    <span className="sliderImgStar">5 <FaStar /></span>
                  </div>

                  <div className="sliderImgBottomBottom">
                    <h4 className="sliderImgPrice">$ 120.00</h4>

                  </div>

                </div>
              </div>

              <div className='sliderImgDiv'>
                <div className="sliderImgTop">

                  <div className="sliderImgTopInner">
                    <img src='./assets//uploads/kid-02.jpg' alt='' className="sliderImage"></img>
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
                    <h3 className="sliderImgTitle">Air Force 1 X</h3>
                    <span className="sliderImgStar">5 <FaStar /></span>
                  </div>

                  <div className="sliderImgBottomBottom">
                    <h4 className="sliderImgPrice">$ 90.00</h4>

                  </div>

                </div>
              </div>

              <div className='sliderImgDiv'>
                <div className="sliderImgTop">

                  <div className="sliderImgTopInner">
                    <img src='./assets//uploads/kid-03.jpg' alt='' className="sliderImage"></img>
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
                    <h3 className="sliderImgTitle">Air Force 1 X</h3>
                    <span className="sliderImgStar">5 <FaStar /></span>
                  </div>

                  <div className="sliderImgBottomBottom">
                    <h4 className="sliderImgPrice">$ 90.00</h4>

                  </div>

                </div>
              </div>

            </Slider>
          </div>
        </div>

      </div>

    </div>
  )
}

export default KidsLatest