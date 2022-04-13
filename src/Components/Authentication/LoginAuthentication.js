import React from 'react';


const LoginAuthentication = props => {

  const [userList, setUserList] = useState([
    { id: 'u1',
      fName: 'Antonio',
      lName: 'Arocha'
    },
    { id: 'u2',
      fName: 'Ilayda',
      lName: 'Kaya'
    }
  ]);



  return(
    <div>
      <h2> Yay! User Found </h2>
    </div>
  );
}

export default LoginAuthentication;
