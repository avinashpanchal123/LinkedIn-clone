import React, {useState} from 'react'
import "./Navbar.css"
import AuthNav from "./AuthNav"
import UnAuthNav from './UnAuthNav';
import NavModal from './NavModal';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';


function Navbar() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <nav className="nav_container">
        <div className="density_icon_div">
          <DensityMediumIcon
          onClick = {handleOpen}
           className="density_icon" />
        </div>
        <div className="udemy_logo_div">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt=""
          />
        </div>
        <div className="category_dropdown_div">
          <span className="drop_down_btns">Categories</span>
        </div>
        <div className="search_input_div">
          <input
            className="search_input"
            type="text"
            placeholder="Search for anything"
          />
        </div>
        <div className="category_dropdown_div">
          <span className="drop_down_btns">Udemy Business</span>
        </div>
        <div className="category_dropdown_div">
          <span className="drop_down_btns">Teach on Udemy</span>
        </div>
        {/* <AuthNav/> */}
        <UnAuthNav />
      </nav>
     {
       open &&
       <NavModal handleClose ={handleClose} open = {open}/>
     }
    </>
  );
}

export default Navbar