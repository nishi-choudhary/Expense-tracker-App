import React, { useState } from "react";
import AuthLayout from '/src/components/layouts/AuthLayout.jsx';
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/inputs/input";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await fetch("http://localhost:5000/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem("token", data.token);
                navigate("/home");
            } else {
                setError(data.message || "Login failed. Please try again.");
            }
        } catch (error) {
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <AuthLayout>
            <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
                <p className="text-xs text-slate-700 mt-[5px] mb-6">
                    Please enter your details to log in
                </p>

                <form onSubmit={handleLogin}>
                    <Input 
                        value={email} 
                        onChange={({target}) => setEmail(target.value)} 
                        type="text" 
                        placeholder="nishi@example.com" 
                        label="Email Address" 
                    />
                    <Input 
                        value={password} 
                        onChange={({target}) => setPassword(target.value)} 
                        type="password" 
                        placeholder="Min 8 Characters" 
                        label="Password" 
                    />
                    {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
                    <button type="submit" className="btn-primary">LOGIN</button>
                </form>

                <p className="text-[13px] text-slate-800 mt-3">
                    Don't have an account?{" "}
                    <Link className="font-medium text-primary underline" to="/signUp">Sign Up</Link>
                </p>
            </div>
        </AuthLayout>
    );
};

export default Login;
