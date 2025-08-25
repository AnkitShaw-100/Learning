import React from 'react'

const LoginPage = () => {
    return (
        <div className="login-container" style={{ maxWidth: 400, margin: "60px auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
            <h2>Login</h2>
            <form>
                <div style={{ marginBottom: 16 }}>
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" style={{ width: "100%", padding: 8 }} />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" style={{ width: "100%", padding: 8 }} />
                </div>
                <button type="submit" style={{ width: "100%", padding: 10, background: "#007bff", color: "#fff", border: "none", borderRadius: 4 }}>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;

