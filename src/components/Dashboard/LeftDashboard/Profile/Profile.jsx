import { Field, Form, Formik } from "formik"
import pro from "../../../../assets/image/03.jpg"
import { ButtonDarkGreen } from "../../../common/ButtonDarkGreen/ButtonDarkGreen"

const Profile = () => {
  return (
    <div style={{background:"var(--back-col)"}}  className='h-[520px] w-[60%] rounded-[20px]  px-[12px]  flex gap-5 items-center'>
        <div className="h-[500px] w-[90%] mx-auto rounded-[20px]  ">
            <div className=" w-[110px] h-[110px] rounded-full overflow-hidden mx-auto my-[10px]">
            <img src={pro} className="w-full h-full " />
            </div>
            <Formik initialValues="" onSubmit="" validationSchema="">
                <Form style={{color:"var(--text-col4)"}}  className="flex flex-row flex-wrap gap-2 justify-between">
                    <div style={{background:"var(--background)"}} className="flex flex-col pr-[3%] pt-[6px] overflow-hidden shadow-cardShadow  text-[13px]  rounded-[12px]  h-[55px] w-[49%]">
                        نام کاربری
                     <Field
                     style={{background:"var(--background)"}} 
                        type="text"
                        name="fname"
                        value="Mohsen"
                        className="w-[94%]  px-[10px]  text-lg pr-0 "
                    /> 

                   
                    </div>
                    <div style={{background:"var(--background)"}} className="flex flex-col px-[3%] pt-[6px] overflow-hidden shadow-cardShadow  text-[13px]  rounded-[12px]  h-[55px] w-[49%]">

                    رمز عبور     
                     <Field
                     style={{background:"var(--background)"}} 
                        type="text"
                        name="fname"
                        value="***********"
                        className=" w-[94%]  px-[10px] text-lg pr-0 "
                    /> 
                    </div>
                    <div style={{background:"var(--background)"}} className="flex flex-col px-[3%] pt-[6px] overflow-hidden shadow-cardShadow  text-[13px]  rounded-[12px]  h-[55px] w-[49%]">
                    نام    
                     <Field
                     style={{background:"var(--background)"}} 
                        type="text"
                        name="fname"
                        value="محسن"
                        className=" w-[94%] px-[10px] text-lg pr-0 "
                    /> 
                    </div>                    
                    <div style={{background:"var(--background)"}} className="flex flex-col px-[3%] pt-[6px] overflow-hidden shadow-cardShadow  text-[13px]  rounded-[12px]  h-[55px] w-[49%]">
                        نام خانوادگی                                     
                    <Field
                    style={{background:"var(--background)"}} 
                        type="text"
                        name="fname"
                        value="مرتضی زاده"
                        className=" w-[94%] px-[10px] text-lg pr-0 "
                    /> 
                    </div>                                        
                    <div style={{background:"var(--background)"}} className="flex flex-col px-[3%] pt-[6px] overflow-hidden shadow-cardShadow  text-[13px]  rounded-[12px]  h-[55px] w-[100%]">
                    ایمیل    
                       <Field
                       style={{background:"var(--background)"}} 
                        type="text"
                        name="fname"
                        value="mohsen-mrt72@gmail.com"
                        className=" w-[94%] px-[10px] text-lg pr-0 "
                    /> 
                    </div>
                    <div style={{background:"var(--background)"}} className="flex flex-col px-[3%] pt-[6px] overflow-hidden shadow-cardShadow  text-[13px]  rounded-[12px]  h-[55px] w-[49%]">
                    کد ملی
                     <Field
                     style={{background:"var(--background)"}} 
                        type="text"
                        name="fname"
                        value="2160585486"
                        className=" w-[94%] px-[10px] text-lg pr-0 "
                    /> 
                    </div>                   
                    <div style={{background:"var(--background)"}} className="flex flex-col px-[3%] pt-[6px] overflow-hidden shadow-cardShadow  text-[13px]  rounded-[12px]  h-[55px] w-[49%]">
                        تاریخ تولد
                     <Field
                     style={{background:"var(--background)"}} 
                        type="text"
                        name="fname"
                        value="1372/07/15"
                        className=" w-[94%] px-[10px]  text-lg pr-0 "
                    /> 
                    </div>
                    <div style={{background:"var(--background)"}} className="flex flex-col px-[3%] pt-[6px] overflow-hidden shadow-cardShadow  text-[13px]  rounded-[12px]  h-[55px] w-[100%]">
                        شماره همراه
                     <Field
                     style={{background:"var(--background)"}} 
                        type="text"
                        name="fname"
                        value="09351913562"
                        className=" w-[94%]  px-[10px] text-lg pr-0 "
                    /> 
                    </div>                                                          
                </Form>
            </Formik>
            <div className="mt-[15px] flex flex-row justify-center gap-2">
                 <ButtonDarkGreen name="ثبت تغییرات" className="rounded-2"/> 
                 <ButtonDarkGreen name="لغو تغییرات" className=""/>                                 
            </div>
        </div>
    </div> 
  )
}

export  {Profile}