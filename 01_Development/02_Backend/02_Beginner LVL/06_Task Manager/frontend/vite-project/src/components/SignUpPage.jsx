import React from 'react'

const SignUpPage = () => {
    return (
        <div className="signup-container" style={{ maxWidth: 400, margin: "60px auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
            <h2>Sign Up</h2>
            <form>
                <div style={{ marginBottom: 16 }}>
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" style={{ width: "100%", padding: 8 }} />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" style={{ width: "100%", padding: 8 }} />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" style={{ width: "100%", padding: 8 }} />
                </div>
                <button type="submit" style={{ width: "100%", padding: 10, background: "#28a745", color: "#fff", border: "none", borderRadius: 4 }}>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpPage;

