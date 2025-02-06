import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(null);
  const [error, setError] = useState('')
  const [password, setPassword] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6){
        setError('Password must be at least 6 characters long.')
    }else{
        console.log(name, email, password);
        setError('')
    }
    
  };
  const handleOnChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value);
    // console.log(email)
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input onChange={handleOnChange} type="text" name="name" />
        <br />
        <label>Email:</label>
        <input onChange={handleEmailChange} type="email" name="email" />
        <br />
        <label>Password:</label>
        <input onChange={handlePasswordChange} type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <p>Note: All fields are required.</p>
        {
            error && <p style={{color:'red'}}>{error}</p>
        }
      </form>
    </div>
  );
};

export default StatefulForm;
