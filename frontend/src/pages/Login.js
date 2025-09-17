import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.username || !form.password) {
      setError("All fields are required.");
      return;
    }

    try {
      // Try backend login (assumes /api/login/ returns JWT in access or token)
      const res = await axios.post("http://127.0.0.1:8000/api/login/", form, {
        headers: { "Content-Type": "application/json" },
      });

      // Handle different token names (SimpleJWT returns access)
      const token = res?.data?.access || res?.data?.token || null;
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("auth", "true");
        navigate("/home");
        return;
      }
    } catch (err) {
      // ignore — we'll try local fallback
    }

    // Local fallback (useful for dev/testing if backend not ready)
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.username === form.username && u.password === form.password);
    if (user) {
      localStorage.setItem("auth", "true");
      navigate("/home");
    } else {
      setError("Invalid credentials or server not available.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-gray-900/80 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-red-400">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            className="p-2 rounded bg-gray-800 border border-gray-700 text-white"
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="p-2 rounded bg-gray-800 border border-gray-700 text-white"
          />
          <button type="submit" className="bg-red-600 hover:bg-red-700 text-white p-2 rounded mt-2">
            Login
          </button>
          {error && <p className="text-sm text-red-300 mt-2">{error}</p>}
        </form>

        <p className="mt-6 text-center text-gray-300">
          Don't have an account?{" "}
          <Link to="/register" className="text-red-400 underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
