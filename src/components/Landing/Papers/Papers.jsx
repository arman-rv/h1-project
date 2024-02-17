import React from "react";

import { ButtonDarkGreen } from "../../common/ButtonDarkGreen/ButtonDarkGreen";
import { PapersSlideshow } from "./PapersSlideshow/PapersSlideshow";

const Papers = () => {
  return (
    <>
    <div className="container mx-auto my-[40px] flex flex-col items-center">
      <h3 className="text-[32px]">برترین مقالات ما</h3>
      <p style={{ color: "var(--text-col4)" }}>
        ساختن دنیایی بهتر، یک دوره در یک زمان
      </p>
      <div className="w-[90%] my-[20px] flex justify-center">
        <PapersSlideshow />
      </div>
      <ButtonDarkGreen name="مشاهده مقالات بیشتر" sendMeTo="/paperlist" />
    </div>
    </>
  );
};

export { Papers };
