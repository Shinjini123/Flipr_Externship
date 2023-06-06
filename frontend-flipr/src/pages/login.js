import React,{useState} from 'react';
 function login() {
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isAdminButtonVisible, setIsAdminButtonVisible] = useState(false);
  const [isEmployeeButtonVisible, setIsEmployeeButtonVisible] = useState(false);

  const handleLoginClick = () => {
    setIsLoginClicked(true);
    setIsAdminButtonVisible(true);
    setIsEmployeeButtonVisible(true);
  };
  return (
    <div className=''>
      <form>

      <label htmlFor="username">Username</label>
            <input
              name="username"
              type="text"
              placeholder="Enter Username"
            />
      <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
            />
            <button onClick={handleLoginClick}>Log in</button>
            </form>
            {isLoginClicked && (
        <div>
          {isAdminButtonVisible && <button>Admin</button>}
          {isEmployeeButtonVisible && <button>Employee</button>}
        </div>
      )}
    
    </div>
  )
}
export default login;
