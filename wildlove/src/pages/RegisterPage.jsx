import { useState } from "react";
import { useAuth } from "../components/Shared/Authentication";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    const success = register(email, password);
    if (success) {
      navigate("/About");
    } else {
      setError("User already exists");
    }
  };

  return (
    <div className="min-h-[80vh] justify-center pl-[400px]">
      <div className="border-1 shadow-2xl flex flex-col  items-center w-[400px] rounded-lg p-[10px] m-2">
        <h1 className="text-2xl text-black">Register</h1>
        <input
          type="email"
          placeholder="Email"
          className="block border rounded px-2 py-1 my-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="block border rounded px-2 py-1 my-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="border rounded-lg text-green-500 px-4 py-2"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
      
    </div>
  );
}

export default RegisterPage;
