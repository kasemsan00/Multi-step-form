import Step from "@/components/Step";

export default function FormStep() {
  return (
    <div className="form-step">
      <Step number={"1"} stepTitle={"STEP 1"} stepInfo={"YOUR INFO"} />
      <Step number={"2"} stepTitle={"STEP 2"} stepInfo={"SELECT PLAN"} />
      <Step number={"3"} stepTitle={"STEP 3"} stepInfo={"ADD-ONS"} />
      <Step number={"$"} stepTitle={"STEP 4"} stepInfo={"SUMMARY"} />
    </div>
  );
}
