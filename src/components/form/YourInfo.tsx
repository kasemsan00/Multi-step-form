import { IFormInput, IValidField } from "@/components/interface/Form";

interface Props {
  show: boolean;
  formInput: IFormInput;
  validField: IValidField;
  changeName: (arg0: any) => void;
  changeEmail: (arg0: any) => void;
  changePhoneNumber: (arg0: any) => void;
}

export default function YourInfo({
  show,
  formInput,
  validField,
  changeName,
  changeEmail,
  changePhoneNumber,
}: Props) {
  return (
    <div className="form-card" style={{ display: show ? undefined : "none" }}>
      <div className="form-title">Personal Info</div>
      <p className="form-description">
        Please provide your name, email address, and phone number
      </p>
      <div className="form-input-field">
        <div>
          <label>Name</label>
          <label
            className={`warning-label ${validField.isNameValid ? "hide" : ""}`}
          >
            This field is required
          </label>
        </div>
        <input
          className={validField.isNameValid ? undefined : "warning-input"}
          type="text"
          placeholder="e.g. Stephen King"
          value={formInput.name}
          onChange={changeName}
        />
      </div>
      <div className="form-input-field">
        <div>
          <label>Email Address</label>
          <label
            className={`warning-label ${validField.isEmailValid ? "hide" : ""}`}
          >
            This field is required
          </label>
        </div>
        <input
          className={validField.isEmailValid ? undefined : "warning-input"}
          type="email"
          placeholder="e.g stephenking@lorem.com"
          value={formInput.email}
          onChange={changeEmail}
        />
      </div>
      <div className="form-input-field">
        <div>
          <label>Phone Number</label>
          <label
            className={`warning-label ${
              validField.isPhoneNumberValid ? "hide" : ""
            }`}
          >
            This field is required
          </label>
        </div>
        <input
          className={
            validField.isPhoneNumberValid ? undefined : "warning-input"
          }
          type="number"
          placeholder="e.g +1 234 567 890"
          value={formInput.phoneNumber}
          onChange={changePhoneNumber}
        />
      </div>
    </div>
  );
}
