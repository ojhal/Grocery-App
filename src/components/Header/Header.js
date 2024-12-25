import React from 'react'
import "./Header.css"
import Logo from '../../assets/images/logo.jpeg'
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/Select';
const Header = () => {
  return (
    <header>
      <div className='container-fluid'>
        <div className='row'>
        <div className='col-sm-2'>
          <img  src={Logo}/>
        
        </div>
        <div className='col-sm-5'>
          <div className='headerSearch d-flex align-items-center'>
            <Select/>
            <div className='search'>
              <input type='text' placeholder='search for items...'/>
              {/* <SearchIcon className='searchIcon cursor'/> */}
            </div>
          </div>
          </div>

        </div>
        
        
      </div>
    </header>
  )
}

export default Header
