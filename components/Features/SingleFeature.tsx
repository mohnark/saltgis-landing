import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div
        className="wow fadeInUp group h-full rounded-2xl border border-stroke bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-three dark:border-stroke-dark dark:bg-dark"
        data-wow-delay=".15s"
      >
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold tracking-tight text-black dark:text-white">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
