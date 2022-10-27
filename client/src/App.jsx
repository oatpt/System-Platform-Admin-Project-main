import React, { useEffect, useState } from "react";
import { getUser, deleteUser, createUser } from "./store/user.slice";
import { useSelector, useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";

const App = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const { users } = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      dispatch(createUser(username));
      setUsername("");
    }
  };

  return (
    <div className="min-h-screen bg-[#e9ecef] p-5">
      <h1 className="text-center text-4xl font-semibold mb-4">ISAG Member</h1>
      <div className="max-w-[500px] mx-auto bg-white shadow-md rounded-xl p-5">
        <form onSubmit={handleSubmit} className="flex justify-between">
          <input
            className="py-1 px-2 rounded-md border-black border-2 w-full mr-4"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#06d6a0] border-[#06d6a0] border-2 ml-4 text-white py-1 px-5 rounded-md"
          >
            add
          </button>
        </form>
        <div className="mt-4">
          {users?.map((user) => {
            return (
              <div
                key={user._id}
                className="flex justify-between items-center mb-4"
              >
                <h2 className="text-lg">{user.username}</h2>
                <button
                  type="button"
                  onClick={() => dispatch(deleteUser(user._id))}
                >
                  <AiFillDelete className="text-[#ef476f]" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
