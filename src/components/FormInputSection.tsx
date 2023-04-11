import YourInfo from "@/components/form/YourInfo";
import SelectPlan from "@/components/form/SelectPlan";
import AddOns from "@/components/form/AddOns";
import Summary from "@/components/form/Summary";
import ThankYou from "@/components/form/ThankYou";
import React, { useState } from "react";
import { IFormInput } from "@/components/interface/Form";

interface Props {
  step: number;
  setStep: (arg0: number) => void;
}

export default function FormInputSection({ step, setStep }: Props) {
  const [formInput, setFormInput] = useState<IFormInput>({
    name: "",
    email: "",
    phoneNumber: "",
    planName: "",
    planMonthly: 0,
    planYear: 0,
    planPrice: "",
  });

  const HandleChangeName = (event: any) => {
    setFormInput((state) => ({ ...state, name: event.target.value }));
  };
  const HandleChangeEmail = (event: any) => {
    setFormInput((state) => ({ ...state, email: event.target.value }));
  };
  const HandleChangePhoneNumber = (event: any) => {
    setFormInput((state) => ({ ...state, phoneNumber: event.target.value }));
  };

  return (
    <div className="form-input-section">
      <YourInfo
        show={step === 1}
        formInput={formInput}
        changeName={HandleChangeName}
        changeEmail={HandleChangeEmail}
        changePhoneNumber={HandleChangePhoneNumber}
      />
      <SelectPlan show={step === 2} setFormInput={setFormInput} />
      <AddOns show={step === 3} />
      <Summary show={step === 4} />
      <ThankYou show={step === 5} />
      <div className="form-input-footer">
        {step !== 1 && step !== 5 ? (
          <button
            onClick={() => {
              setStep(step - 1);
            }}
            className="go-back-button"
          >
            Go Back
          </button>
        ) : null}
        {step !== 5 ? (
          <button
            onClick={() => {
              setStep(step + 1);
            }}
            className="next-step-button"
          >
            Next Step
          </button>
        ) : null}
      </div>
    </div>
  );
}
