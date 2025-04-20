import React, {useState} from 'react';
import AuthLayout from '/src/components/layouts/AuthLayout.jsx';
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/inputs/input";
import ProfilePhotoSelelect from '../../components/inputs/ProfilePhotoSelect';

// import { validateEmail } from "../../utils/validation";
import { validateEmail } from "../../utils/helper";

// ... other imports

const SignUp = () => {
    const [profilePic, setProfilePic] = useState("");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate= useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();;

        let profileImageUrl="";
        if (!fullname) {
            setError("Please enter your full name.");
            return;
        }
        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }  
        
        if (!password) {    
            setError("Please enter the password");
            return;
        }
        setError("");


    }

  return (
    <AuthLayout>
        <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
            <h3 className='text-xl font-semibold text-black'> Create an Account</h3>
            <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join us today by entering your details below.</p>
            <form onSubmit={handleSignUp}>
                <ProfilePhotoSelelect image={profilePic} setImage={setProfilePic} />    
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    
                    <Input 
                        value={fullname} 
                        onChange={({target}) => setFullname(target.value)} 
                        type="text" 
                        placeholder="Nishi Soni" 
                        label="Full Name" 
                    />
                    <Input 
                        value={email} 
                        onChange={({target}) => setEmail(target.value)} 
                        type="text" 
                        placeholder="nishi@example.com" 
                        label="Email Address" 
                    />
                    <div className='col-span-2'>
                    <Input 
                        value={password} 
                        onChange={({target}) => setPassword(target.value)} 
                        type="password" 
                        placeholder="Min 8 Characters" 
                        label="Password" 
                    />
                    </div>
                </div>
                {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
                                    <button type="submit" className="btn-primary">SIGN UP</button>
                               
                
                                <p className="text-[13px] text-slate-800 mt-3">
                                    Already have an account{" "}
                                    <Link className="font-medium text-primary underline" to="/signUp">Sign Up</Link>
                                    Login
                                </p>
                
                </form>
        </div>

      
    </AuthLayout>
  )
};

export default SignUp; // <-- Add this line