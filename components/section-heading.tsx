type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return <h2 className="text-3xl font-medium capitalize mb-8">{children}</h2>;
};

export default SectionHeading;
