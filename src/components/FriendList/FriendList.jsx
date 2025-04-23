import React from 'react';
import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem.jsx';

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={styles.list}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li key={id} className={styles.item}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FriendList;
