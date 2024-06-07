import { useState } from "react";
import { useAuth } from "../../../AuthProvider";
import { useNavigate } from "react-router-dom";

const NavigationMenu = () => {
    const auth = useAuth();
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const navigate = useNavigate();

    const handleLoginForm = () => {
        if (localStorage.getItem('Authorization') !== null) {
            navigate('/dashboard/', { replace: true });
        }
        document.getElementById('login-popup').style.display = 'flex';
    }

    const closePopup = (e) => {
        document.getElementById('login-popup').style.display = 'none';
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await auth.loginAction({
            username: username,
            password: password,
        });

        if (auth.token !== null) {
            closePopup();
        }
    }

    // auth.validateToken();

    return (
        (!auth.token) ? (
            <ul className="navigation-menu">
                <li className="menu-item">
                    <button className="btn md ghost dark" onClick={handleLoginForm}>Login</button>
                </li>
                <div id="login-popup">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <button type="reset" className="close btn text gray" onClick={closePopup}>
                            <img src="/images/icons/icon.close.svg" alt="" />
                        </button>
                        <img id="logo" src="/logomini.svg" alt="" />
                        <span>
                            <h4>Welcome back</h4>
                            <p>We was waiting for you.</p>
                        </span>
                        <input className="username" name="username" placeholder="Phone number" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input className="password" type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit" className="btn cta md">Login</button>
                    </form>
                </div>
                <li className="menu-item">
                    <a href='/signup/'>
                        <button className="btn md cta">Sign up</button>
                    </a>
                </li>
            </ul>
        ) : (
            <ul className="navigation-menu">
                <li className="menu-item">
                    <a href="/cart/">
                        <button className="btn sm ghost gray dark">
                            <img src="/images/icons/icon.cart.svg" alt="" />
                        </button>
                    </a>
                </li>
                <li className="menu-item">
                    <a href='/dashboard/'>
                        <button className="btn md cta">Dashboard</button>
                    </a>
                </li>
            </ul>
        )
    )
}

export default NavigationMenu;