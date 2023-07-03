import Logo from '@/components/icons/Logo'
import s from './Header.module.scss'
import { DigitalCollectibles } from '@/components/icons/DigitalCollectibles'
import { Menu } from '@/components/icons/Menu'
import { Profile } from '@/components/icons/Profile'
const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <div>
          <Logo />
        </div>

        <div>
          <DigitalCollectibles />
        </div>
      </div>

      <div>
        <Menu />
      </div>

      <div>
        <Profile />
      </div>
    </div>
  )
}

export default Header
