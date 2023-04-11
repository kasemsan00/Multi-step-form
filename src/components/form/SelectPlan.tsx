import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  show: boolean;
  setFormInput: (arg0: any) => void;
}
interface Item {
  title: string;
  price: number;
  icon: string;
}

export default function SelectPlan({ show, setFormInput }: Props) {
  const [monthlyYear, setMonthlyYear] = useState<boolean | undefined>();
  const price = useState([
    { title: "Arcade", price: 9, icon: "icon-arcade.svg" },
    {
      title: "Advanced",
      price: 12,
      icon: "icon-advanced.svg",
    },
    { title: "Pro", price: 15, icon: "icon-pro.svg" },
  ]);

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

  return (
    <div className="form-card" style={{ display: show ? undefined : "none" }}>
      <div className="form-title">Select your plan</div>
      <p className="form-description">
        You have the option of monthly or yearly billing
      </p>
      <div className="plan-option">
        <ul>
          {price.map((item: any, index) => (
            <li key={index}>
              <div>{item.title}</div>
            </li>
          ))}

          {/*<li>*/}
          {/*  <div>*/}
          {/*    <Image*/}
          {/*      src={require("@/assets/images/icon-arcade.svg")}*/}
          {/*      width={40}*/}
          {/*      height={40}*/}
          {/*      alt="Aracade"*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <div className="plan-detail-block">*/}
          {/*    <div className="plan-title">Arcade</div>*/}
          {/*    <div className="plan-price">$90/mo</div>*/}
          {/*    {monthlyYear ? (*/}
          {/*      <div className="plan-year-free">2 months free</div>*/}
          {/*    ) : null}*/}
          {/*  </div>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <div>*/}
          {/*    <Image*/}
          {/*      src={require("@/assets/images/icon-advanced.svg")}*/}
          {/*      width={40}*/}
          {/*      height={40}*/}
          {/*      alt="Advanced"*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <div className="plan-detail-block">*/}
          {/*    <div className="plan-title">Advanced</div>*/}
          {/*    <div className="plan-price">$12/mo</div>*/}
          {/*    {monthlyYear ? (*/}
          {/*      <div className="plan-year-free">2 months free</div>*/}
          {/*    ) : null}*/}
          {/*  </div>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <div>*/}
          {/*    <Image*/}
          {/*      src={require("@/assets/images/icon-pro.svg")}*/}
          {/*      width={40}*/}
          {/*      height={40}*/}
          {/*      alt="Pro"*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <div className="plan-detail-block">*/}
          {/*    <div className="plan-title">Pro</div>*/}
          {/*    <div className="plan-price">$15/mo</div>*/}
          {/*    {monthlyYear ? (*/}
          {/*      <div className="plan-year-free">2 months free</div>*/}
          {/*    ) : null}*/}
          {/*  </div>*/}
          {/*</li>*/}
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
