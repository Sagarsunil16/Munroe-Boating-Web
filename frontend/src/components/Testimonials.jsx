import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Star, Anchor } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    name: 'Anil Nair',
    review: 'The shikara boating through Munroe Island’s backwaters was magical! The lush greenery and calm waters made it a perfect family outing. Highly recommend Munroe Boating!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-6d4d69735336?ixlib=rb-4.0.3&crop=faces&fit=crop&w=50&h=50',
  },
  {
    id: 2,
    name: 'Priya Suresh',
    review: 'Our stay at the Royal Island Resort was exceptional, paired with a thrilling kayaking adventure in Munroethuruthu. Munroe Boating made our trip unforgettable!',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1519085360753-afccb1c7d89e?ixlib=rb-4.0.3&crop=faces&fit=crop&w=50&h=50',
  },
  {
    id: 3,
    name: 'Siddharth Menon',
    review: 'The fishing tour in Munroe Island was a highlight! Catching fish in the serene backwaters with expert guides was so relaxing. Munroe Boating is the best!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&crop=faces&fit=crop&w=50&h=50',
  },
  {
    id: 4,
    name: 'Lakshmi Varghese',
    review: 'Canoeing through the narrow canals of Munroethuruthu was breathtaking. Munroe Boating’s knowledgeable guides made our Munroe Island adventure unforgettable!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&crop=faces&fit=crop&w=50&h=50',
  },
];

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-20 bg-black text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%23FFFFFF" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"%3E%3C/path%3E%3C/svg%3E')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <Anchor size={40} className="text-gray-300" aria-hidden="true" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Munroe Island Guest Reviews
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
            Hear from guests about their unforgettable Munroe Boating experiences in Munroethuruthu’s backwaters, from shikara tours to Royal Island Resort stays.
          </p>
        </motion.div>
        <Slider {...sliderSettings} className="mx-[-8px]">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: testimonial.id * 0.1, ease: 'easeOut' }}
                className="bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-700 hover:border-gray-500 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s review of Munroe Boating`}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < testimonial.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-500'
                          }
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  {testimonial.review}
                </p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;