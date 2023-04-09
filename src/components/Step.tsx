interface Props {
  number: string;
  stepTitle: string;
  stepInfo: string;
}

export default function Step({ number, stepTitle, stepInfo }: Props) {
  return (
    <div className="step">
      <div className="step-number">{number}</div>
      <div>
        <div className="step-title">{stepTitle}</div>
        <div className="step-info">{stepInfo}</div>
      </div>
    </div>
  );
}
