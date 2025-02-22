// src/UserDetails.jsx
import { useContext } from 'react'; // Import useContext
import UserContext from './UserContext.js'; // Import UserContext

function UserDetails() {
  const userData = useContext(UserContext); // Consume context instead of props

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;