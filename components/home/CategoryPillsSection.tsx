type CategoryPillsSectionProps = {
  categoryPills: string[];
};

export function CategoryPillsSection({
  categoryPills,
}: CategoryPillsSectionProps) {
  return (
    <section
      id="categories"
      className="w-full overflow-hidden py-6 pl-5 md:pl-0"
      aria-label="주요 카테고리"
    >
      <div className="no-scrollbar flex space-x-3 overflow-x-auto pb-2 pr-5 md:pr-0">
        {categoryPills.map((category, index) => (
          <span
            key={category}
            className={
              index === 0
                ? "flex-shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-on-primary shadow-sm"
                : "flex-shrink-0 rounded-full border border-outline-variant bg-surface-container-low px-4 py-2 text-sm font-semibold text-on-surface"
            }
          >
            {category}
          </span>
        ))}
      </div>
    </section>
  );
}
