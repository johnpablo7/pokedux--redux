
import { Menu } from '../Menu';
import './styles.css';

export const Layout = ({children}) => {
  return (
    <div>
      <Menu />
      <div className="Layout-content">{children}</div>
    </div>
  )
}
