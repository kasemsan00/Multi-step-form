interface Props {
  number: string;
  stepTitle: string;
  stepInfo: string;
  active: boolean;
}

export default function Step({ number, stepTitle, stepInfo, active }: Props) {
  return (
    <div className="step">
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
