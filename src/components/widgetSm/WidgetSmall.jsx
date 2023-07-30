import { Visibility } from "@mui/icons-material";
import "./widgetsmall.css";
import { useEffect, useState } from "react";
import axios from "axios";


export default function WidgetSmall() {
  const [newUsers,setNewUsers]=useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
        <h3 className="widgetSmTitle">New Join Members</h3>
        <ul className="widgetSmList">
        {newUsers.map((user) => (
            <li className="widgetSmListItem" key={user._id}>
              <img
                src={
                  user.profilePic ||
                  "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                }
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.username}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
        ))}
        </ul>
    </div>
  )
}
