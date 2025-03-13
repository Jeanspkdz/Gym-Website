import "./heading.css"

type HeadingProps = {
  subtitle?: string;
  children: React.ReactNode;
};

export const Heading = ({ subtitle, children }: HeadingProps) => {
  return (
    <div className="heading">
      {subtitle && <h2 className="heading__subtitle">{subtitle}</h2>}
      <h1 className="heading__title">{children}</h1>
    </div>
  );
};
