import "./Yoursessions.scss"
import UsersessionList from './UsersessionList'

export default function Yoursessions(props) {

  return (
    <div id="sessions-wrapper">
      <div className="yourSessions">
        <div className="sessionList">
        <h1>Your Sessions:</h1>
        <br></br>
        <UsersessionList />
        <br></br>
        </div>
      </div>
    </div>
  );

}
