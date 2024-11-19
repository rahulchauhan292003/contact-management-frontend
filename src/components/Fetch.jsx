import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Fetch = () => {
  const [detail, setDetail] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/api/user/contacts");
    console.log(response.data);
    setDetail(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const Del = await axios.delete(
      `http://localhost:3000/api/user/contacts/${id}`
    );
    setDetail(detail.filter((D) => D._id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">First Name</th>
            <th className="px-4 py-2 text-left">Last Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Phone Number</th>
            <th className="px-4 py-2 text-left">Company</th>
            <th className="px-4 py-2 text-left">Job Title</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {detail.map((item, index) => (
            <tr key={item._id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{item.firstName}</td>
              <td className="px-4 py-2">{item.lastName}</td>
              <td className="px-4 py-2">{item.email}</td>
              <td className="px-4 py-2">{item.phoneNumber}</td>
              <td className="px-4 py-2">{item.company}</td>
              <td className="px-4 py-2">{item.jobTitle}</td>
              <td className="px-4 py-2 text-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                  <Link to={`/edit/${item._id}`}>Edit</Link>
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>{" "}
      <div className="mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          {" "}
          <Link to={"/create"}>Create User</Link>
        </button>
      </div>
    </div>
  );
};

export default Fetch;
