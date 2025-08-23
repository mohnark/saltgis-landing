import Link from "next/link";

type Crumb = { label: string; href?: string };

type BreadcrumbProps = {
  /** Pass an array for multi-level paths, or just use pageName for Home > Page */
  items?: Crumb[];
  pageName?: string; // backward-compat: renders as Home > {pageName}
  className?: string;
};

const Chevron = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    className="mx-1 inline-block align-middle text-slate-400 dark:text-slate-500"
    aria-hidden="true"
  >
    <path
      d="M7 5l5 5-5 5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Breadcrumb = ({ items, pageName, className }: BreadcrumbProps) => {
  const crumbs: Crumb[] =
    items && items.length
      ? items
      : [{ label: "Home", href: "/" }, { label: pageName ?? "" }];

  return (
    <nav aria-label="Breadcrumb" className={["w-full", className].filter(Boolean).join(" ")}>
      <div className="container mx-auto px-4">
        <ol className="flex flex-wrap items-center py-3 text-sm">
          {crumbs.map((c, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <li key={`${c.label}-${i}`} className="flex items-center">
                {c.href && !isLast ? (
                  <Link
                    href={c.href}
                    className="text-slate-600 hover:text-[#1B3B6F] dark:text-slate-300 dark:hover:text-[#4CAF50]"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span
                    className={`truncate ${
                      isLast
                        ? "font-medium text-[#1B3B6F] dark:text-[#4CAF50]"
                        : "text-slate-500 dark:text-slate-400"
                    }`}
                    aria-current={isLast ? "page" : undefined}
                    title={c.label}
                  >
                    {c.label}
                  </span>
                )}
                {!isLast && <Chevron />}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
