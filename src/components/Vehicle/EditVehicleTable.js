import React from "react";
import { useParams } from "react-router";

const EditVehicleTable = () => {
  const { id } = useParams();
  return (
    <>
      <h3>{id}</h3>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus saepe,
        vitae dignissimos esse aspernatur ducimus enim facilis voluptate cumque
        perferendis.{" "}
      </h2>
    </>
  );
};

export default EditVehicleTable;
