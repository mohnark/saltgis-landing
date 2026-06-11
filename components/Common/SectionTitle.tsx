const SectionTitle = ({
  title,
  paragraph,
  width = "640px",
  center,
  mb = "80px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight tracking-tight text-black dark:text-white sm:text-4xl md:text-[42px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
