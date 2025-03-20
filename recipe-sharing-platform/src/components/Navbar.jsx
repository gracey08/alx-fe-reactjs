import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-white font-bold'
              : 'text-gray-300 hover:text-white'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/add-recipe"
          className={({ isActive }) =>
            isActive
              ? 'text-white font-bold'
              : 'text-gray-300 hover:text-white'
          }
        >
          Add Recipe
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;