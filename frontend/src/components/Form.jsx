import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const Form = () => {
  return (
    <div className='form'>
      <div className="formDiv">
        <div className="formTop">
          <img src="./assets/uploads/about-us-page-heading.jpg" alt="" />
          <div className="formTexts">
            <h2>Contuct Us</h2>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
          </div>
        </div>
        <div className="formBottom">
          <div className="formBottomLeft">
            <div className="formBottomMaps">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35749.46708675248!2d9.761539503469853!3d52.362328873144925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b00b150e5621d9%3A0xb207b43c85fe32b!2sChildren&#39;s%20Hospital%20Auf%20der%20Bult!5e0!3m2!1sru!2snl!4v1675798623772!5m2!1sru!2snl" width={600} height={450} style={{ border: "none" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="formBottomRight">

            <div className="formBottomTexts">
              <h2>Say Hello. Don't be shy!</h2>
              <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </div>

            <div className="formBottomForm">
              <form>

                <div className="formBottomGroups">
                  <input type="text" required placeholder='Your Name'/>
                  <input type="text" required placeholder='Your Email'/>
                </div>

                <div className="formBottomGroups">
                  <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                </div>
                  <button className='formBottomBtn'><FaPaperPlane/></button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Form