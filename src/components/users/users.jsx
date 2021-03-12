import React from 'react';
import cf from './users.module.css';

let Users = (props) => {

  if (props.users.length === 0) {

  props.setUsers( [
    { id: 1, photoUrl: 'https://bit.ly/3rHkuPS', followed: false, fullName: 'Bill', status: 'Free', location: { city: 'Austin', country: 'USA' } },
    { id: 2, photoUrl: 'https://bit.ly/3rHkuPS', followed: false, fullName: 'Bill', status: 'Free', location: { city: 'Austin', country: 'USA' } },
    { id: 3, photoUrl: 'https://bit.ly/3rHkuPS', followed: true, fullName: 'Bill', status: 'Free', location: { city: 'Austin', country: 'USA' } },
    { id: 4, photoUrl: 'https://bit.ly/3rHkuPS', followed: true, fullName: 'Bill', status: 'Free', location: { city: 'Austin', country: 'USA' } },
    { id: 5, photoUrl: 'https://bit.ly/3rHkuPS', followed: false, fullName: 'Bill', status: 'Free', location: { city: 'Austin', country: 'USA' } }
  ]
  )
  }

  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photoUrl} alt="" className={cf.userAva} />
          </div>
          <div>
            {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>

          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)
    }
  </div>;
}

export default Users;