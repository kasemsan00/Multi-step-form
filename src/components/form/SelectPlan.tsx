import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IFormInput } from "@/components/interface/Form";
import { IPlanList } from "@/components/interface/ItemList";

interface Props {
  planList: Array<IPlanList>;
  show: boolean;
  formInput: IFormInput;
  setFormInput: (arg0: any) => void;
}

const PriceYear = ({ price }: { price: number }) => {
  return <span>${price * 10}/yr</span>;
};

export default function SelectPlan({
  planList,
  show,
  formInput,
  setFormInput,
}: Props) {
  const [monthlyYear, setMonthlyYear] = useState<boolean | undefined>();

  useEffect(() => {
    if (monthlyYear) {
      setFormInput((state: any) => ({ ...state, planYear: 1 }));
    }
    if (!monthlyYear) {
      setFormInput((state: any) => ({ ...state, planMonthly: 1 }));
    }
  }, [monthlyYear]);

  const HandleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonthlyYear(event.target.checked);
  };
  const HandleSelectPlan = (value: string) => {
    setFormInput((state: any) => ({ ...state, planName: value }));
  };

  return (
    <div className="form-card" style={{ display: show ? undefined : "none" }}>
      <div className="form-title">Select your plan</div>
      <p className="form-description">
        You have the option of monthly or yearly billing
      </p>
      <div className="plan-option">
        <ul>
          {planList.map((item: any, index: number) => (
            <li
              className={
                formInput.planName === item.title ? "plan-option-selected" : ""
              }
              key={index}
              onClick={(event) => {
                HandleSelectPlan(item.title);
              }}
            >
              <div>
                <Image
                  src={require(`@/assets/images/${item.icon}`)}
                  width={40}
                  height={40}
                  alt={item.title}
                />
              </div>
              <div className="plan-detail-block">
                <div className="plan-title">{item.title}</div>
                <div className="plan-price">
                  {monthlyYear ? (
                    <PriceYear price={item.price} />
                  ) : (
                    <span>${item.price}/mo</span>
                  )}
                </div>
                {monthlyYear ? (
                  <div className="plan-year-free">2 months free</div>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="switch-monthly-yearly">
        <span>Monthly</span>
        <label className="switch">
          <input type="checkbox" onChange={HandleChangeSwitch} />
          <span className="slider round"></span>
        </label>
        <span>Yearly</span>
      </div>
    </div>
  );
}
