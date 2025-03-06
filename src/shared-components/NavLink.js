import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, children, onClick }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
  
    return (
      	<Link
            to={to}
            className={`block py-2 px-3 rounded ${
            isActive
                ? 'text-purple-700 dark:text-purple-500'
                : 'text-gray-900 dark:text-white'
            } cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
            onClick={onClick}
			>
			{children}
      	</Link>
    );
  };

export default NavLink;