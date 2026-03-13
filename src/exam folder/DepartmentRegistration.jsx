import React, { useState } from "react";

const DepartmentRegistration = () => {

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    department: "",
    gender: "",
    phone: ""
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(userData);

    localStorage.setItem("users", JSON.stringify(users));

    alert("User Registered Successfully");

    setUserData({
      name: "",
      email: "",
      department: "",
      gender: "",
      phone: ""
    });
  };

  return (
    <div className="page">
      <h2>Department Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"name="name" placeholder="Name"
          value={userData.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="email" name="email"
placeholder="Email"
value={userData.email}
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={userData.department}
          onChange={handleChange}
          required
        />
        <br /><br />
        <select
          name="gender"
          value={userData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <br /><br />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={userData.phone}
          onChange={handleChange}
          required
        />
        <br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default DepartmentRegistration;