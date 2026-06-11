import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-stroke bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover dark:border-stroke-dark dark:bg-dark">
      {/* Top accent line on hover */}
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-saltgis-green-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-colors duration-300 group-hover:bg-primary/10" />

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow-sm">
        {icon}
      </div>
      <h3 className="mb-3 font-heading text-xl font-bold tracking-tight text-black dark:text-white">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
        {paragraph}
      </p>
    </div>
  );
};

export default SingleFeature;
