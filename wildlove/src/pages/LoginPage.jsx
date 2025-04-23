import { useState } from "react";
import { useAuth } from "../components/Shared/Authentication";
import { useNavigate, useLocation, Link } from "react-router-dom";

function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/Home";  
    
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleLogin = () => {
        const success = login(email, password);
        if (success) {
           
            navigate(from, { replace: true });
        } else {
            
            setError("Invalid email or password");
        }
    };

    return (
        <div className="min-h-[80vh] pl-[80px] pt-15 justify-center md:pl-[150px] lg:pl-[400px] ">
           <div className="border-1 shadow-2xl flex flex-col  items-center w-[400px] rounded-lg p-[10px] m-2">
            <h1 className="text-2xl text-black text-center m-4">Login</h1>
               
                <input
                    type="email"
                    placeholder="Email"
                    className="border rounded-lg px-4 py-2 mb-4 "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
               
                <input
                    type="password"
                    placeholder="Password"
                    className="border rounded-lg px-4 py-2 mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                {error && <p className="text-red-500">{error}</p>}
               
                <button
                    className="border-1 rounded-lg text-green-500 p-2"
                    onClick={handleLogin}
                >
                    Login
                </button>
                <div>
                    <p className="text-gray-500 pb-8">Don't have an account?<Link to='/Register' className=" text-green-600 pl-2 underline hover:text-gray-500">Sign Up</Link></p>
                </div>
           </div>
            
        </div>
    );
}

export default LoginPage;
