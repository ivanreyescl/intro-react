import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="text-center">
                <h2>Perfil de Usuario</h2>
                <p>Email: usuario@example.com</p>
                <Link to="/" className="btn btn-danger">Cerrar Sesión</Link>
            </div>
        </div>
    );
};

export default Profile;
