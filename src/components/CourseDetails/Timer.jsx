const Timer=()=>{
    return(
        <div style={{backgroundColor:"var(--back-col)" , color:"var(--text-col4)"}}  className='w-[95%] flex flex-col gap-5 mx-auto rounded-[15px] shadow-cardShadow pt-4'>
                <div className='flex w-[75%] mx-auto'>
                  <span>مانده تا شروع دوره :</span>
                </div>
                <div className='flex w-[95%] h-[120px] mx-auto'>
                  <div className='w-[33%] h-[50%]  flex flex-col items-center gap-2'>
                    <div className='flex justify-center items-center gap-2'>
                      <div className='w-[40px] h-[40px] border border-submitCol rounded-md flex justify-center items-center'>
                        <span>7</span>
                      </div>
                      <div className='w-[40px] h-[40px] border border-submitCol rounded-md flex justify-center items-center'>
                        <span>2</span>
                      </div>
                    </div>
                    <div>ثانیه</div>
                  </div>
                  <span className='mt-3 font-bold text-textCol3'>:</span>
                  <div className='w-[33%] h-[50%]  flex flex-col items-center gap-2'>
                  <div className='flex justify-center items-center gap-2'>
                      <div className='w-[40px] h-[40px] border border-submitCol rounded-md flex justify-center items-center'>
                        <span>8</span>
                      </div>
                      <div className='w-[40px] h-[40px] border border-submitCol rounded-md flex justify-center items-center'>
                        <span>5</span>
                      </div>
                    </div>
                    <div>دقیقه</div>
                  </div>
                  <span className='mt-3 font-bold text-textCol3'>:</span>
                  <div className='w-[33%] h-[50%]  flex flex-col items-center gap-2'>
                  <div className='flex justify-center items-center gap-2'>
                      <div className='w-[40px] h-[40px] border border-submitCol rounded-md flex justify-center items-center'>
                        <span>4</span>
                      </div>
                      <div className='w-[40px] h-[40px] border border-submitCol rounded-md flex justify-center items-center'>
                        <span>2</span>
                      </div>
                    </div>
                    <div>ساعت</div>
                  </div>
                </div>
              </div>
    )
}

export {Timer}