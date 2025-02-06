import { useState } from "react";

const SimpleForm = () => {
    const [name, setName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  const handleOnChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input onChange={handleOnChange} type="text" name="name" />
        <br />
        <label>Email:</label>
        <input type="email" name="email" />
        <br />
        <label>Phone Number:</label>
        <input type="tel" name="phone" />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <p>Note: All fields are required.</p>
      </form>
    </div>
  );
};

export default SimpleForm;
