import { useState } from "react";

function DepartmentUsers() {

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const deleteUser = (index) => {

    let updatedUsers = [...users];

    updatedUsers.splice(index, 1);

    setUsers(updatedUsers);

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div className="page">

      <h2>Registered Users</h2>

      <table border="1">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user, index) => (
            <tr key={index}>

              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.department}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>

              <td>
                <button onClick={() => deleteUser(index)}>
                  Delete
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default DepartmentUsers;