import fire from '../fire';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("logout...");
        fire
            .signOut()
            .catch(error => {
                console.log(error)
            })

        sessionStorage.removeItem('AuthToken');
        navigate('/login')

    }


    return <>
        <nav className="fixed-top navbar" >
            <h2>Welcome</h2>

            <Link to="/">Home</Link>
            <Link to="/predict">Predict</Link>
            <button
                onClick={handleLogout}
            >
                Logout</button>
        </nav>
    </>
}

export default Navbar;