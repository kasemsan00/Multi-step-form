import YourInfo from "@/components/YourInfo";
import SelectPlan from "@/components/SelectPlan";
import AddOns from "@/components/AddOns";
import Summary from "@/components/Summary";
import ThankYou from "@/components/ThankYou";

interface Props {
  step: number;
  setStep: (arg0: number) => void;
}

export default function FormInputSection({ step, setStep }: Props) {
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
