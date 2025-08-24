
// Google font import for demo (optional, best in index.html)
const googleFont = {
  fontFamily: 'Roboto, Arial, sans-serif'
};

const Signup = ({ onSignup }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      console.log(form)
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      console.log(res);
      if (!res.ok) throw new Error(data.message || 'Signup failed');
      onSignup();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100" style={googleFont}>
      <div className="bg-white rounded-lg shadow-lg p-0 w-full max-w-md flex flex-col items-center border border-gray-200">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google Logo" className="w-28 mt-8 mb-2" />
        <h2 className="text-2xl font-normal mb-1 text-gray-800">Create your Google Account</h2>
        <p className="text-gray-500 mb-6 text-sm">to continue to Gmail</p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 px-8">
          <input name="name" value={form.name} onChange={handleChange} placeholder="First name" className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
          <input name="password" value={form.password} onChange={handleChange} placeholder="Password" type="password" className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button type="submit" className="bg-[#1a73e8] hover:bg-[#1765c1] text-white font-medium py-2 rounded shadow mt-2 tracking-wide">Next</button>
        </form>
        <div className="w-full flex items-center my-4 px-8">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="mx-2 text-gray-400 text-xs">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <p className="mb-8 text-xs text-gray-500">Already have an account? Use the login page.</p>
      </div>
    </div>
  );
};

export default Signup;
