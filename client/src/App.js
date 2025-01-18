import React from 'react';
import Lottie from 'lottie-react';
import animationData from './assets/hero.json';

const App = () => {
  return (
    <Lottie animationData={animationData}/>
  );
};

export default App;