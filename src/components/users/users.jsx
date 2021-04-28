import Paginator from '../common/paginator/paginator';
import User from './user';

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {

  return <div>
    <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
    <div>
      {
        users.map(u => <User followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
          user={u}
          key={u.id} />)
      }
    </div>
  </div>;
}

export default Users;