import { ProductCard } from "@/components/ProductCard";
import { featuredProducts } from "@/data/featured-products";

export function FeaturedProducts() {
  return (
    <section
      id="featured-products"
      className="bg-white"
      aria-labelledby="featured-products-title"
    >
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-700">
              Featured
            </p>
            <h2
              id="featured-products-title"
              className="mt-3 text-3xl font-bold text-stone-950"
            >
              추천 상품
            </h2>
            <p className="mt-4 text-base leading-7 text-stone-600">
              실제 주문 기능 없이, mock data로 상품 카드 구성을 확인합니다.
            </p>
          </div>
          <p className="text-sm font-semibold text-stone-500">총 {featuredProducts.length}개</p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
