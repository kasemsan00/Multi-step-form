export default function AddOns() {
  return (
    <div className="form-card">
      <div className="form-title">Pick add-ons</div>
      <p className="form-description">
        Add-ons help enhance your gaming experience
      </p>
      <form className="form-addons">
        <div className="card">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <div>
            <label>Online service</label>
            <label htmlFor="vehicle1">Access to multiplayer games</label>
          </div>
          <div>+$1/mo</div>
        </div>
        <div>
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <div>
            <label>Larger storage</label>
            <label>Extra 1TH of cloud save</label>
          </div>
          <div>+$2/mo</div>
        </div>
        <div>
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <div>
            <label>Customizable Profile</label>
            <label>Custom theme on your profile</label>
          </div>
          <div>+$2/mo</div>
        </div>
      </form>
    </div>
  );
}
