import React from 'react';

function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <input type="email" placeholder="Email" className="block w-full mb-4 border px-3 py-2" />
        <input type="password" placeholder="Password" className="block w-full mb-4 border px-3 py-2" />
        <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
