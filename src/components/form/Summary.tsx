import { IFormInput } from "@/components/interface/Form";

interface Props {
  show: boolean;
  formInput: IFormInput;
}

export default function Summary({ show, formInput }: Props) {
  return (
    <div className="form-card" style={{ display: show ? undefined : "none" }}>
      <div className="form-title">Finishing up</div>
      <p className="form-description">
        Double-check everything looks OK before confirming
      </p>
      <div className="finish-detail">
        <div className="finish-items">
          <div>
            <label>
              {formInput.planName} ({!formInput.planYear ? "Monthly" : "Year"})
            </label>
            <span className="summary-change">Change</span>
          </div>
          <div>$9/mo</div>
        </div>
        <hr />
        <div className="addons-items">
          <div>Online service</div>
          <div>+1$/mo</div>
        </div>
        <div className="addons-items">
          <div>Larger storage</div>
          <div>+$2/mo</div>
        </div>
      </div>
      <div className="total-price">
        <div>Total (per month)</div>
        <div>+$12/mo</div>
      </div>
    </div>
  );
}
