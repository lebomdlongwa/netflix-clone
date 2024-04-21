import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            className="profile__avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel4c26sEwdj81loUzjfgikPTZXdlfHh3MnJAcKP2vkA&s"
            alt=""
          />
          <div className="profileScreen__details">
            <h4 className="userEmail">{user.email}</h4>
            <h3 className="current__plan">Plans (Current Plan: premium)</h3>
            <p className="renewal__date text__whitish">
              Renewal date: 04/03/2021
            </p>
            <div className="plan__selection text__whitish">
              <div className="netflix__package">
                <div className="package__details">
                  <h4>Netflix Standard</h4>
                  <h5>1080p</h5>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="netflix__package">
                <div className="package__details ">
                  <h4>Netflix Basic</h4>
                  <h5>480p</h5>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="netflix__package">
                <div className="package__details">
                  <h4>Netflix Premium</h4>
                  <h5>4K+HDR</h5>
                </div>
                <button className="current__package">Current Package</button>
              </div>
            </div>
            <div className="profileScreen__signOut">
              <button onClick={() => auth.signOut()}>Sign out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
