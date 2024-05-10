import React from 'react'

const Hero = () => {
  return (
    <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP WITH OUR SHOES.</p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className='hero-btn-2'>Category</button>
            </div>
            <div className="hero-bottom">
                <p>Also Available on</p>
                <div className="hero-icons">
                    <img src="/images/amazon.png" alt="amazon" />
                    <img src="/images/flipkart.png" alt="flipkart" />
                </div>
            </div>
        </div>
        <div className="hero-image">
            <img src="/images/hero-image.png" alt="hero" />
        </div>
    </main>
  )
}

export default Hero;
