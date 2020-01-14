import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'
import ul from '../../public/images/ul.jpg'

export default () => (
  <div className="footerBody">
    <div className="flexCont">
      <div className="flexLine"></div>
      <h2 className="taCenter">
        <a href="https://instagram.com/oliviagracebridal/" className="aTag">
          {' '}
          {/* <img src={igLogo} alt="" className="igLogo" /> */}
          {/* @OliviaGraceBridal */}
        </a>
        <p className="spacer"></p>
        Olivia Grace Instagram
      </h2>
      <div className="flexLine"></div>
    </div>
    {/* <img src={ul} alt="" className="ul" /> */}
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        {/* <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://thriveweb.com.au/">Thrive</a>.
        </span> */}
      </div>
    </footer>
  </div>
)
