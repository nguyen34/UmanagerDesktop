import React from 'react';

export async function getServerSideProps() {
  const res = await fetch('http://localhost:8000/api/users');
  const users = await res.json();
  console.log(users);

  return {
    props: {
      users: users.results || [],
    },
  };
}

interface User {
  id: number;
  username: string;
}

export default function Users ({ users }: { users: User[] }) {
    if (!users) {
        return <div>Loading...</div>;
    }
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}