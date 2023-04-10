import YourInfo from "@/components/YourInfo";
import SelectPlan from "@/components/SelectPlan";
import AddOns from "@/components/AddOns";
import Summary from "@/components/Summary";
import ThankYou from "@/components/ThankYou";
import { useState } from "react";

export default function FormInputSection() {
  const [step, setStep] = useState<number>(0);
  return (
    <div className="form-input-section">
      <YourInfo show={step === 1} />
      <SelectPlan show={step === 2} />
      <AddOns show={step === 3} />
      <Summary show={step === 4} />
      <ThankYou show={step === 5} />
      <div className="form-input-footer">
        <button className="go-back-button">Go Back</button>
        <button className="next-step-button">Next Step</button>
      </div>
    </div>
  );
}
