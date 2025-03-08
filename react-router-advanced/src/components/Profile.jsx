import { Routes, Route, Link, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
    return (
        <div>
            <h2>Profile Page</h2>
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