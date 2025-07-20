import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='socials'>
                {socialImgs.map((img) => (
                    <a className='icon' target='_blank' href={img.url} key={img.url}> 
                        <img src={img.imgPath} alt="image" />
                    </a>
                ))}
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-center md:text-end'>
                    Pradham L Raj
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer