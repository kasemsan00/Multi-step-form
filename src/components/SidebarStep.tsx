import Step from "@/components/Step";

export default function SidebarStep() {
  return (
    <div className="form-step">
      <Step
        number={"1"}
        stepTitle={"STEP 1"}
        stepInfo={"YOUR INFO"}
        active={true}
      />
      <Step
        number={"2"}
        stepTitle={"STEP 2"}
        stepInfo={"SELECT PLAN"}
        active={false}
      />
      <Step
        number={"3"}
        stepTitle={"STEP 3"}
        stepInfo={"ADD-ONS"}
        active={false}
      />
      <Step
        number={"3"}
        stepTitle={"STEP 4"}
        stepInfo={"SUMMARY"}
        active={false}
      />
    </div>
  );
}
