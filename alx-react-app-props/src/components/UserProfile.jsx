import React from 'react';

const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p><strong>Bio:</strong> {props.bio}</p>
    </div>
  );
};

export default UserProfile;
