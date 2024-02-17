import { Pagination } from 'antd';

const Pgination=({className})=> {
    return (
      <>
      <div className={`${className} w-full flex justify-center items-center mt-4`}>
         <Pagination defaultCurrent={1} total={50} />
      </div>
     
      </>
      
    )}

    export {Pgination}