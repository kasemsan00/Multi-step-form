import YourInfo from "@/components/form/YourInfo";
import SelectPlan from "@/components/form/SelectPlan";
import AddOns from "@/components/form/AddOns";
import Summary from "@/components/form/Summary";
import ThankYou from "@/components/form/ThankYou";
import { useState } from "react";

interface Props {
  step: number;
  setStep: (arg0: number) => void;
}

export default function FormInputSection({ step, setStep }: Props) {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    planName: "",
    planTime: "monthly",
    planPrice: "",
  });
  const HandleNextStep = () => {
    setStep(step + 1);
  };
  const HandleGoBack = () => {
    setStep(step - 1);
  };
  return (
    <div className="form-input-section">
      <YourInfo show={step === 1} />
      <SelectPlan show={step === 2} />
      <AddOns show={step === 3} />
      <Summary show={step === 4} />
      <ThankYou show={step === 5} />
      <div className="form-input-footer">
        {step !== 1 && step !== 5 ? (
          <button onClick={HandleGoBack} className="go-back-button">
            Go Back
          </button>
        ) : null}
        {step !== 5 ? (
          <button onClick={HandleNextStep} className="next-step-button">
            Next Step
          </button>
        ) : null}
      </div>
    </div>
  );
}
