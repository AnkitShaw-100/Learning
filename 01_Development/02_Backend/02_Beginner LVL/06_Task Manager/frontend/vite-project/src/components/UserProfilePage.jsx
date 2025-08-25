import React from 'react'

const UserProfilePage = () => {
    return (
        <div style={{ maxWidth: 500, margin: "60px auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
            <h2>User Profile</h2>
            <div style={{ marginBottom: 16 }}>
                <strong>Name:</strong> John Doe
            </div>
            <div style={{ marginBottom: 16 }}>
                <strong>Email:</strong> johndoe@example.com
            </div>
            <button style={{ padding: 10, background: "#ffc107", color: "#333", border: "none", borderRadius: 4 }}>Edit Profile</button>
        </div>
    );
};

export default UserProfilePage;
