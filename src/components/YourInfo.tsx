interface Props {
  show: boolean;
}

export default function YourInfo({ show }: Props) {
  return (
    <div className="form-card" style={{ display: show ? undefined : "none" }}>
      <div className="form-title">Personal Info</div>
      <p className="form-description">
        Please provide your name, email address, and phone number
      </p>
      <div className="form-input-field">
        <div>
          <label>Name</label>
          <label className="input-warning">This field is required</label>
        </div>
        <input type="text" placeholder="e.g. Stephen King" />
      </div>
      <div className="form-input-field">
        <div>
          <label>Email Address</label>
          <label className="input-warning">This field is required</label>
        </div>
        <input type="email" placeholder="e.g stephenking@lorem.com" />
      </div>
      <div className="form-input-field">
        <div>
          <label>Phone Number</label>
          <label className="input-warning">This field is required</label>
        </div>
        <input type="number" placeholder="e.g +1 234 567 890" />
      </div>
    </div>
  );
}
