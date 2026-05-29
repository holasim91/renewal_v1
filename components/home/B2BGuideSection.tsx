type B2BGuideItem = {
  title: string;
  description: string;
};

type B2BGuideSectionProps = {
  b2bGuideItems: B2BGuideItem[];
};

export function B2BGuideSection({ b2bGuideItems }: B2BGuideSectionProps) {
  return (
    <section
      id="b2b-guide"
      className="px-5 py-8 md:px-0 md:py-12"
      aria-labelledby="b2b-guide-title"
    >
      <div className="rounded-2xl bg-white p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] md:p-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.05em] text-primary">
            B2B Guide
          </p>
          <h2
            id="b2b-guide-title"
            className="mt-3 text-2xl font-semibold leading-[1.3] text-on-surface"
          >
            거래 문의 중심의 탐색 흐름
          </h2>
        </div>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {b2bGuideItems.map((item, index) => (
            <li
              key={item.title}
              className="rounded-lg border border-surface-container-high bg-surface-container-low p-5"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                STEP {index + 1}
              </span>
              <h3 className="mt-3 text-xl font-semibold leading-[1.4] text-on-surface">
                {item.title}
              </h3>
              <p className="mt-2 text-base leading-[1.6] text-on-surface-variant">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
