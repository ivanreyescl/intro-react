const Button = ({ label, bgColor, textColor, icon }) => {
    return (
        <>
            <div className="button">
                <button className={`btn ${bgColor ? `btn-${bgColor}` : ''} ${textColor ? `text-${textColor}` : ''}`}>
                    {label}
                    <i className={`fa ${icon ? `fa-${icon}` : ''}`}></i>   
                </button>
            </div>
        </>
    )
}

export default Button