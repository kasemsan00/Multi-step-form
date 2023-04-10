import YourInfo from "@/components/YourInfo";
import SelectPlan from "@/components/SelectPlan";
import AddOns from "@/components/AddOns";

export default function FormInputSection() {
  return (
    <div className="form-input-section">
      {/*<YourInfo />*/}
      {/*<SelectPlan />*/}
      <AddOns />
      <div className="form-input-footer">
        <button className="go-back-button">Go Back</button>
        <button className="next-step-button">Next Step</button>
      </div>
    </div>
  );
}
