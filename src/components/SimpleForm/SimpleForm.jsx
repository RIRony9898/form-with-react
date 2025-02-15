const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" />
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
