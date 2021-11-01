import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data.reverse());
  };

  const deleteUser = async (id) => {
   await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div>
      <table className="table border shadow mx-3">
        <thead className="table-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  className="btn btn-dark mb-2 mx-1"
                  to={`/view/${user.id}`}
                >
                  View
                </Link>
                <Link
                  className="btn btn-outline-dark mb-2 mx-1"
                  to={`/edit/${user.id}`}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger mb-2 mx-1"
                  onClick={() =>  deleteUser(user.id)}
                >
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

export default Home;
