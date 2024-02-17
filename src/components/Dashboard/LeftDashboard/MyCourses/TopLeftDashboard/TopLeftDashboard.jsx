const TopLeftDashboard=()=> {
  return (
        <div className='h-[50px] flex '>  
          <div className='h-[70%] w-[80%] my-auto py-[4px]'> 
          <span style={{color:'var(--text-col4)'}} className='text-sm font-medium'> دوره های ثبت شده: </span>
          <span  style={{color:'var(--text-col4)'}} className=' text-sm  text-textCol '> 36 از 39 </span>
          </div>
          <input  style={{backgroundColor: 'var(--main-col)'}} className='h-[60%] w-[20%] my-auto rounded-full px-[14px] bg-search bg-no-repeat  bg-[8px_center] bg-[length:18px_18px] placeholder:text-xs placeholder:font-bold  placeholder:text-textCol3' placeholder='جست و جو'/> 
        </div>
  )}
  export {TopLeftDashboard}
