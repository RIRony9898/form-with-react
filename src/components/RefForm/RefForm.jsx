import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
  nameRef.current.focus();
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input ref={nameRef} type="text" name="name" />
        <br />
        <label>Email:</label>
        <input ref={emailRef} type="email" name="email" />
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

export default RefForm;
