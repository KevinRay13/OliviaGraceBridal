import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'
import ul from '../../public/images/ul.jpg'

export default () => (
  <div className="footerBody">
    <h2 className="taCenter">
      Follow us
      <p className="spacer"></p>
      <a href="https://instagram.com/oliviagracebridal/" className="aTag">
        {' '}
        {/* <img src={igLogo} alt="" className="igLogo" /> */}
        @OliviaGraceBridal
      </a>
    </h2>
    <img src={ul} alt="" className="ul" />
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
