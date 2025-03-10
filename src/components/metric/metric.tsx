import "./metric.css";

interface MetricProps {
  count: number;
  label: string;
}

export const Metric = ({ label, count }: MetricProps) => {
  return (
    <div className="metric">
      <span className="metric__number">{count}+</span>
      <span className="metric__label">{label}</span>
    </div>
  );
};
