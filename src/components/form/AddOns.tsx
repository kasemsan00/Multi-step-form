import { IFormInput } from "@/components/interface/Form";
import { IAddOnsList } from "@/components/interface/ItemList";

interface Props {
  addOnsList: Array<IAddOnsList>;
  show: boolean;
  formInput: IFormInput;
  setFormInput: (arg0: any) => void;
}

const addonsNameKey = [
  "onlineServices",
  "largerStorage",
  "customizableProfile",
];
const addonsPriceKey = [
  "onlineServicesPrice",
  "largerStoragePrice",
  "customizableProfilePrice",
];
const PriceYear = ({ price }: { price: number }) => {
  return <div className="addons-price">+${price * 10}/yr</div>;
};
export default function AddOns({
  addOnsList,
  show,
  formInput,
  setFormInput,
}: Props) {
  const HandleClickAddons = (key: number, price: number) => {
    const currentValue =
      formInput[addonsNameKey[key] as keyof typeof formInput];
    setFormInput((state: any) => ({
      ...state,
      [addonsNameKey[key]]: !currentValue,
      [addonsPriceKey[key]]: price,
    }));
  };

  return (
    <div className="form-card" style={{ display: show ? undefined : "none" }}>
      <div className="form-title">Pick add-ons</div>
      <p className="form-description">
        Add-ons help enhance your gaming experience
      </p>
      <form className="form-addons">
        {addOnsList.map((item: any, index: number) => (
          <div
            className={`addons-card ${
              formInput[addonsNameKey[index] as keyof typeof formInput]
                ? "addons-card-active"
                : ""
            }`}
            key={index}
            onClick={() => HandleClickAddons(index, item.price)}
          >
            <input
              type="checkbox"
              value={item.title}
              checked={
                formInput[
                  addonsNameKey[index] as keyof typeof formInput
                ] as boolean
              }
              onChange={() => HandleClickAddons(index, item.price)}
            />
            <div className="addons-detail">
              <label className="addons-title">{item.title}</label>
              <label className="addons-description" htmlFor="vehicle1">
                {item.description}
              </label>
            </div>
            {formInput.planYear ? (
              <PriceYear price={item.price} />
            ) : (
              <div className="addons-price">+${item.price}/mo</div>
            )}
          </div>
        ))}
      </form>
    </div>
  );
}
