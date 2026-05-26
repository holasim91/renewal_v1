import type { Category } from "@/types/category";

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-800">
        {category.name.slice(0, 1)}
      </div>
      <h3 className="mt-5 text-lg font-bold text-stone-950">{category.name}</h3>
      <p className="mt-2 text-sm leading-6 text-stone-600">{category.description}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-orange-700">
        {category.itemCountLabel}
      </p>
    </article>
  );
}
