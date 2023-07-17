import React, { Fragment } from 'react'
import {FaEnvelope, FaLocationArrow, FaMobileAlt} from 'react-icons/fa';
import './Footer.scss';
import Payment from '../../assets/payments.png';

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <div className="footer-content">
          <div className="col">
            <div className="title">About</div>
            <div className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium asperiores doloribus id ducimus, magnam architecto sequi qui animi autem corporis delectus, magni alias deserunt ut omnis facere, quas corrupti tempore.</div>
          </div>
          <div className="col">
            <div className="title">Contact</div>
            <div className="c-item">
              <FaLocationArrow />
              <div className='text'>
                123, J.K Street, West Bengal, Kolkata, 712312
              </div>
            </div>
            <div className="c-item">
              <FaEnvelope />
              <div className='text'>
                abc@gmail.com
              </div>
            </div>
            <div className="c-item">
              <FaMobileAlt />
              <div className='text'>
              Phone 123456789
              </div>
            </div>
          </div>
          <div className="col">
            <div className="title">categories</div>
            <span className='text'>Headphones</span>
            <span className='text'>Smart Watches</span>
            <span className='text'>Bluetooth Speaker</span>
            <span className='text'>Wireless Earbuds</span>
            <span className='text'>Home Theatre</span>
            <span className='text'>Projecters</span>

          </div>
          <div className="col">
            <div className="title">Pages</div>
            <span className='text'>Home</span>
            <span className='text'>About</span>
            <span className='text'>Privacy Policy</span>
            <span className='text'>Returns</span>
            <span className='text'>Terms and Conditions</span>
            <span className='text'>Contact Us</span>

          </div>
        </div>
        <div className='bottom-bar'>
          <div className='bottom-bar-content'>
            <div className='text'>
              RD Musical World 2023 Created with 💖 by Romit
            </div>
            <img src={Payment} alt="Payments"/>
          </div>
        </div>

      </div>

    </Fragment>
  )
}

export default Footer
