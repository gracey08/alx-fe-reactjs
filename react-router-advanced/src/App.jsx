import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import Home from './components/Home';
import Profile from './components/Profile';
import Post from './components/Post';
import BlogPost from './components/BlogPost';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div style={{ padding: '20px' }}>
                    <nav>
                        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/post/1">Post 1</Link></li>
                            <li><Link to="/post/2">Post 2</Link></li>
                            <li><Link to="/blog/1">Blog 1</Link></li>
                            <li><Link to="/blog/2">Blog 2</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </nav>
                    <hr />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                        <Route path="/post/:postId" element={<Post />} />
                        <Route path="/blog/:id" element={<BlogPost />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;