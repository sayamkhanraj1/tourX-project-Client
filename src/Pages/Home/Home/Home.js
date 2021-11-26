import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Achievement from '../Achievement/Achievement';
import Blogs from '../Blogs/Blogs';
import Destinations from '../Destinations/Destinations';
import HeroSection from '../Header/HeroSection/HeroSection';
import Reviews from '../Reviews/Reviews';
import TourPackages from '../TourPackages/TourPackages';

const Home = () => {
         const {isLoading} = useAuth();

         if(isLoading){
                  return  <Spinner animation="border" variant="danger" />
         }
         return (
                  <div>
                           <HeroSection />
                           <TourPackages />
                           <Achievement />
                           <Reviews />
                           <Blogs />
                           <Destinations />
                  </div>
         );
};

export default Home;