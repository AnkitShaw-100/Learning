import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        setError("Could not load profile. Please login again.");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;
  if (!user) return null;

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="mb-2"><b>Name:</b> {user.name}</div>
      <div className="mb-2"><b>Email:</b> {user.email}</div>
      <div className="mb-2"><b>Role:</b> {user.role}</div>
      <div className="mb-2 text-xs text-gray-500">Joined: {new Date(user.createdAt).toLocaleDateString()}</div>
      {/* Add edit profile, change password, and activity sections here if needed */}
    </div>
  );
};

export default Profile;
