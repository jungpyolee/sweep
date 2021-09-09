import React from "react";
import { useQuery } from "react-query";
import { getHOF } from "../../../api/tinderApi";
export default function Hof() {
  const { error, data } = useQuery("getHOF", getHOF);

  return <div>hihihi{/* {data &&} */}</div>;
}
