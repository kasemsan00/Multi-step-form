import Image from "next/image";

interface Props {
  show: boolean;
}

export default function ThankYou({ show }: Props) {
  return (
    <div className="form-card middle" style={{ display: show ? "none" : "" }}>
      <div className="thank-you-image">
        <Image
          src={require("@/assets/images/icon-thank-you.svg")}
          width={70}
          height={70}
          alt={"Thank you"}
        />
      </div>
      <div className="thank-you-title">Thank you!</div>
      <div className="thank-you-description">
        Thank for confirming your subscription! We hope you have fun using our
        platform. if you ever need support, please feel free to email us at
        support@loremgaming.com
      </div>
    </div>
  );
}
