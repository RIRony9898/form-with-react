import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };
  const handleOnChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value);
    // console.log(email)
  };
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
        <input type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <p>Note: All fields are required.</p>
      </form>
    </div>
  );
};

export default StatefulForm;
