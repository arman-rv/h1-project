import car from "../../../../../../assets/image/03.jpg"
import add from "../../../../../../assets/image/icons8-add-48.png"

const Courses=({dates,detail})=> {
    return (
        <ul style={{backgroundColor: 'var(--background)', color:'var(--text-col4)'}} className='rounded-[10px] text-xs font-medium flex justify-start  h-[45px] text-center leading-[45px] mb-[15px]'> 
        <li className='w-[6%] h-[70%] my-auto mr-[1%] rounded-[10px] overflow-hidden'>
        <img src={car} className=' w-full h-full'/>                
        </li>
        <li className=' w-[14.9%]'> نود جی اس </li>
        <li className='w-[14.9%]'> استاد بحرالعلوم </li>
        <li className='w-[13.8%]'> بهار </li>
        <li className='w-[13.8%]'> 1400/10/20 </li>
        <li className='w-[13.8%]'>{dates}
          <div className="badge badge-success">
            {detail} 
          </div>
        </li>
        <li className='w-[14.8%]'> 900.000 تومان </li>
        <li className='w-[7%]  my-auto cursor-pointer'>
       {src} 
        </li>            
      </ul>
    )}

    export {Courses}