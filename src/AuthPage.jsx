import axios from "axios";
const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("https://react-chatapp-server-in30.onrender.com/authenticate", {
        username: value,
      })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("error"));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome!</div>

        <div className="form-subtitle">
          Set a username to get started, if username was set previously please
          type previous username to log in
        </div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
