import { configureStore } from "@reduxjs/toolkit";
import reservCourse from './reserved-courses';


const store = configureStore({
    reducer:{
        reservCourse,
    },
});

export default store;