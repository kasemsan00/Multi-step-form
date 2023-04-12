import YourInfo from "@/components/form/YourInfo";
import SelectPlan from "@/components/form/SelectPlan";
import AddOns from "@/components/form/AddOns";
import Summary from "@/components/form/Summary";
import ThankYou from "@/components/form/ThankYou";
import React, { useEffect, useState } from "react";
import { IFormInput } from "@/components/interface/Form";

interface Props {
  step: number;
  setStep: (arg0: number) => void;
}
const planList = [
  { title: "Arcade", price: 9, icon: "icon-arcade.svg" },
  {
    title: "Advanced",
    price: 12,
    icon: "icon-advanced.svg",
  },
  { title: "Pro", price: 15, icon: "icon-pro.svg" },
];
const addOnsList = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    price: 1,
  },
  { title: "Larger storage", description: "Extra 1TB cloud save", price: 2 },
  {
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    price: 2,
  },
];
export default function FormInputSection({ step, setStep }: Props) {
  const [formInput, setFormInput] = useState<IFormInput>({
    name: "",
    email: "",
    phoneNumber: "",
    planName: "Arcade",
    planMonthly: false,
    planYear: false,
    planPrice: 9,
    onlineServices: false,
    onlineServicesPrice: 0,
    largerStorage: false,
    largerStoragePrice: 0,
    customizableProfile: false,
    customizableProfilePrice: 0,
  });
  const [validField, setValidField] = useState({
    isNameValid: true,
    isEmailValid: true,
    isPhoneNumberValid: true,
  });
  const HandleChangeName = (event: any) => {
    setFormInput((state) => ({ ...state, name: event.target.value }));
  };
  const HandleChangeEmail = (event: any) => {
    setFormInput((state) => ({ ...state, email: event.target.value }));
  };
  const HandleChangePhoneNumber = (event: any) => {
    setFormInput((state) => ({ ...state, phoneNumber: event.target.value }));
  };
  const HandleNextStep = () => {
    if (formInput.name === "") {
      setValidField((state: any) => ({
        ...state,
        isNameValid: false,
      }));
    }
    if (formInput.email === "") {
      setValidField((state: any) => ({ ...state, isEmailValid: false }));
    }
    if (formInput.phoneNumber === "") {
      setValidField((state: any) => ({ ...state, isPhoneNumberValid: false }));
    }
    return;
  };
  return (
    <div className="form-input-section">
      <YourInfo
        show={step === 1}
        formInput={formInput}
        validField={validField}
        changeName={HandleChangeName}
        changeEmail={HandleChangeEmail}
        changePhoneNumber={HandleChangePhoneNumber}
      />
      <SelectPlan
        planList={planList}
        show={step === 2}
        formInput={formInput}
        setFormInput={setFormInput}
      />
      <AddOns
        addOnsList={addOnsList}
        show={step === 3}
        formInput={formInput}
        setFormInput={setFormInput}
      />
      <Summary show={step === 4} setStep={setStep} formInput={formInput} />
      <ThankYou show={step === 5} />
      <div className="form-input-footer">
        {step !== 1 && step !== 5 ? (
          <button
            onClick={() => {
              setStep(step - 1);
            }}
            className="go-back-button"
          >
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
