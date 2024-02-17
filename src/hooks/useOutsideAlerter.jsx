import { useEffect, useState } from "react";

const useOutsideAlerter = (ref) => {

        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          const handleClickOutside =(event)=> {
            if (ref.current && !ref.current.contains(event.target)) {
                alert('closed')
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
}

export {useOutsideAlerter}