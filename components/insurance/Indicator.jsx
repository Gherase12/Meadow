import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Indicator({tierName }) {
  const [number, setNumber] = useState(0);
  const pathLength = tierName == "Gold" ? 0.5 : 1;
  const protectionNumber = tierName == "Gold" ? 15 : 30;

  useEffect(() => {
    const interval = setInterval(() => {
      if (number === protectionNumber) {
        clearInterval(interval);
        return;
      }
      setNumber((n) => n + 1);
    }, 100);
    return () => clearInterval(interval);
  }, [number, protectionNumber]);

  const icon = {
    hidden: {
      pathLength: 0,
      stroke: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength:pathLength ,
      transition: {
        duration: 2,
      },
      stroke: "url(#paint0_radial_671_3125)",
    },
  };

  const variants = {
    zero: { value: 0 },
    end: { value: 100 },
  };

  return (
    <div className='relative  mb-[25px] lg:scale-[1.4] lg:mt-[30px] '>
      {/* number */}
      <motion.div
        animate='end'
        variants={variants}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=' text-[50px] leading-[58px]   text-black absolute inset-0 flex items-center justify-center'
      >
        {number}%
      </motion.div>

      <svg
        width='215'
        height='181'
        viewBox='0 0 215 181'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M40.2547 158C36.2723 152.907 32.8213 147.381 29.9847 141.506C24.2262 129.579 21 116.211 21 102.093C21 51.7836 61.9659 11 112.5 11C163.034 11 204 51.7836 204 102.093C204 123.165 196.813 142.567 184.745 158'
          stroke='#F5F5F5'
          stroke-width='20.7182'
          stroke-linecap='round'
        />
        <g filter='url(#filter0_d_671_3125)'>
          <motion.path
            variants={icon}
            initial='hidden'
            animate='visible'
            d='M40.2547 158C36.2723 152.907 32.8213 147.381 29.9847 141.506C24.2262 129.579 21 116.211 21 102.093C21 66.4947 41.5106 35.6659 71.4085 20.6802'
            stroke='url(#paint0_radial_658_3125)'
            stroke-width='12.2397'
            stroke-linecap='round'
          />
        </g>
        <defs>
          <filter
            id='filter0_d_671_3125'
            x='0.826196'
            y='3.30988'
            width='90.7568'
            height='177.668'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='2.80449' />
            <feGaussianBlur stdDeviation='7.01122' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.00392157 0 0 0 0 0.701176 0 0 0 0 1 0 0 0 0.41 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_671_3125'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_671_3125'
              result='shape'
            />
          </filter>
          <radialGradient
            id='paint0_radial_671_3125'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(33.9365 13.7802) rotate(82.5682) scale(168.881 61.3451)'
          >
            <stop stop-color='#007FFF' />
            <stop offset='1' stop-color='#00B2FF' />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Indicator;
