import { Routes, Route, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
    const { logout } = useAuth();

    return (
        <div>
            <h2>Profile Page</h2>
            <button onClick={logout}>Log Out</button>
            <nav>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
                    <li><Link to="details">Details</Link></li>
                    <li><Link to="settings">Settings</Link></li>
                </ul>
            </nav>
            <hr />
            <Routes>
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
                <Route index element={<p>Select a profile section</p>} />
            </Routes>
        </div>
    );
}

export default Profile;