// src/components/UserProfile.jsx
import { useContext } from 'react';
import UserContext from '../UserContext.js'; // Adjust path relative to components/

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{ padding: '20px', textAlign: 'center', color: '#333' }}>
      <h1 style={{ color: '#007BFF' }}>User Profile</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;