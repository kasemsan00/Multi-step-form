export default function PersonalInfo() {
  return (
    <div>
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number</p>
      <div>
        <label>Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Email Address</label>
        <input type="email" />
      </div>
      <div>
        <label>Phone Number</label>
        <input type="number" />
      </div>
    </div>
  );
}
