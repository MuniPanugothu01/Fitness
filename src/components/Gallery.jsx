import Contact from './Contact'
import React from 'react'
import Footer from './Footer'

const Gallery = () => {
  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/home-2.jpg",
    "/home-3.jpg",
    "/img8.jpg",
    "/img5.jpg",
    "/img6.jpg"]
  return (
    <>
      <section className='gallery'>
        <h1 style={{ textTransform: 'uppercase' }}> <u>Better Beats Best!</u> </h1>
        <div className="images">
          <div >
            {
              gallery.slice(0, 3).map((element, index) => (
                <img key={index} src={element} alt='galleryImage' />
              ))
            }
          </div>
          <div>
            {
              gallery.slice(3, 6).map((element, index) => (
                <img key={index} src={element} alt='galleryImage' />
              ))
            }
          </div>
          <div>
            {
              gallery.slice(6, 9).map((element, index) => (
                <img key={index} src={element} alt='galleryImage' />
              ))
            }
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>

  )
}

export default Gallery
