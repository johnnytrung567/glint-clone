import classNames from 'classnames/bind'
import { FaBars } from 'react-icons/fa'
import styles from './Header.module.scss'
import logo from '../../../images/logo.png'

const cx = classNames.bind(styles)

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={logo} alt='Logo' />
            </div>
            <div className={cx('menu')}>
                <div className={cx('menu-text')}>menu</div>
                <div className={cx('menu-icon')}>
                    <FaBars />
                </div>
            </div>
        </header>
    )
}

export default Header
