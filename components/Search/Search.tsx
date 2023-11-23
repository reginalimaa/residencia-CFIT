import { SearchOutlined } from '@ant-design/icons';
import './styles.css'

export default function Search(){

  return(
    <div className='div-search'>
      <input 
        type="search" 
        placeholder='O que você procura?'
      />
      <div className='div-search-icon'>
        <SearchOutlined style={{ fontSize: '24px', color: 'gray' }}/>
      </div>
    </div>
  )

 }