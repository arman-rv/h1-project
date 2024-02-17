import React from 'react'
import { PanelPro } from './PanelPro'
import { PanelMenu } from './PanelMenu'

const RightSidePanel = (s) => {
  return (
        <div style={{backgroundColor:'var(--main-col2)'}}  className='w-[100%] h-screen'>    
            <PanelPro student={s.student}/>
            <PanelMenu />    
        </div>
  )
}

export  {RightSidePanel}