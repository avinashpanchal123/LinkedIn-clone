import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link, useNavigate} from "react-router-dom"

const  UnAuthNav = ()=> {
  return (
    <>
     <div className="unauth_icon_div">
      <ShoppingCartOutlinedIcon/>
      </div>
      <div className="login_btn_div left_marin">
        <button className='btn unauth_btns'>Log in</button>
      </div>
      <div className="sign_up_div">
        <button className='btn unauth_btns'>Sign up</button>
      </div>
    </>
  )
}

export default UnAuthNav