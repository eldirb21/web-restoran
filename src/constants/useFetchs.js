import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useFetchs = (action) => {
  useEffect(() => {
    action();
  }, []);
};
