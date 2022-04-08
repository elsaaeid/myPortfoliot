import React from 'react';
import './portfolio.css';
import video from '../../assets/5.mp4';

import { useState } from 'react';
import Port1 from '../../assets/port1.png';
import Port2 from '../../assets/port2.png';
import Port3 from '../../assets/port3.png';
import Port4 from '../../assets/port4.png';
import Port5 from '../../assets/port5.png';
import Port6 from '../../assets/port6.png';
import Port7 from '../../assets/port7.png';
import port8 from '../../assets/port8.PNG';
import port10 from '../../assets/port10.PNG';
import port12 from '../../assets/port12.PNG';
import port13 from '../../assets/port13.PNG';
import port14 from '../../assets/port14.PNG';
import port15 from '../../assets/port15.PNG';
import port16 from '../../assets/port16.png';


import graph1 from '../../assets/1.jpg';
import graph2 from '../../assets/2.jpg';
import graph3 from '../../assets/3.jpg';
import graph4 from '../../assets/4.jpg';
import graph5 from '../../assets/5.jpg';
import graph6 from '../../assets/9.png';
import graph7 from '../../assets/7.png';
// Do NOT USE THE IMAGES IN PRODUCTION

const webData =  [
  {
   id: 1,
   webImage: Port1,
   webTitle: 'My Portfolio',
   webDesc: 'responsive website using (html,css,bootstrap,javascript)',
   webGithub: 'https://github.com/elsaaeid/portfolio',
   webDemo: 'https://elsaaeid.github.io/portfolio/'
 },
  {
   id: 2,
   webImage: Port2,
   webTitle: 'It Network',
   webDesc: 'responsive website using (html,css,bootstrap,javascript)',
   webGithub: 'https://github.com/elsaaeid/it-network',
   webDemo: 'https://elsaaeid.github.io/it-network/'
 },
  {
   id: 3,
   webImage: Port3,
   webTitle: 'Fresh Shop',
   webDesc: 'responsive website using (html,css,bootstrap,javascript)',
   webGithub: 'https://github.com/elsaaeid/freshshop',
   webDemo: 'https://elsaaeid.github.io/freshshop/'
 },
  {
   id: 4,
   webImage: Port4,
   webTitle: 'Faster Motors',
   webDesc: 'responsive website using (html,css,bootstrap,javascript)',
   webGithub: 'https://github.com/elsaaeid/faster-motors',
   webDemo: 'https://elsaaeid.github.io/faster-motors/'
 },
  {
   id: 5,
   webImage: Port5,
   webTitle: 'Studio Alkasr',
   webDesc: 'responsive website using (html,css,bootstrap,javascript)',
   webGithub: ' https://github.com/elsaaeid/Studio-Alkasr',
   webDemo: 'https://elsaaeid.github.io/Studio-Alkasr/'
 },
  {
   id: 6,
   webImage: Port6,
   webTitle: 'it-next',
   webDesc:'responsive website using (html,css,bootstrap,javascript)',
   webGithub: 'https://github.com/elsaaeid/it-next',
   webDemo: 'https://elsaaeid.github.io/it-next/'
 },
  {
   id: 7,
   webImage: Port7,
   webTitle: 'Dashboard',
   webDesc: 'responsive website using (html,css,bootstrap)',
   webGithub: 'https://github.com/elsaaeid/Dashboard',
   webDemo: 'https://elsaaeid.github.io/Dashboard/'
 },
 {
  id: 8,
  webImage: port8,
  webTitle: 'Counter',
  webDesc: 'responsive website using (html,css,javaScript)',
  webGithub: 'https://github.com/elsaaeid/counter',
  webDemo: 'https://elsaaeid.github.io/counter/'
},
{
  id: 10,
  webImage: port10,
  webTitle: 'ForestCompany',
  webDesc: 'responsive website using (html,css,javaScript)',
  webGithub: 'https://github.com/elsaaeid/forest-company',
  webDemo: 'https://elsaaeid.github.io/forest-company/'
},
{
  id: 12,
  webImage: port12,
  webTitle: 'Creative-Portfolio',
  webDesc: 'responsive website using (html,css,javaScript)',
  webGithub: 'https://github.com/elsaaeid/Creative-Portfolio',
  webDemo: 'https://elsaaeid.github.io/Creative-Portfolio/'
},
{
  id: 13,
  webImage: port13,
  webTitle: 'two-portfolio',
  webDesc: 'responsive website using (html,css,javaScript)',
  webGithub: 'https://github.com/elsaaeid/two-portfolio',
  webDemo: 'https://elsaaeid.github.io/two-portfolio/'
},
{
  id: 14,
  webImage: port14,
  webTitle: 'CRUD',
  webDesc: 'responsive website using (html,css,javaScript)',
  webGithub: 'https://github.com/elsaaeid/CRUD',
  webDemo: 'https://elsaaeid.github.io/CRUD/'
},
{
  id: 15,
  webImage: port15,
  webTitle: 'login--logout',
  webDesc: 'responsive website using (html,css,javaScript)',
  webGithub: 'https://github.com/elsaaeid/login--logout',
  webDemo: 'https://elsaaeid.github.io/login--logout/'
},
{
  id: 16,
  webImage: port16,
  webTitle: 'weather-app',
  webDesc: 'responsive website using (html,css,javaScript)',
  webGithub: 'https://github.com/elsaaeid/weather-app',
  webDemo: 'https://elsaaeid.github.io/weather-app/'
},
]

const graphDate = [

  {
      id: 1,
      gImage: graph1,
      gTitle: 'business-card',
      gDemo: 'https://www.behance.net/gallery/139238993/business-card/modules/786927113'
    },
    {
     id: 2,
     gImage: graph2,
     gTitle: 'paints-card',
     gDemo: 'https://www.behance.net/gallery/139239447/paints-card/modules/786930547'
   },
    {
     id: 3,
     gImage: graph3,
     gTitle: 'trading-card',
     gDemo: 'https://www.behance.net/gallery/139239851/trading-card/modules/786932905'
   },
    {
     id: 4,
     gImage: graph4,
     gTitle: 'Dione-oil',
     gDemo: 'https://www.behance.net/gallery/139239965/Dione-oil/modules/786933423'
   },
    {
     id: 5,
     gImage: graph5,
     gTitle: 'bag-design',
     gDemo: 'https://www.behance.net/gallery/139240129/bag-design/modules/786934089'
   },
    {
     id: 6,
     gImage: graph6,
     gTitle: 'marketing-banner',
     gDemo: 'https://www.behance.net/gallery/139240473/marketing-banner/modules/786936093'
   },
    {
     id: 7,
     gImage: graph7,
     gTitle: 'advertising-banner',
     gDemo: 'https://www.behance.net/gallery/139240633/advertising-banner/modules/786936985'
   }
]


const videoDate = [
    {
      id: 1,
      vGraph: video,
      vTitle: 'videoGraphic',
      vDemo: 'https://www.behance.net/gallery/139242011/videoGraphic'
    },
]

function Portfolio() {

      const [toggleState, setToggleState] = useState(1);
      const toogleTab = (index) => {
        setToggleState(index);
      };
        return (
             <section id='portfolio' >
               <h5>My React Work</h5>
               <h2>Portfolio</h2>
                <div className='block-tabs'>
               <div  className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() =>toogleTab(1)}>Front end</div>

               <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} 
               onClick={() =>toogleTab(2)}>React Js</div>
             
               <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} 
               onClick={() =>toogleTab(3)}>Graphic Design</div>

               <div className={toggleState === 4 ? "tabs active-tabs" : "tabs"} 
               onClick={() =>toogleTab(4)}>Graphic Video</div>
                </div>
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                {
                  webData.map(({id, webImage, webTitle, webDesc, webGithub, webDemo}) => {
                    return (
                      <article className='portfolio__item'>
                      <div className="portfolio__item-image">
                        <img src={webImage} alt={webTitle}/>
                      </div>
                      <div className="portfolio__item-details ">
                      <h3>{webTitle}</h3>
                      <p>{webDesc}</p>
                      </div>
                      <div className="portfolio__item-cta ">
                      <a href={webGithub} className="btn" target='_blank'>Github</a>
                      <a href={webDemo} className="btn btn-primary" target='_blank'>Live Demo</a>
                      </div>
                    </article>
                    )
                  })
                }
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                <reactTutorilweb/>
                </div>
                <div className={toggleState === 3 ? "content active-content" : "content"}>
                {
                  graphDate.map(({id, gImage, gTitle, gDemo}) => {
                  return (
                    <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                      <img src={gImage} alt={gTitle}/>
                    </div>
                    <div className="portfolio__item-details ">
                    <h3>{gTitle}</h3>
                    </div>
                    <div className="portfolio__item-cta ">
                    <a href={gDemo} className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
                  </article>
                  )
                })
              }
                </div>
                <div className={toggleState === 4 ? "content active-content" : "content"}>
                {
                  videoDate.map(({id, vGraph, vTitle, vDemo}) => {
                  return (
                    <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                      <video  >
                        <source type='video/mp4' src={vGraph} />
                      </video>
                    </div>
                    <div className="portfolio__item-details ">
                    <h3>{vTitle}</h3>
                    </div>
                    <div className="portfolio__item-cta ">
                    <a href={vDemo} className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
                  </article>
                  )
                })
              }
                </div>
            </section> 
        )
    };
export default Portfolio;