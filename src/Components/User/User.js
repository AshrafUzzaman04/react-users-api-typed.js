import React from "react";
import backGround from "../../images/background/users_grid_bg.png";

const User = (props) => {
  const {
    first_name,
    last_name,
    mobile_number,
    gender,
    father_name,
    mother_name,
    profession,
    email,
  } = props.user;
  const img = {
    backgroundImage: `url(${backGround})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div
      className="border-2 border-indigo-200 p-5 m-5 inline-block w-11/12 sm:w-full mx-auto md:mx-0"
      style={img}
    >
      <span className="block text-blue-700 font-bold">
        First Name:{" "}
        <span className="text-black font-semibold">{first_name}</span>
      </span>
      <span className="block text-blue-700 font-bold">
        Last Name:{" "}
        <span className="text-black font-semibold"> {last_name}</span>
      </span>
      <span className="block text-blue-700 font-bold">
        Email: <span className="text-black font-semibold"> {email}</span>
      </span>
      <span className="block text-blue-700 font-bold">
        Mobile Number:{" "}
        <span className="text-black font-semibold"> {mobile_number}</span>
      </span>
      <span className="block text-blue-700 font-bold">
        Father Name:{" "}
        <span className="text-black font-semibold"> {father_name}</span>
      </span>
      <span className="block text-blue-700 font-bold">
        Mother Name:{" "}
        <span className="text-black font-semibold">{mother_name}</span>
      </span>
      <span className="block text-blue-700 font-bold">
        Gender: <span className="text-black font-semibold">{gender}</span>
      </span>
      <span className="block text-blue-700 font-bold">
        Profession:{" "}
        <span className="text-black font-semibold">{profession}</span>
      </span>
    </div>
  );
};

export default User;
