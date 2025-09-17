import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.username || !form.password || !form.email) {
      setError("All fields are required.");
      return;
    }

    try {
      // Try backend registration
      await axios.post("http://127.0.0.1:8000/api/register/", form, {
        headers: { "Content-Type": "application/json" },
      });

      // On success redirect to login page
      navigate("/login");
      return;
    } catch (err) {
      // if backend fails, show message and fallback to local storage
      if (err.response) {
        const msg = err.response.data?.detail || "Registration failed.";
        setError(msg);
        return;
      }
      // fallback: store locally (dev only)
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      if (users.find((u) => u.username === form.username)) {
        setError("User already exists (local).");
        return;
      }
      users.push({ username: form.username, email: form.email, password: form.password });
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-gray-900/80 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-red-400">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            className="p-2 rounded bg-gray-800 border border-gray-700 text-white"
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
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
            Register
          </button>
          {error && <p className="text-sm text-red-300 mt-2">{error}</p>}
        </form>

        <p className="mt-6 text-center text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-red-400 underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
