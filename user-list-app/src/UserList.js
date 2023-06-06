import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css'; // Import the UserList.css file

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul className="user-list__list">
        {listOfUsers.map((user) => (
          <li key={user.id} className="user-list__item">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
            <p>City: {user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
