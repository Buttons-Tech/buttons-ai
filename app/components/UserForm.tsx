'use client'
import React, { useState, FormEvent, ChangeEvent } from 'react';

// Define the type/interface for your form data
interface IFormData {
    name: string;
    car: string;
    service: string;
}

const UserForm: React.FC = () => {
    // Initialize state with the defined interface
    const [formData, setFormData] = useState<IFormData>({
        name: '',
        car: '',
        service: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Type the event for input change (ChangeEvent<HTMLInputElement>)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Type the event for form submission (FormEvent)
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault(); // Stop the default browser form submission
        setIsSubmitting(true);
        setSuccessMessage(null);
        setErrorMessage(null);

        try {
            const response = await fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const user: IFormData = await response.json();
                console.log('User created/fetched successfully:', user);
                setSuccessMessage(`Success! User "${user.name}" created.`);
                // Clear form by resetting to initial state
                setFormData({ name: '', car: '', service: '' });

                // auto-hide confirmation after 5s
                setTimeout(() => setSuccessMessage(null), 5000);
            } else {
                const errorData: { message: string } = await response.json();
                console.error('API Error:', errorData.message);
                setErrorMessage(errorData.message || 'An error occurred.');
            }
        } catch (error) {
            console.error('Network Error:', error);
            setErrorMessage('A network error occurred.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-md mx-auto">
            {successMessage && (
                <div
                    role="status"
                    aria-live="polite"
                    className="mb-4 p-3 bg-green-100 text-green-800 rounded"
                >
                    {successMessage}
                </div>
            )}
            {errorMessage && (
                <div
                    role="alert"
                    className="mb-4 p-3 bg-red-100 text-red-800 rounded"
                >
                    {errorMessage}
                </div>
            )}

            <form
                className="space-y-4 p-6 bg-gray-200 rounded-lg shadow"
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="car">Car:</label>
                    <input
                        id="car"
                        type="text"
                        name="car"
                        value={formData.car}
                        onChange={handleChange}
                        className="bg-white w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="service">Service:</label>
                    <input
                        id="service"
                        type="text"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="bg-white w-full"
                        required
                    />
                </div>
                <button
                    className="bg-white py-[1rem] px-[2rem] cursor-pointer disabled:opacity-50"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>

            {(() => {
                const UsersList: React.FC = () => {
                    const [users, setUsers] = useState<IFormData[]>([]);
                    const [loading, setLoading] = useState<boolean>(true);
                    const [fetchError, setFetchError] = useState<string | null>(null);

                    React.useEffect(() => {
                        let mounted = true;
                        const fetchUsers = async () => {
                            setLoading(true);
                            setFetchError(null);
                            try {
                                const res = await fetch('/api/users');
                                if (!res.ok) {
                                    const err = await res.json().catch(() => ({ message: 'Failed to load users.' }));
                                    throw new Error(err.message || 'Failed to load users.');
                                }
                                const data: IFormData[] = await res.json();
                                if (mounted) setUsers(Array.isArray(data) ? data : []);
                            } catch (err: any) {
                                if (mounted) setFetchError(err?.message || 'Network error while fetching users.');
                            } finally {
                                if (mounted) setLoading(false);
                            }
                        };

                        fetchUsers();
                        return () => {
                            mounted = false;
                        };
                    }, []);

                    if (loading) {
                        return (
                            <div className="mt-6 p-4 bg-white rounded shadow">
                                Loading users...
                            </div>
                        );
                    }

                    if (fetchError) {
                        return (
                            <div className="mt-6 p-4 bg-red-100 text-red-800 rounded">
                                {fetchError}
                            </div>
                        );
                    }

                    return (
                        <div className="mt-6 p-4 bg-white rounded shadow">
                            <h2 className="mb-3 font-semibold">All Users</h2>
                            {users.length === 0 ? (
                                <div className="text-sm text-gray-600">No users found.</div>
                            ) : (
                                <ul className="space-y-3">
                                    {users.map((u, i) => (
                                        <li key={i} className="p-3 border rounded bg-gray-50">
                                            <div className="text-sm"><strong>Name:</strong> {u.name}</div>
                                            <div className="text-sm"><strong>Car:</strong> {u.car}</div>
                                            <div className="text-sm"><strong>Service:</strong> {u.service}</div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    );
                };

                return <UsersList />;
            })()}
        </div>
    );
}

export default UserForm;