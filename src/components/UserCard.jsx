import React from 'react';

function UserCard({ name, role, avatar }) {
  return (
    <div className="border p-4 rounded-xl shadow-md text-center w-60">
      <img src={avatar} alt={name} className="w-20 h-20 rounded-full mx-auto mb-2" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-500">{role}</p>
    </div>
  );
}

export default UserCard;