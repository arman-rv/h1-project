

import { Timer } from '../../components/CourseDetails/Timer'
import { Comment } from '../../components/CourseDetails/Comment'
import { Video } from '../../components/CourseDetails/Video'
import { Head } from '../../components/CourseDetails/Head'
import { CardDetail } from '../../components/CourseDetails/CardDetail'
import { ScrollRestoration, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { getCourseById, getallbypgCourseList } from '../../core/services/api/course'



const CourseDetails=()=>{

  const [courseList, setCourseList] = useState([]);
  const {id}=useParams();

  const getListt = async (id) => {
    try {
      const courses = await getCourseById(id);

      setCourseList(courses);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };


  
  useEffect(() => {
    getListt(id);
  }, []);

    return (
        <>
         <div className='font-vazir'>
          <div className='w-[100%] mx-auto flex justify-center py-2 '>
            <div className='w-full lg:w-[60%] xl:w-[68%] flex flex-col gap-y-4 my-5'>
              <Head courses={courseList}/>

            </div>
            <div className='hidden xl:w-[30%] lg:w-[32%] lg:flex flex-col gap-3 '>
              {/* <Timer/> */}
              <CardDetail courses={courseList}/>
            </div>
          </div>
         </div>
         <ScrollRestoration/>
        </>
      )
}

export  {CourseDetails}