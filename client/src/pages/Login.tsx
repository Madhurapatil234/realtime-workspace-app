function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-4">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-3"
        />

        <button className="bg-blue-500 text-white w-full p-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;