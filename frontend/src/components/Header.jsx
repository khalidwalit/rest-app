import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {logout, reset} from '../features/auth/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
  return (
    <header className='header'>
        <ul>
          <li>
            <div className='logo'>
                  <Link to='/'>GoalSetter</Link>
              </div>
          </li>
          <li>
            <div className='logo'>
                  <Link to=''>Uncle Romu</Link>
              </div>
          </li>
        </ul>
        <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header