import React from 'react';

// const video = () => {
//   console.log('vid');
//   return (
//     <iframe
//       width='1280'
//       height='720'
//       src='https://www.youtube.com/embed/Ke90Tje7VS0'
//       title='YouTube video player'
//       frameborder='0'
//       allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
//       allowfullscreen
//     ></iframe>
//   );
// };

function CoursesItem({ image, name, price, link }) {
  return (
    <div className='coursesItem'>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
      <p>{link}</p>
    </div>
  );
}

export default CoursesItem;
