import Image from "next/image";

export default function SelectPlan() {
  return (
    <div className="form-card">
      <div className="form-title">Select your plan</div>
      <p className="form-description">
        You have the option of monthly or yearly billing
      </p>
      <div className="plan-option">
        <ul>
          <li>
            <div>
              <Image
                src={require("@/assets/images/icon-arcade.svg")}
                width={40}
                height={40}
                alt="Aracade"
              />
            </div>
            <div>
              <div className="plan-title">Arcade</div>
              <div className="plan-price">$9/mo</div>
            </div>
          </li>
          <li>
            <div>
              <Image
                src={require("@/assets/images/icon-advanced.svg")}
                width={40}
                height={40}
                alt="Advanced"
              />
            </div>
            <div>
              <div className="plan-title">Advanced</div>
              <div className="plan-price">$12/mo</div>
            </div>
          </li>
          <li>
            <div>
              <Image
                src={require("@/assets/images/icon-pro.svg")}
                width={40}
                height={40}
                alt="Pro"
              />
            </div>
            <div>
              <div className="plan-title">Pro</div>
              <div className="plan-price">$15/mo</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="switch-monthly-yearly">
        <span>Monthly</span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span>Yearly</span>
      </div>
    </div>
  );
}
