import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Post from './components/Post';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/BlogPost';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
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
                        <li>
                            <button onClick={() => setIsAuthenticated(false)}>Log Out</button>
                        </li>
                    </ul>
                </nav>
                <hr />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/profile/*"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/post/:postId" element={<Post />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
                    <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;