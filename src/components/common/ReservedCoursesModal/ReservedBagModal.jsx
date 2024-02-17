import { useSelector } from "react-redux";
import { ReserveCourse } from "../../Panel/PanelPage/ReserveCourse";

const ReservedBagModal = () => {
  const total = useSelector((state) => state.reservCourse);
  let all = total.totalCount;
  console.log(all)

  return (
    <>
      {/* open modal button */}
      <label
        htmlFor="my_modal_7"
        className="z-[1000] btn btn-ghost btn-circle flex fle-col justify-center tooltip tooltip-bottom"
        data-tip="سبد خرید"
      >
        <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--text-col3)" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
          <span className="badge badge-sm indicator-item">{all}</span>
        </div>
      </label>

      {/* modal */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal !-screen">
        <div
          style={{ background: "var(--background)" }}
          className="modal-box !max-w-[80%]"
        >
          <ReserveCourse className="hidden" />
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};

export { ReservedBagModal };
