import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = ''
}) => {
  // if (large) className += ' PageHeader-large'
  return (
    // <div className={`PageHeader relative ${className}`}>
    //   {backgroundImage && (
    //     <Image
    //       background
    //       resolutions="large"
    //       src={backgroundImage}
    //       alt={title}
    //       size="cover"
    //     />
    //   )}
    //   <div className="container relative">
    //     <h1 className="PageHeader--Title">{title}</h1>
    //     {subtitle && (
    //       <Content className="PageHeader--Subtitle" src={subtitle} />
    //     )}
    //   </div>
    // </div>
    <div>
      <ul className="cb-slideshow">
        <li>
          <span>Image 01</span>
          <div className="titleDiv">
            <h3>Olivia Grace Bridal</h3>
          </div>
        </li>
        <li>
          <span>Image 02</span>
          <div className="titleDiv">
            <h3>Olivia Grace Bridal</h3>
          </div>
        </li>
        <li>
          <span>Image 03</span>
          <div className="titleDiv">
            <h3>Olivia Grace Bridal</h3>
          </div>
        </li>
        <li>
          <span>Image 04</span>
          <div className="titleDiv">
            <h3>Olivia Grace Bridal</h3>
          </div>
        </li>
        <li>
          <span>Image 05</span>
          <div className="titleDiv">
            <h3>Olivia Grace Bridal</h3>
          </div>
        </li>
        <li>
          <span>Image 06</span>
          <div className="titleDiv">
            <h3>Olivia Grace Bridal</h3>
          </div>
        </li>
      </ul>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
