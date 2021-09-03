import React from "react";
import { useQuery } from "react-query";
import { getHOF } from "../../../api/tinderApi";
export default function Hof() {
  const { isLoading, error, data } = useQuery("getHOF", getHOF);
  console.log(error);
  console.log(data);
  console.log(localStorage.getItem("accesstoken"));
  return <div>hihihi{/* {data &&} */}</div>;
}
