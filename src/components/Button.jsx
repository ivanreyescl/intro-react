import { Link } from 'react-router-dom';

const Button = ({ label, bgColor, textColor, icon }) => {
    return (
        <div className="button">
            <Link to="/cart">
                <button className={`btn ${bgColor ? `btn-${bgColor}` : ''} ${textColor ? `text-${textColor}` : ''}`}>
                    {label}
                    <i className={`fa ${icon ? `fa-${icon}` : ''}`}></i>   
                </button>
            </Link>
        </div>
    );
}

export default Button;