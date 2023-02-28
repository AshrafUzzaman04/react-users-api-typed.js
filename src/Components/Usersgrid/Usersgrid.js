import { useState } from "react";
import userData from "../../json/user_data.json";
import User from "../User/User";

const Usersgrid = () => {
  const data = userData;
  const [uadded, setUAdded] = useState([]);
  // event handlers
  const handleClickAdded = (users) => {
    setUAdded([...uadded, users]);
  };
  return (
    <>
      <div>
        {uadded.map((u) => (
          <li>{u}</li>
        ))}
      </div>
      <h2 className="text-4xl text-center font-mono font-bold mb-4 underline">
        User Json Data
      </h2>
      <div className="bg-transparent grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mx-6">
        {data.map((user) => {
          return <User user={user} handleClickAdded={handleClickAdded}></User>;
        })}
      </div>
    </>
  );
};

export default Usersgrid;
