import { ServicesCard } from "../../common/ServicesCard/ServicesCard";

import S1 from "../../../assets/image/ourServices/figure-svgrepo-com.svg";
import S2 from "../../../assets/image/ourServices/statistics-svgrepo-com.svg";
import S3 from "../../../assets/image/ourServices/map-svgrepo-com.svg";
import S4 from "../../../assets/image/ourServices/office-svgrepo-com.svg";
import S5 from "../../../assets/image/ourServices/analyze-svgrepo-com.svg";
import S6 from "../../../assets/image/ourServices/project-svgrepo-com.svg";


const OurServices = () => {
  const services = [
    {pic:S1 , name:"اساتید مجرب" , desc:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، "},
    {pic:S2 , name:"مشاوره رایگان" , desc:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، "},
    {pic:S3 , name:"فرصت های شغلی" , desc:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، "},
    {pic:S4 , name:"ارائه مدرک معتبر" , desc:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، "},
    {pic:S5 , name:"دوره های جامع و متنوع" , desc:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، "},
    {pic:S6 , name:"آموزش پروژه محور" , desc:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، "},
  ]
  return (
    <div className="container mx-auto !p-0 my-[40px] hidden md:flex flex-col items-center">
      <h3 className="text-[32px]">خدمات ما</h3>
      <p style={{ color: "var(--text-col4)" }}>
        ما فرصت آماده شدن برای زندگی را فراهم می کنیم
      </p>
      <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-0 gap-x-5 lg:gap-x-10 justify-center">

      {services.map((items,index) => (
        <ServicesCard
        key={index}
          sPic={items.pic}
          sName={items.name}
          sDesc={items.desc}
        />
        ))}

      </div>
    </div>
  );
};

export { OurServices };