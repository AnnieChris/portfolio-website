import React, { useEffect, useRef } from 'react';

const SparkleTrail = ({ color = 'gold' }) => {
  const sparkles = 100;
  const containerRef = useRef(null);
  useEffect(() => {
    let x = 0;
    let y = 0;
    let ox = 400;
    let oy = 300;
    let sleft = 0;
    let sdown = 0;
    const star = [];
    const starv = Array(sparkles).fill(0);
    const starx = Array(sparkles).fill(0);
    const stary = Array(sparkles).fill(0);
    const tiny = [];
    const tinyx = Array(sparkles).fill(0);
    const tinyy = Array(sparkles).fill(0);
    const tinyv = Array(sparkles).fill(0);

    const createDiv = (height, width) => {
      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.height = `${height}px`;
      div.style.width = `${width}px`;
      div.style.overflow = 'hidden';
      return div;
    };
    const newColour = () => {
        let c;
        c = [255, Math.floor(Math.random() * 256), Math.floor(Math.random() * (256 - c[1] / 2))];
        c.sort(() => 0.5 - Math.random());
        return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
      }; 
    const sparkle = () => {
      let c;
      if (Math.abs(x - ox) > 1 || Math.abs(y - oy) > 1) {
        ox = x;
        oy = y;
        for (c = 0; c < sparkles; c++) {
          if (!starv[c]) {
            star[c].style.left = `${(starx[c] = x)}px`;
            star[c].style.top = `${(stary[c] = y + 1)}px`;
            star[c].style.clip = 'rect(0px, 5px, 5px, 0px)';
            star[c].childNodes[0].style.backgroundColor = star[c].childNodes[1].style.backgroundColor =
              color === 'random' ? newColour() : color;
            star[c].style.visibility = 'visible';
            starv[c] = 50;
            break;
          }
        }
      }
      for (c = 0; c < sparkles; c++) {
        if (starv[c]) updateStar(c);
        if (tinyv[c]) updateTiny(c);
      }
      setTimeout(sparkle, 40);
    };
    const updateStar = (i) => {
      if (--starv[i] === 25) star[i].style.clip = 'rect(1px, 4px, 4px, 1px)';
      if (starv[i]) {
        stary[i] += 1 + Math.random() * 3;
        starx[i] += (i % 5 - 2) / 5;

        if (stary[i] < containerRef.current.offsetHeight + sdown) {
          star[i].style.top = `${stary[i]}px`;
          star[i].style.left = `${starx[i]}px`;
        } else {
          star[i].style.visibility = 'hidden';
          starv[i] = 0;
          return;
        }
      } else {
        tinyv[i] = 50;
        tiny[i].style.top = `${(tinyy[i] = stary[i])}px`;
        tiny[i].style.left = `${(tinyx[i] = starx[i])}px`;
        tiny[i].style.width = '2px';
        tiny[i].style.height = '2px';
        tiny[i].style.backgroundColor = star[i].childNodes[0].style.backgroundColor;
        star[i].style.visibility = 'hidden';
        tiny[i].style.visibility = 'visible';
      }
    };
    const updateTiny = (i) => {
      if (--tinyv[i] === 25) {
        tiny[i].style.width = '1px';
        tiny[i].style.height = '1px';
      }
      if (tinyv[i]) {
        tinyy[i] += 1 + Math.random() * 3;
        tinyx[i] += (i % 5 - 2) / 5;

        if (tinyy[i] < containerRef.current.offsetHeight + sdown) {
          tiny[i].style.top = `${tinyy[i]}px`;
          tiny[i].style.left = `${tinyx[i]}px`;
        } else {
          tiny[i].style.visibility = 'hidden';
          tinyv[i] = 0;
          return;
        }
      } else tiny[i].style.visibility = 'hidden';
    };
    const mouse = (e) => {
        if (e) {
          y = e.pageY;
          x = e.pageX;
        } else {
          setScroll();
          y = e.y + sdown;
          x = e.x + sleft;
        }
      };    
      window.onscroll = setScroll;    
      function setScroll() {
        if (typeof window.pageYOffset === 'number') {
          sdown = window.pageYOffset;
          sleft = window.pageXOffset;
        } else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
          sdown = document.body.scrollTop;
          sleft = document.body.scrollLeft;
        } else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
          sleft = document.documentElement.scrollLeft;
          sdown = document.documentElement.scrollTop;
        } else {
          sdown = 0;
          sleft = 0;
        }
      };
    const setWidth = () => {
      let swMin = 999999;
      let shMin = 999999;
      if (document.documentElement && document.documentElement.clientWidth) {
        if (document.documentElement.clientWidth > 0) swMin = document.documentElement.clientWidth;
        if (document.documentElement.clientHeight > 0) shMin = document.documentElement.clientHeight;
      }
      if (typeof window.innerWidth === 'number' && window.innerWidth) {
        if (window.innerWidth > 0 && window.innerWidth < swMin) swMin = window.innerWidth;
        if (window.innerHeight > 0 && window.innerHeight < shMin) shMin = window.innerHeight;
      }
      if (document.body.clientWidth) {
        if (document.body.clientWidth > 0 && document.body.clientWidth < swMin) swMin = document.body.clientWidth;
        if (document.body.clientHeight > 0 && document.body.clientHeight < shMin) shMin = document.body.clientHeight;
      }
      if (swMin === 999999 || shMin === 999999) {
        swMin = 800;
        shMin = 600;
      }
      /* containerRef.current.style.width = `${swMin}px`;
      containerRef.current.style.height = `${shMin}px`; */
    };
    const renderStars = () => {
      for (let i = 0; i < sparkles; i++) {
        const starDiv = createDiv(5, 5);
        starDiv.style.backgroundColor = 'transparent';
        starDiv.style.visibility = 'hidden';
        const rlef = createDiv(1, 5);
        const rdow = createDiv(5, 1);
        starDiv.appendChild(rlef);
        starDiv.appendChild(rdow);
        rlef.style.top = '2px';
        rlef.style.left = '0px';
        rdow.style.top = '0px';
        rdow.style.left = '2px';
        containerRef.current.appendChild(starDiv);
        star[i] = starDiv;
      }
    };
    const renderTiny = () => {
      for (let i = 0; i < sparkles; i++) {
        const tinyDiv = createDiv(3, 3);
        tinyDiv.style.visibility = 'hidden';
        tinyDiv.style.zIndex = '999';
        containerRef.current.appendChild(tinyDiv);
        tiny[i] = tinyDiv;
        starv[i] = 0;
        tinyv[i] = 0;
      }
    };
    renderStars();
    renderTiny();
    setWidth();
    sparkle();

    document.onmousemove = mouse;
    window.onscroll = setScroll;
    window.onresize = setWidth;

    return () => {
      document.onmousemove = null;
      window.onscroll = null;
      window.onresize = null;
    };
  }, [color]);
  return <div ref={containerRef} className="sparkle-container" />;
};
export default SparkleTrail;
