import React, { useReducer } from 'react';
import right from './assets/icon-next.svg';
import left from './assets/icon-prev.svg';

export function Carousel() {
  const quotes = {
    0: {
      image: `${require('./assets/image-tanya.jpg')}`,
      quote:
        '"I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."',
      name: 'Tanya Sinclair',
      profession: 'UX Engineer',
    },
    1: {
      image: `${require('./assets/image-john.jpg')}`,
      quote:
        '"If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."',
      name: 'John Tarkpor',
      profession: 'Junior Front-end Developer',
    },
  };

  const sliderReducer = (state, action) => {
    switch (action.type) {
      case 'NEXT':
        return quotes[0];
      case 'PREV':
        return quotes[1];
      default:
        return quotes[0];
    }
  };

  const [state, dispatch] = useReducer(sliderReducer, quotes[0]);

  return (
    <>
      <figure>
        <div className='image'>
          <img src={state.image} alt={state.profession} />
          <div className='btn'>
            <button
              onClick={() => dispatch({ type: 'NEXT' })}
              className='btn-left'
            >
              <img src={left} alt='arrow icon' />
            </button>
            <button
              onClick={() => dispatch({ type: 'PREV' })}
              className='btn-rigth'
            >
              <img src={right} alt='arrow icon' />
            </button>
          </div>
        </div>
        <div className='text'>
          <figcaption>
            {state.quote}
            <div className='description'>
              <strong>{state.name}</strong>
              <small>{state.profession}</small>
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}
