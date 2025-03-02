import { useState } from 'react'

const Register = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const returnAlert = (message) => {
        alert(message)
        return
    };

    const handleLogin = (e) => {
        e.preventDefault()
        const { email, password } = user

        if (password.length < 6) {
            return returnAlert('La contraseña debe tener al menos 6 caracteres')
        } else if (!email.trim() || !password.trim()) {
            return returnAlert('Por favor rellena todos los campos')
        } else {
            setTimeout(() => {
                setUser({ email: '', password: ''})
            }, 2000);
            return returnAlert(`Se ha iniciado sesión con el usuario ${email.split('@')[0].trim()}`)
        }
    };

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card col-md-6">
                <div className="card-body">
                    <h2 className="card-title text-center">Iniciar sesión</h2>
                    <form onSubmit={handleLogin}>
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
                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={!user.email.trim() || !user.password.trim()}
                        >
                            Iniciar sesión
                        </button>
                        <hr></hr>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;