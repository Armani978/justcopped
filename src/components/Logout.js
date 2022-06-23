import React, {useState}  from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';



const Logout = () => {
    const { user } = useState('')
    const {email, setEmail} = useState("");
    const {password} = useState("");
    const { logout } = useAuthContext();
    let navigate = useNavigate();
    const handleLogout = async (e) => {
        e.preventDefault();
        try  {

        await logout( email, password);
        navigate("/login");
        }
        catch(err){
            console.log(err.message);
        }
    }
    return (
        Logout(user)
    )
  
}
export default Logout;