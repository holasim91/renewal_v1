/* eslint-disable @next/next/no-img-element */

import { CircleArrowButton } from "@/components/ui/CircleArrowButton";

type FeaturedProduct = {
  id: string;
  name: string;
  category: string;
  price: string;
  badges: string[];
  imageAlt: string;
  imageSrc: string;
};

type NewArrivalsSectionProps = {
  featuredProducts: FeaturedProduct[];
};

export function NewArrivalsSection({
  featuredProducts,
}: NewArrivalsSectionProps) {
  return (
    <section
      id="featured-products"
      className="px-5 py-6 md:px-0 md:py-10"
      aria-labelledby="featured-products-title"
    >
      <div className="mb-6 flex items-end justify-between">
        <h2
          id="featured-products-title"
          className="text-2xl font-semibold leading-[1.3] text-on-surface"
        >
          New Arrivals
        </h2>
        <div className="hidden space-x-2 md:flex">
          <CircleArrowButton
            direction="previous"
            ariaLabel="이전 상품 보기"
          />
          <CircleArrowButton direction="next" ariaLabel="다음 상품 보기" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:no-scrollbar md:flex md:snap-x md:snap-mandatory md:gap-6 md:overflow-x-auto md:pb-8">
        {featuredProducts.map((product) => (
          <article
            key={product.id}
            className="group flex min-w-0 snap-start flex-col rounded-lg bg-surface transition-shadow duration-300 hover:shadow-[0px_4px_20px_rgba(0,0,0,0.05)] md:w-[280px] md:min-w-[280px] md:cursor-pointer md:rounded-xl md:bg-white md:p-4 md:shadow-[0px_4px_20px_rgba(0,0,0,0.05)] md:hover:-translate-y-1 md:hover:shadow-[0px_8px_30px_rgba(0,0,0,0.1)]"
          >
            <div className="relative mb-3 aspect-square overflow-hidden rounded-t-lg bg-surface-container-low md:mb-4 md:rounded-lg">
              <img
                alt={product.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 md:opacity-90 md:mix-blend-multiply"
                src={product.imageSrc}
              />
              <div className="absolute left-2 top-2 flex flex-col gap-1 md:left-4 md:top-4 md:flex-row">
                {product.badges.map((badge) => (
                  <span
                    key={badge}
                    className={
                      badge === "BEST"
                        ? "rounded-sm bg-yellow-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white md:py-1"
                        : "rounded-sm bg-primary-container px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-on-primary md:py-1"
                    }
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-grow flex-col px-1 pb-2 md:px-0 md:pb-0">
              <span className="mb-1 text-xs font-medium uppercase leading-none text-on-surface-variant md:hidden">
                {product.category}
              </span>
              <h3 className="mb-2 line-clamp-2 text-base font-medium leading-tight text-on-surface md:min-h-[48px] md:leading-[1.6]">
                {product.name}
              </h3>
              <div className="mt-auto flex items-center justify-between md:mt-4">
                <span className="text-base font-semibold text-on-surface md:text-xl">
                  {product.price}
                </span>
                <span className="hidden rounded-full bg-primary-container px-4 py-1.5 text-xs font-semibold text-on-primary md:inline-flex">
                  문의
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
