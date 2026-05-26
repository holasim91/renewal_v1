import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/CategoryCard";

export function CategoryPreview() {
  return (
    <section
      id="categories"
      className="mx-auto max-w-6xl px-5 py-14 lg:px-8"
      aria-labelledby="categories-title"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-700">
          Categories
        </p>
        <h2 id="categories-title" className="mt-3 text-3xl font-bold text-stone-950">
          주요 카테고리
        </h2>
        <p className="mt-4 text-base leading-7 text-stone-600">
          B2B 거래에서 자주 확인하는 상품군을 먼저 보여줍니다.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
