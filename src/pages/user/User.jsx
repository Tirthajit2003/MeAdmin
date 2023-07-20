import "./user.css";
import profile from "../../assets/Profile Pic.jpg";
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@mui/icons-material';
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser" >
                <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                        <img src={profile} alt="" className="userShowImg"></img>
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Tirthajit Boral</span>
                            <span className="userShowUserTitle">Full Stack Developer</span>
                        </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon" />
                        <span className="userShowInfoTitle">mirchi2003</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon" />
                        <span className="userShowInfoTitle">02.03.2003</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon" />
                        <span className="userShowInfoTitle">+91 704470****</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon" />
                        <span className="userShowInfoTitle">tirthajitboral2003@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon" />
                        <span className="userShowInfoTitle">Kolkata | India</span>
                    </div>
                </div>
            </div>
                
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input
                        type="text"
                        placeholder="mirchi2003"
                        className="userUpdateInput"
                        />
                    </div>
                    <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input
                        type="text"
                        placeholder="Tirthajit Boral"
                        className="userUpdateInput"
                        />
                    </div>
                    <div className="userUpdateItem">
                        <label>Email</label>
                        <input
                        type="text"
                        placeholder="tirthajitboral2003@gmail.com"
                        className="userUpdateInput"
                        />
                    </div>
                    <div className="userUpdateItem">
                        <label>Phone</label>
                        <input
                        type="text"
                        placeholder="+91 70447 07763"
                        className="userUpdateInput"
                        />
                    </div>
                    <div className="userUpdateItem">
                        <label>Address</label>
                        <input
                        type="text"
                        placeholder="Kolkata | India"
                        className="userUpdateInput"
                        />
                    </div>
                    </div>
                    <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img
                        className="userUpdateImg"
                        src={profile}
                        alt=""
                        />
                        <label htmlFor="file">
                        <Publish className="userUpdateIcon" />
                        </label>
                        <input type="file" id="file" style={{ display: "none" }} />
                    </div>
                    <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
