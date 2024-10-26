import React from 'react';
import './UserFollow.css';

const UserFollow = ({ username, name, pictureUrl }) => {
    return (
        <div className="user-follow-card">
            <img src={pictureUrl} alt={`${username}'s profile`} className="profile-picture" />
            <div className="user-info">
                <span className="username">{username}</span>
                <span className="name">{name}</span>
            </div>
            <button className="follow-button">Seguir</button>
        </div>
    );
};

export default UserFollow;