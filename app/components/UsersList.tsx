'use client'
import React, { useEffect, useState } from 'react';

interface User {
    id: string | number;
    _id: string
    name: string;
}

const UsersList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: User[] = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">User List</h1>
            <ul className="list-disc pl-5">
                {users.map((user) => (
                    <li key={user._id} className="mb-2">
                      {user._id}  {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;