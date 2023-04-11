interface Props {
  number: number;
  stepTitle: string;
  stepInfo: string;
  active: boolean;
  onClick: (arg0: number) => void;
}

export default function Step({
  number,
  stepTitle,
  stepInfo,
  active,
  onClick,
}: Props) {
  return (
    <div
      className="step"
      onClick={() => {
        onClick(number);
      }}
    >
      <div className={`step-number ${active ? "step-active" : ""}`}>
        {number}
      </div>
      <div>
        <div className="step-title">{stepTitle}</div>
        <div className="step-info">{stepInfo}</div>
      </div>
    </div>
  );
}
