import { MutableRefObject, useEffect, useLayoutEffect, useRef } from 'react';

interface Props {
   children: any;
   arrayImages: any;
   points: any;
   pages?: number;
   reference?: MutableRefObject<HTMLDivElement>;
}

const Slider = ({ children, arrayImages, points, pages = 2 }: Props) => {
   const fila: any = useRef<HTMLDivElement>(null);
   const amountPages = Math.ceil(arrayImages.length / pages);
   const sliderContent = document.querySelector('.slider-content');

   useEffect(() => {
      console.log(sliderContent);
      for (let i = 0; i < amountPages; i++) {
         const index = document.createElement('button');

         if (i === 0) {
            index.classList.add('active');
         }

         document.querySelector('.index-pages')?.appendChild(index);
         index.addEventListener('click', (e: any) => {
            fila.current.scrollLeft = i * fila.current.offsetWidth;

            document.querySelector('.index-pages .active')?.classList.remove('active');
            e.target.classList.add('active');
         });
      }
   }, [points]);

   const handleLeft = (ancho: any) => {
      const imageCarousel: any = document.querySelector('.card-slider img');
      const widthImageCarousel: any = imageCarousel?.scrollWidth;
      ancho.current.scrollLeft -= widthImageCarousel;
   };

   const handleRight = (ancho: any) => {
      const imageCarousel: any = document.querySelector('.card-slider img');
      const widthImageCarousel: any = imageCarousel?.scrollWidth;
      ancho.current.scrollLeft += widthImageCarousel;
   };

   return (
      <div>
         <section className='slider' ref={fila}>
            <div className='slider-content'>
               {children}
            </div>
         </section>

         {points ? <div className='index-pages'></div> : null}

         <div>
            <button onClick={() => handleLeft(fila)}>{'<'}</button>
            <button onClick={() => handleRight(fila)}>{'>'}</button>
         </div>
      </div>
   );
};

export default Slider;
