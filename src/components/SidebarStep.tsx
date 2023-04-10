import Step from "@/components/Step";

interface Props {
  step: number;
}

export default function SidebarStep({ step }: Props) {
  return (
    <div className="form-step">
      <Step
        number={"1"}
        stepTitle={"STEP 1"}
        stepInfo={"YOUR INFO"}
        active={step === 1}
      />
      <Step
        number={"2"}
        stepTitle={"STEP 2"}
        stepInfo={"SELECT PLAN"}
        active={step === 2}
      />
      <Step
        number={"3"}
        stepTitle={"STEP 3"}
        stepInfo={"ADD-ONS"}
        active={step === 3}
      />
      <Step
        number={"4"}
        stepTitle={"STEP 4"}
        stepInfo={"SUMMARY"}
        active={step === 4}
      />
    </div>
  );
}
