import * as axios from 'axios';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/photo_small.jpg';
import cf from './users.module.css';

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div>
      {pages.map(p => {
        return <span className={props.currentPage === p && cf.selectedPage} onClick={() => { props.onPageChanged(p); }}>{p}</span>
      })}
    </div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + u.id}><img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" className={cf.userAva} /></NavLink>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "6c596676-f22a-4db2-9987-def9fe67b0be"
                  }
                })
                  .then(response => {
                    if (response.data.resultCode == 0) {
                      props.unfollow(u.id);
                    }
                  });
              }}>Unfollow</button>
              : <button onClick={() => {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "6c596676-f22a-4db2-9987-def9fe67b0be"
                  }
                })
                  .then(response => {
                    if (response.data.resultCode == 0) {
                      props.follow(u.id);
                    }
                  });
              }}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{'u.location.country'}</div>
            <div>{"u.location.city"}</div>
          </span>
        </span>
      </div>)
    }
  </div>;
}

export default Users;