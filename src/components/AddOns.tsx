interface Props {
  show: boolean;
}

export default function AddOns({ show }: Props) {
  return (
    <div className="form-card" style={{ display: show ? undefined : "none" }}>
      <div className="form-title">Pick add-ons</div>
      <p className="form-description">
        Add-ons help enhance your gaming experience
      </p>
      <form className="form-addons">
        <div className="addons-card">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <div className="addons-detail">
            <label className="addons-title">Online service</label>
            <label className="addons-description" htmlFor="vehicle1">
              Access to multiplayer games
            </label>
          </div>
          <div className="addons-price">+$1/mo</div>
        </div>
        <div className="addons-card">
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <div className="addons-detail">
            <label className="addons-title">Larger storage</label>
            <label className="addons-description">
              Extra 1TH of cloud save
            </label>
          </div>
          <div className="addons-price">+$2/mo</div>
        </div>
        <div className="addons-card">
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <div className="addons-detail">
            <label className="addons-title">Customizable Profile</label>
            <label className="addons-description">
              Custom theme on your profile
            </label>
          </div>
          <div className="addons-price">+$2/mo</div>
        </div>
      </form>
    </div>
  );
}
