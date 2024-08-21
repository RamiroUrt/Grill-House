import { Link, Outlet } from 'react-router-dom';
import '../assets/css/Button.css'

// eslint-disable-next-line react/prop-types
const Button = ({text, link, onClick}) => {
  return (
    <>
        <div className="button-bg">
        <button onClick={() => onClick(text)} className="button">
            {link ? <Link to={link}>{text}</Link> : text}
            </button>
        </div>
        <Outlet />
    </>
  )
}

export default Button