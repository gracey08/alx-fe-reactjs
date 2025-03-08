import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsAuthenticated(true);
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