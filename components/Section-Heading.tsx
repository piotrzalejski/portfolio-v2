type SectionHeadingProps = {
  heading: React.ReactNode;
};

export default function SectionHeading({ heading }: SectionHeadingProps) {
  return (
    <h2 className='text-3xl font-medium capitalize text-center mb-3 sm:mb-7'>
      {heading}
    </h2>
  );
}
