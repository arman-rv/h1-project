import React, { useEffect, useState } from "react";

import mary from "../../../assets/image/teachers/mary.svg";
import ana from "../../../assets/image/teachers/ana.svg";
import bob from "../../../assets/image/teachers/bob.svg";

import { TeachersCard } from "../../common/TeachersCard/TeachersCard";
import { motion } from "framer-motion";
import { variants } from "./varient";
import { getallTeachers } from "../../../core/services/api/teachers";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  const getTeachers = async () => {
    try {
      const allTeachers = await getallTeachers();

      setTeachers([allTeachers[4], allTeachers[9], allTeachers[11]]);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  useEffect(() => {
    getTeachers();
  }, []);
  return (
    <>
      <div style={{ background: "var(--intro)" }}>
        <div className="lg:container mx-auto my-[40px] pt-[60px] pb-[20px] flex flex-col items-center">
          <motion.div
            className="flex flex-col justify-center"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-[32px]">حرفه ای های ما</h3>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p style={{ color: "var(--text-col4)" }}>
              ساختن دنیایی بهتر، یک دوره در یک زمان
            </p>
          </motion.div>

          <div className="mt-[20px] sm:mt-[30px]">
            <motion.div
              className=" flex flex-wrap sm:flex-nowrap gap-0 lg:gap-10 justify-center sm:justify-between"
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {teachers &&
                teachers?.map((items, index) => {
                  return (
                    <TeachersCard
                      key={index}
                      tName={items?.fullName}
                      tPic={mary}
                      tField={"مدرس طراحی وب"}
                      desc={
                        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، "
                      }
                      tEmail={"teachers@gmail.com"}
                    />
                  );
                })}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Teachers };
