import React from 'react'
import jpg from "../../assets/image/jpjp.jpeg"
import { getProfile } from '../../core/services/api/user';
import { useEffect } from 'react';

const PanelPro = (st) => {
//console.log(st.student);
  return (
    <>
        <div style={{backgroundColor:'var(--back-col)', color: 'var(--text-col4)'}} className='w-[100%] h-[66px] flex justify-center items-center gap-5'>
          <div className='mr-3 h-[45px] w-[45px] rounded-full'>
            <div className="avatar online">
              <div className="w-[45px] rounded-full">
                <img src={jpg} />
              </div>
            </div>
          </div>
          <div className='w-[120px] h-[50px] flex flex-col text-base font-semibold'>
            <a href=""> {st.student.fName}  {st.student.lName} </a>
            <a className='font-light text-base' href="">دانشجو</a>
          </div>
        </div>
    </>
  )
}

export  {PanelPro}