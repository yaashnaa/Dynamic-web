import React, {useEffect} from 'react'
import { useState } from "react";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import AOS from "aos";
import "aos/dist/aos.css";
const SearchExercisePage = () => {
    const [bodyPart, setBodyPart] = useState("all");
    const [exercises, setExercises] = useState([]);
    console.log(bodyPart)
    useEffect(() => {
      AOS.init();
    }, []);
  return (

    <div >
    <Navbar /> 
<div data-aos="fade-down">
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
      </div>
    </div>
  )
}

export default SearchExercisePage
