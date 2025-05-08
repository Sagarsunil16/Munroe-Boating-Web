import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import { Anchor } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link as ScrollLink} from 'react-scroll'

const packages = [
  {
    id: 1,
    title: 'Houseboat Tour',
    description: 'Cruise through Munroethuruthu’s serene backwaters on a luxurious houseboat with traditional Kerala cuisine.',
    price: '₹12,000/day',
    image: 'https://via.placeholder.com/400x300?text=Houseboat',
    slug: 'houseboat',
  },
  {
    id: 2,
    title: 'Speedboat Adventure',
    description: 'Feel the thrill of speeding across the scenic backwaters with our guided adventure.',
    price: '₹3,000/hour',
    image: 'https://via.placeholder.com/400x300?text=Speedboat',
    slug: 'speedboat',
  },
  {
    id: 3,
    title: 'Fishing Trip',
    description: 'Enjoy a peaceful day fishing with local experts in tranquil waters.',
    price: '₹1,500/day',
    image: 'https://via.placeholder.com/400x300?text=Fishing',
    slug: 'fishing',
  },
  {
    id: 4,
    title: 'Kayaking Experience',
    description: 'Navigate narrow canals and explore untouched beauty with a guided kayaking tour.',
    price: '₹800/hour',
    image: 'https://via.placeholder.com/400x300?text=Kayaking',
    slug: 'kayaking',
  },
  {
    id: 5,
    title: 'Sunset Cruise',
    description: 'Witness the mesmerizing sunset while cruising gently through the backwaters.',
    price: '₹1,200/evening',
    image: 'https://via.placeholder.com/400x300?text=Sunset+Cruise',
    slug: 'sunset-cruise',
  },
  {
    id: 6,
    title: 'Canoeing Tour',
    description: 'Paddle through narrow channels and experience authentic local life up close.',
    price: '₹600/hour',
    image: 'https://via.placeholder.com/400x300?text=Canoeing',
    slug: 'canoeing',
  },
  {
    id: 7,
    title: '360° Backwater Tour',
    description: 'A complete guided experience of the village, local culture, and hidden gems of Munroe Island.',
    price: '₹2,000/person',
    image: 'https://via.placeholder.com/400x300?text=360+Tour',
    slug: '360-tour',
  },
  {
    id: 8,
    title: 'Food & Stay at Royal Island',
    description: 'Enjoy authentic Kerala cuisine and cozy accommodation on the Royal Island.',
    price: '₹3,500/night',
    image: 'https://via.placeholder.com/400x300?text=Royal+Island+Stay',
    slug: 'food-stay',
  },
  {
    id: 9,
    title: 'Bird Watching Tour',
    description: 'Explore the rich birdlife of the region with a naturalist guide.',
    price: '₹1,000/morning',
    image: 'https://via.placeholder.com/400x300?text=Bird+Watching',
    slug: 'birdwatching',
  },
  {
    id: 10,
    title: 'Shikkara Ride',
    description: 'Experience a relaxing ride in a traditional wooden shikkara through scenic waters.',
    price: '₹1,000/hour',
    image: 'https://via.placeholder.com/400x300?text=Shikkara+Ride',
    slug: 'shikkara-ride',
  },
  {
    id: 11,
    title: 'Village Cultural Tour',
    description: 'Get immersed in Kerala’s local traditions, dance, and crafts with guided cultural walks.',
    price: '₹1,800/person',
    image: 'https://via.placeholder.com/400x300?text=Cultural+Tour',
    slug: 'cultural-tour',
  },
];


const Packages = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <section id="packages" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Subtle Wave Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%23FFFFFF" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"%3E%3C/path%3E%3C/svg%3E')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
            Our Boating Packages
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
            Explore Munroethuruthu’s backwaters with our carefully crafted boating packages, designed for adventure and relaxation.
          </p>
        </motion.div>

        {/* Slider */}
        <Slider {...sliderSettings} className="mx-[-8px]">
          {packages.map((pkg) => (
            <div key={pkg.id} className="px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: pkg.id * 0.1, ease: 'easeOut' }}
                className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover:border-gray-500"
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {pkg.description}
                  </p>
                  <p className="text-gray-200 font-semibold mb-4">
                    {pkg.price}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ScrollLink
  to="booking"
  smooth={true}
  duration={500}
  className="inline-block px-6 py-3 bg-gray-700 text-white font-semibold rounded-md shadow-md hover:bg-gray-600 transition-all duration-200"
>
  Book Now
</ScrollLink>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Packages;