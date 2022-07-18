import { MutableRefObject, useRef } from 'react';
import Slider from './Components/Slider';

import './App.css';

function App() {
   const arrayImages = [
      {
         id: 0,
         img: 'https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/05/1366_2000-1170x756.jpeg',
      },
      {
         id: 1,
         img: 'https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/02/starfish_10-1170x756.jpg',
      },
      {
         id: 2,
         img: 'https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2019/10/stalker-1170x756.jpeg',
      },
      {
         id: 3,
         img: 'https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/05/1366_2000-1170x756.jpeg',
      },
      {
         id: 4,
         img: 'https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/05/PROMO-SLIDE.jpg',
      },

      {
         id: 5,
         img: 'https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/05/1366_2000-1170x756.jpeg',
      },
      {
         id: 6,
         img: 'https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/02/starfish_10-1170x756.jpg',
      },
      {
         id: 7,
         img: 'https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2019/10/stalker-1170x756.jpeg',
      },
      {
         id: 8,
         img: 'https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/05/1366_2000-1170x756.jpeg',
      },
      {
         id: 9,
         img: 'https://demo.ramsthemes.com/projects/ingmarwp/wp-content/uploads/2020/05/PROMO-SLIDE.jpg',
      },
   ];

   return (
      <div className='App'>
         <h1>Test slider</h1>
         <Slider arrayImages={arrayImages} points={false}>
            {arrayImages.map((image) => (
               <div key={image.id} className='card-slider'>
                  <img src={image.img} alt='Image' />
                  <p className='followers'>Name Artist</p>
                  <p className='followers'>2,333,11 Seguidores</p>
               </div>
            ))}
         </Slider>
      </div>
   );
}

export default App;
