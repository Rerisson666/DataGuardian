import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserComponent from './components/UserComponent';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>DataGuardian</h1>
      <UserComponent users={users} />
    </div>
  );
}

export default App;
