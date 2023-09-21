import React, { useContext, useEffect, useState, useRef } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { BsBag } from 'react-icons/bs'
import { ipone, image1, image2, image3 } from "../assets"
import { motion } from "framer-motion"

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const images = [ipone, image1, image2, image3]


  const carousel = useRef()

  const [maxDragX, setMaxDragX] = useState(0)

  useEffect(() => {
    const imageWidth = carousel.current?.querySelector('.item')?.offsetWidth || 0;
    const numImages = images.length;
    setMaxDragX((numImages - 1) * imageWidth)
  }, [images])

  return (


    <div>

      <div>
        <BsBag onClick={() => setIsOpen(!isOpen)} className='text-2xl cursor-pointer ' />
      </div>


      <div className="main_carrousel">

        <motion.div ref={carousel} className='caroussel' whileTap={{ cursor: "grabbing" }}>

          <motion.div className='inner'
            drag="x"
            dragConstraints={{ right: 0, left: -maxDragX }}
            initial={{ x: 900 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {images.map((image) => (
              <motion.div className='item' key={image}>
                <img src={image} alt="qq" />
              </motion.div>
            ))}
          </motion.div>

        </motion.div>

      </div>


    </div>
  )
};

export default Header;
