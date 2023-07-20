import React from 'react';
import "./topbar.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import profile from "../../assets/Profile Pic.jpg";

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <div className='logo'>
                    <span className='logo'>Me Admin</span>
                </div>
            </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
                    <NotificationsNoneIcon />
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <LanguageIcon />
                </div>
                <div className='topbarIconContainer'>
                    <SettingsIcon />
                </div>
                <img src={profile} alt="profile-pic" className='topAvatar' />
            </div>
        </div>
    </div>
  )
}
