import React from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
    <>
 <div className="content">
        <div className="wrapper">
          <div className="title">
            <span>All Dog Breeds Profile</span>
          </div>
        <div className="allDogs">
           <li >
           <Link to={'afrador'} >
            <img className="dog1" src="https://www.dogtime.com/assets/uploads/2019/08/afador-mixed-dog-breed-pictures-cover-650x368.jpg" alt="dog1">
              
            </img></Link>
             <p>Afador</p>
           </li>
           <li >
           <Link to={'afrador'} >
            <img className="dog1" src="https://www.dogtime.com/assets/uploads/2022/07/Screen-Shot-2022-07-25-at-4.43.41-PM-650x369.png" alt="dog1"></img></Link>
            <p>Racoon Dog</p>
           </li>
           <li>
           <Link to={'afrador'} >
            <img className="dog1" src="https://www.dogtime.com/assets/uploads/2011/01/file_22942_rottweiler-300x189.jpg" alt="dog1"></img></Link>
            <p>Rottweiler</p>
           </li>
           <li>
            <img className="dog1" src="https://www.dogtime.com/assets/uploads/2011/01/file_22922_german-pinscher-300x189.jpg" alt="dog1"></img>
            <p>Doberman Pinscher</p>
           </li>
           <li>
            <img className="dog1" src="https://www.dogtime.com/assets/uploads/2011/01/file_23188_german-shepherd-dog-300x189.jpg" alt="dog1"></img>
            <p>German Shepherd</p>
           </li>
           <li>
            <img className="dog1" src="https://www.dogtime.com/assets/uploads/2011/01/file_22980_golden-retriever-300x189.jpg" alt="dog1"></img>
            <p>Golden Retriever</p>
           </li>
           <li>
            <img className="dog1" src="https://www.dogtime.com/assets/uploads/2022/10/american-boxer-foxhound-1-650x368.png" alt="dog1"></img>
            <p>Boxer</p>
           </li>
           <li>
            <img className="dog1" src="https://www.dogtime.com/assets/uploads/2022/09/American-Bull-Aussie-650x368.png" alt="dog1"></img>
            <p>American-Bully</p>
           </li>
           <li>
            <img className="dog1" src="https://www.dogtime.com/assets/uploads/2017/10/bernedoodle-dog-breed-pictures-cover-650x368.jpg" alt="dog1"></img>
            <p>bernedoodle</p>
           </li>
        </div>
        </div>
      </div>

      <footer className='footer'>
           <div className='footer-wrapper'>
            <div className='footer-logo'>
                 <a href='/'>Dogtime</a>
            </div>
            <div className='footer-social'>
            <li>
              <a href="https://www.facebook.com/dogtime" />
              <img
                className="sc"
                src="https://dogtime.com/wp-content/themes/dogtime-2019/images/svg/icon-facebook.svg"
              ></img>
            </li>
            <li>
              <a href="https://www.twitter.com/dogtime_com/" />
              <img
                className="sc"
                src="https://dogtime.com/wp-content/themes/dogtime-2019/images/svg/icon-twitter.svg"
              ></img>
            </li>
            <li>
              <a href="https://www.pinterest.com/dogtime/" />
              <img
                className="sc"
                src="https://dogtime.com/wp-content/themes/dogtime-2019/images/svg/icon-pinterest-white.svg" 
              ></img>
            </li>
            <li>
              <a href="https://www.instagram.com/dogtime_com/" />
              <img
                className="sc"
                src="https://dogtime.com/wp-content/themes/dogtime-2019/images/svg/icon-instagram-white.svg"
              ></img>
            </li> 
            </div>
            <div className='footer-menu'>
               <div className='menu-list'>
                     <li>Resources</li>
                     <li>About us</li>
                     <li>Contact us</li>
                     <li>Advertising</li>
                     <li>Privacy Policy</li>
                     <li>Terms & Conditions</li>
               </div>
            </div>
            <div className='copyright'>
                &copy;
            </div>
           </div>
       
      </footer>

    </>
  )
}

export default Content