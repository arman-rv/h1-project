import React from "react";
import { ConfigProvider, Pagination } from "antd";

const Pgination = ({ setPagee, total }) => {

  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            fontFamily:'vazir',
            itemActiveBg:'var(--main-col2)',
            colorText:'var(--text-col4)',
            colorPrimary:'var(--text-col4)',
            colorPrimaryBorder:'none',
            colorPrimaryHover:'var(--text-col3)',	
          },
        },
      }}
    >
      <Pagination
        onChange={(e) => setPagee(e)}
        defaultCurrent={1}
        pageSize={12}
        total={total}
      />
    </ConfigProvider>
  );
};
export { Pgination };
