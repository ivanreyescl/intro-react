import { useState } from 'react';

const Register = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const returnAlert = (message) => {
        alert(message)
        return
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, confirmPassword } = user;

        if (password.length < 6) {
            return returnAlert('La contraseña debe tener al menos 6 caracteres');
        } else if (password !== confirmPassword) {
            return returnAlert('Las contraseñas no coinciden')
        } else if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
            return returnAlert('Por favor rellena todos los campos')
        } else {
            setTimeout(() => {
                setUser({ email: '', password: '', confirmPassword: '' })
            }, 2000)
            return returnAlert('Usuario registrado');
        }
    }

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card col-md-6">
                <div className="card-body">
                    <h2 className="card-title text-center">Registrarse</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                placeholder="Ingrese correo"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={user.password}
                                placeholder="Ingrese contraseña"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirme contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirme contraseña"
                                value={user.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={!user.email.trim() || !user.password.trim() || !user.confirmPassword.trim()}
                        >
                            Registrarse
                        </button>
                        <hr></hr>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;