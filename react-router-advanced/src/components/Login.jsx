import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate('/profile');
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
}

export default Login;