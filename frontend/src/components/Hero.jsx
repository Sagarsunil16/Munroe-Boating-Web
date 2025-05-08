import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Link } from 'react-scroll';
import { Anchor } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: 'ondemand',
    arrows: false, // Disable arrows to prevent overflow
  };

  const slides = [
    {
      image: '/images/munroe-boating1.jpg',
      alt: 'Munroe Island houseboat tour in Munroethuruthu',
      title: 'Discover Munroe Island Boating',
      description: 'Sail through the serene backwaters of Munroethuruthu, Kerala’s hidden gem.',
    },
    {
      image: '/images/munroeIsland1-wallpaper.jpg',
      alt: 'Sunset cruise in Munroethuruthu backwaters',
      title: 'Unforgettable Sunset Cruises',
      description: 'Experience breathtaking sunsets on our exclusive Munroe Island boat tours.',
    },
    {
      image: '/images/munroeIsland-wallpaper.jpg',
      alt: 'Fishing trip in Munroe Island, Munroethuruthu',
      title: 'Authentic Fishing Adventures',
      description: 'Join local fishermen for a unique Munroethuruthu boating experience.',
    },
  ];

  return (
    <section id="home" className="h-screen relative bg-black text-white w-full overflow-hidden">
      <Slider {...settings} className="w-full h-screen">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen w-full outline-none">
            <div className="relative h-full w-full max-w-full">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover opacity-50 max-w-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-center z-10">
              <div className="px-4 max-w-6xl mx-auto w-full">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                  className="flex justify-center mb-6"
                >
                  <Anchor size={40} className="text-gray-300" aria-hidden="true" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                  className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 max-w- желто2xl mx-auto"
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
                >
                  <Link to="booking" smooth duration={500}>
                    <Button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-all duration-200">
                      Book Your Adventure
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;