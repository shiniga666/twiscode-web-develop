/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import HomeBanner from './HomeBanner';
import HomeAbout from './HomeAbout';
import HomeService from './HomeService'; 
import HomeKerjasama from './HomeKerjasama';
import HomeProject from './HomeProject';
import HomeSlide from './HomeSlide';
import HomeTeam from './HomeTeam';
import HomeNomer from './HomeNomer';

const Home = () => (
  <div>
    <HomeBanner />
    <HomeAbout />
    <HomeService />
    <HomeKerjasama /> 
    <HomeSlide /> 
    <HomeProject />
    <HomeTeam />
    <HomeNomer />
  </div>
);

export default Home;
