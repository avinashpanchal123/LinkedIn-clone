import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar } from '@mui/material';

const AuthNav = ()=> {
  return (
   <>
      <div className="category_dropdown_div">
        <span className="drop_down_btns">
         My Learning
        </span>
      </div>
      <div className="authnav_icon_div">
      <FavoriteBorderOutlinedIcon/>
      </div>
      <div className="authnav_icon_div">
      <ShoppingCartOutlinedIcon/>
      </div>
      <div className="authnav_icon_div right_margin">
      <NotificationsNoneOutlinedIcon/>
      </div>
      <div className='user_avatar'>
       A
      </div>
   </>
  )
}

export default AuthNav