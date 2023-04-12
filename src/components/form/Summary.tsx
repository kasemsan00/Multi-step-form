import { IFormInput } from "@/components/interface/Form";
import { useEffect, useState } from "react";

interface Props {
  show: boolean;
  setStep: (arg0: number) => void;
  formInput: IFormInput;
}
const AddOnsItem = ({
  title,
  price,
  isYear,
}: {
  title: string;
  price: number;
  isYear: boolean;
}) => {
  return (
    <div className="addons-items">
      <div>{title}</div>
      <div>
        +{!isYear ? price : price * 10}/{isYear ? "mo" : "yr"}
      </div>
    </div>
  );
};

export default function Summary({ show, setStep, formInput }: Props) {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let multiple = 1;
    if (formInput.planYear) {
      multiple = 10;
    }
    setTotalPrice(
      formInput.planPrice * multiple +
        formInput.onlineServicesPrice * multiple +
        formInput.largerStoragePrice * multiple +
        formInput.customizableProfilePrice * multiple
    );
  }, [formInput, formInput.planYear]);

  const HandleChangePlan = () => {
    setStep(2);
  };

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
              {formInput.planName} ({!formInput.planYear ? "Monthly" : "Yearly"}
              )
            </label>
            <span onClick={HandleChangePlan} className="summary-change">
              Change
            </span>
          </div>
          {formInput.planMonthly ? (
            <div>${formInput.planPrice}/mo</div>
          ) : (
            <div>${formInput.planPrice * 10}/yr</div>
          )}
        </div>
        {formInput.onlineServices ||
        formInput.largerStorage ||
        formInput.customizableProfile ? (
          <hr />
        ) : null}
        {formInput.onlineServices ? (
          <AddOnsItem
            title={"Online Service"}
            price={formInput.onlineServicesPrice}
            isYear={formInput.planYear}
          />
        ) : null}
        {formInput.largerStorage ? (
          <AddOnsItem
            title={"Larger storage"}
            price={formInput.largerStoragePrice}
            isYear={formInput.planYear}
          />
        ) : null}
        {formInput.customizableProfile ? (
          <AddOnsItem
            title={"Customizable Profile"}
            price={formInput.customizableProfilePrice}
            isYear={formInput.planYear}
          />
        ) : null}
      </div>
      <div className="total-price">
        <div>Total ({!formInput.planYear ? "per month" : "per year"})</div>
        <div>
          +${totalPrice}/ ({!formInput.planYear ? "mo" : "yr"})
        </div>
      </div>
    </div>
  );
}
