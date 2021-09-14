import React from 'react';

import Reactjs from '../assets/reactjs.jpg';
import AWS from '../assets/aws.jpg';
import DataScience from '../assets/datascience.jpg';
import C from '../assets/clang.jpg';
import Java from '../assets/java.jpg';
import Python from '../assets/python.jpg';

export const CoursesList = [
  {
    name: 'Reactjs',
    image: Reactjs,
    price: 15.99,
    link: <a href='https://www.youtube.com/embed/Ke90Tje7VS0'>React Js</a>,
  },
  {
    name: 'AWS',
    image: AWS,
    price: 11.99,
    link: <a href='https://www.youtube.com/embed/ulprqHHWlng'>Aws</a>,
  },
  {
    name: 'Data Science',
    image: DataScience,
    price: 256.53,
    link: <a href='https://www.youtube.com/embed/Ke90Tje7VS0'>Data Science</a>,
  },
  {
    name: 'C',
    image: C,
    price: 17.99,
    link: <a href='https://www.youtube.com/embed/Ke90Tje7VS0'>C</a>,
  },
  {
    name: 'Java',
    image: Java,
    price: 4.99,
    link: <a href='https://www.youtube.com/embed/Ke90Tje7VS0'>Java</a>,
  },
  {
    name: 'Python',
    image: Python,
    price: 197.99,
    link: <a href='https://www.youtube.com/embed/Ke90Tje7VS0'>Python</a>,
  },
];
