import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./NavModal.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const NavModal = ({handleClose, open}) => {
  return (
    <>
     <div className="modal_div">
     <Modal
        className="basic_modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal_box">
          <span className="modal_x" onClick={handleClose}>
            x
          </span>
          <Typography>
            <ul className="nav_modal_ul modal_login_sign">
              <li className="bottom_margin">Log in</li>
              <li>Sign up</li>
            </ul>
            <hr />
            <div className="most_popular_div">
              Most popular
            </div>
            <ul className="nav_modal_ul">
              <li className="nav_modal_li bottom_margin">
               <div>  Web Developement</div>
                 <div> <ArrowForwardIosIcon sx={{ fontSize: 12.5 }}  className="forward_arrow"/></div>
              </li>
              <li className="nav_modal_li bottom_margin">
                <div> Mobile Developement</div>
                <div> <ArrowForwardIosIcon sx={{ fontSize: 12.5 }}  className="forward_arrow"/></div>
              </li>
              <li className="nav_modal_li bottom_margin">
                <div> Game Developement</div>
                <div> <ArrowForwardIosIcon sx={{ fontSize: 12.5 }}  className="forward_arrow"/></div>
              </li>
              <li className="nav_modal_li bottom_margin">
                <div>Entrepreneurship</div>
                <div className="forward_arrow_div"> <ArrowForwardIosIcon sx={{ fontSize: 12.5 }}  className="forward_arrow"/></div>
              </li>
              <li className="nav_modal_li bottom_margin">
                <div>Business Analytics & Intelligence</div>
                <div> <ArrowForwardIosIcon sx={{ fontSize: 12.5 }}  className="forward_arrow"/></div>
              </li>
              <li className="nav_modal_li bottom_margin">
                 <div>Digital Marketing</div>
                <div> <ArrowForwardIosIcon sx={{ fontSize: 12.5 }}  className="forward_arrow"/></div>
              </li>
              <li className="nav_modal_li bottom_margin">
                <div> Graphic Design & Illustration</div>
                <div> <ArrowForwardIosIcon sx={{ fontSize: 12.5 }}  className="forward_arrow"/></div>
              </li>
              <li className="nav_modal_li bottom_margin">
                 <div>IT Certifications</div>
                <div> <ArrowForwardIosIcon sx={{ fontSize: 12.5 }}  className="forward_arrow"/></div>
              </li>
              <li className="nav_modal_li bottom_margin">
                <div> Personal Transformation</div>
                <div> <ArrowForwardIosIcon sx={{ fontSize: 12.5 }}  className="forward_arrow"/></div>
              </li>
              <li className="nav_modal_li bottom_margin">
                <div> All Categories</div>
                <div> <ArrowForwardIosIcon sx={{ fontSize: 12.5 }}  className="forward_arrow"/></div>
              </li>
            </ul>
       
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
     </div>
    </>
  );
};

export default NavModal;
