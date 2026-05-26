export function HeroSection() {
  return (
    <section
      id="top"
      className="bg-[#fff7ed]"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-700">
            B2B Pet Supplies
          </p>
          <h1
            id="hero-title"
            className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl"
          >
            반려동물 B2B 상품을 더 쉽게 탐색하는 쇼핑몰 리뉴얼
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
            GIFT PET의 상품 구조를 카테고리와 추천 상품 중심으로 정리한
            Next.js 기반 포트폴리오 MVP입니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#featured-products"
              className="inline-flex h-12 items-center justify-center rounded-full bg-orange-700 px-6 text-sm font-bold text-white transition hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              추천 상품 보기
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-orange-200 bg-white px-6 text-sm font-bold text-orange-800 transition hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              거래 문의 안내
            </a>
          </div>
        </div>
        <div
          className="min-h-[280px] rounded-lg border border-orange-100 bg-white p-5 shadow-sm sm:min-h-[360px]"
          role="img"
          aria-label="반려동물 B2B 상품 카테고리를 표현한 메인 비주얼 placeholder"
        >
          <div className="grid h-full grid-cols-2 gap-4">
            {["강아지 용품", "고양이 용품", "소동물 용품", "수족관 용품"].map(
              (label) => (
                <div
                  key={label}
                  className="flex items-end rounded-md bg-gradient-to-br from-orange-100 to-stone-100 p-4"
                >
                  <span className="text-sm font-bold text-stone-700">{label}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
