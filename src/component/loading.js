import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loading.css';

const LandingPage = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [showNewImage, setShowNewImage] = useState(false);
  const [showNewElements, setShowNewElements] = useState(false);
  const [grad, setGrad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimationStarted(true);

    // Show first new image
    const timer1 = setTimeout(() => {
      setShowNewImage(true);
    }, 10000);

    // Hide first image after 1 second
    const timer2 = setTimeout(() => {
      setShowNewImage(false);
    }, 11000);

    // Show multiple elements exactly 1 second after timer2 ends
    const timer3 = setTimeout(() => {
      setShowNewElements(true);
    }, 11500);

    // Show GradHub after timer3
    const timer4 = setTimeout(() => {
      setGrad(true);
    }, 12500); // Starts 1 second after timer3

    // Redirect to main.js after showing GradHub
    const timer5 = setTimeout(() => {
      navigate('/main');
    }, 14000); // Starts 1.5 seconds after timer4

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      setAnimationStarted(false);
    };
  }, [navigate]);

  return (
    <div className="landing-page">
      <div className="logo"></div>
      <div className={`ellipse ${animationStarted ? 'animate' : ''}`}></div>
      {showNewImage && <div className="new-image"></div>}
      {showNewElements && (
        <>
          <div className="new-element new-element-1"></div>
          <div className="new-element new-element-2"></div>
          <div className="new-element new-element-3"></div>
        </>
      )}
      {grad && <div className="grad"><span>Grad</span>Hub</div>}
    </div>
  );
};

export default LandingPage;
