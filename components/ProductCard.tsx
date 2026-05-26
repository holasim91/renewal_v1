import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

const priceFormatter = new Intl.NumberFormat("ko-KR");

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-stone-200 bg-white p-4 shadow-sm">
      <div
        className="flex aspect-square items-center justify-center rounded-md bg-gradient-to-br from-orange-50 via-white to-stone-100 p-4 text-center text-sm font-semibold text-stone-500"
        role="img"
        aria-label={product.imageAlt}
      >
        {product.categoryName}
      </div>
      <div className="flex flex-1 flex-col pt-4">
        <div className="flex items-start justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-orange-700">
            {product.brand}
          </p>
          {product.badge ? (
            <span className="rounded-full bg-stone-100 px-2 py-1 text-xs font-semibold text-stone-700">
              {product.badge}
            </span>
          ) : null}
        </div>
        <h3 className="mt-3 text-base font-bold leading-6 text-stone-950">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-600">
          {product.description}
        </p>
        <div className="mt-auto pt-5">
          <p className="text-lg font-bold text-stone-950">
            {priceFormatter.format(product.price)}원
          </p>
          <p className="mt-1 text-xs text-stone-500">거래 조건은 문의 후 협의</p>
        </div>
      </div>
    </article>
  );
}
