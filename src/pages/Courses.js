import React from "react";
import { CoursesList } from "../data/CoursesList";
import CoursesItem from "../components/CoursesItem";
import "../styles/Courses.css";

function Courses() {
  return (
    <div className="courses">
      <h1 className="coursesTitle">Our Courses</h1>
      <div className="coursesList">
        {CoursesList.map((coursesItem, key) => {
          return (
            <CoursesItem
              key={key}
              image={coursesItem.image}
              name={coursesItem.name}
              price={coursesItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;