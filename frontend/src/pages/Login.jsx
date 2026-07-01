import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await api.post("auth/login/", formData);

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      alert("Login Successful!");

      navigate("/dashboard");
    } catch (error) {
      alert("Invalid username or password");
      console.error(error);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4">Login</h2>

      <input
        type="text"
        name="username"
        className="form-control mb-3"
        placeholder="Username"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        className="form-control mb-3"
        placeholder="Password"
        onChange={handleChange}
      />

      <button
        className="btn btn-primary w-100"
        onClick={handleLogin}
      >
        Login
      </button>
      <p className="text-center mt-3">
  Don't have an account? <Link to="/register">Register</Link>
</p>
    </div>
  );
}

export default Login;