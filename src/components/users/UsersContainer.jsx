import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from "./users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      //мы dispatch-им не actionCreator, а результат работы actionCreator-а
      dispatch(followAC(userID));
    },
    unfollow: (userID) => {
      dispatch(unfollowAC(userID));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);