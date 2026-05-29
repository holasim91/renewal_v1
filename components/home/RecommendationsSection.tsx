/* eslint-disable @next/next/no-img-element */

import { CircleArrowButton } from "@/components/ui/CircleArrowButton";

type Recommendation = {
  id: string;
  name: string;
  imageAlt: string;
  imageSrc: string;
  tone: string;
};

type RecommendationsSectionProps = {
  recommendations: Recommendation[];
};

export function RecommendationsSection({
  recommendations,
}: RecommendationsSectionProps) {
  return (
    <section
      className="mx-5 rounded-2xl bg-surface-container-lowest py-8 md:mx-0"
      aria-labelledby="recommendation-title"
    >
      <h2
        id="recommendation-title"
        className="mb-8 text-center text-2xl font-semibold leading-[1.3] text-on-surface"
      >
        MD&apos;s Recommendation
      </h2>
      <div className="no-scrollbar flex items-start justify-start space-x-6 overflow-x-auto px-5 pb-2 md:justify-center md:space-x-12 md:px-4 md:pb-0">
        <CircleArrowButton
          direction="previous"
          ariaLabel="이전 상품 보기"
          className="hidden md:flex"
        />
        {recommendations.map((item) => (
          <article
            key={item.id}
            className="group flex w-24 flex-shrink-0 flex-col items-center md:w-32"
          >
            <div
              className={`mb-3 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-outline-variant/30 shadow-sm transition-shadow group-hover:shadow-md md:mb-4 md:h-32 md:w-32 md:border-4 md:border-white ${item.tone}`}
            >
              <img
                alt={item.imageAlt}
                className="h-full w-full object-cover md:h-16 md:w-16 md:object-contain"
                src={item.imageSrc}
              />
            </div>
            <h3 className="text-center text-sm font-semibold leading-tight text-on-surface">
              {item.name}
            </h3>
          </article>
        ))}
        <CircleArrowButton
          direction="next"
          ariaLabel="다음 상품 보기"
          className="hidden md:flex"
        />
      </div>
    </section>
  );
}
