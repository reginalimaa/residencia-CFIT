import Sidebar from '../Sidebar/Sidebar'
import { ShoppingCartOutlined } from '@ant-design/icons';
import './styles.css'
import Search from '../Search/Search';

export default function Header({post = ''}){

  return(
    <header>
    
      <div className="div-promotions">
        {post}
      </div>

      <div className="meioca">
        <Sidebar></Sidebar>
        <p className="name">NEW ESTÉTICA</p>
        <ShoppingCartOutlined style={{ fontSize: '28px', color: 'black' }}/>
      </div>
      <Search></Search>
    </header>

  )

}