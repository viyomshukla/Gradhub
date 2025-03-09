import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loading.css';

const LandingPage = () => {
  const [aniStart, setaniStart] = useState(false);
  const [showellipse, setshowellipse] = useState(false);
  const [showsemi, setshowsemi] = useState(false);
  const [grad, setGrad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setaniStart(true);

   
    const timer1 = setTimeout(() => {
    

      setshowellipse(true);
    }, 10000);

   
    const timer2 = setTimeout(() => {
      setshowellipse(false);
    }, 11000);

   
    const timer3 = setTimeout(() => {
      setshowsemi(true);
    }, 11500);


    const timer4 = setTimeout(() => {
      setGrad(true);
    }, 12500); 

  
    const timer5 = setTimeout(() => {
      navigate('/main');
    }, 14000); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      setaniStart(false);
    };
  }, [navigate]);

  return (
    <div className="lp">
      <div className="logo"></div>
      <div className={`ellipse ${aniStart ? 'animate' : ''}`}></div>
      {showellipse && <div className="new-image"></div>}
      {showsemi && (
        <>
          <div className="ne ne-1"></div>
          <div className="ne ne-2"></div>
          <div className="ne ne-3"><span>Grad</span>Hub</div>
        </>
      )}
      {grad && <div className="grad"><span>Grad</span>Hub</div>}
    </div>
  );
};

export default LandingPage;
