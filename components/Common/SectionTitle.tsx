const SectionTitle = ({
  title,
  paragraph,
  width = "640px",
  center,
  mb = "64px",
  eyebrow,
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  eyebrow?: string;
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      {eyebrow && (
        <span
          className={`mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary dark:border-primary/30 dark:bg-primary/10 ${
            center ? "" : "justify-start"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
      )}
      <h2 className="mb-4 font-heading text-3xl font-bold !leading-tight tracking-tight text-black dark:text-white sm:text-4xl md:text-[42px]">
        {title}
      </h2>
      <p className="text-base !leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
