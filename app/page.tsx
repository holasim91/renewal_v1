/* eslint-disable @next/next/no-img-element */

const categories = [
  {
    id: "dog",
    name: "DOG",
    items: ["Food", "Treats", "Health Care", "Supplies"],
  },
  {
    id: "cat",
    name: "CAT",
    items: ["Food", "Treats", "Health Care", "Supplies"],
  },
  {
    id: "small-animal",
    name: "SMALL ANIMAL",
    items: ["Food", "Treats", "Health Care", "Supplies"],
  },
  {
    id: "aquarium",
    name: "AQUARIUM",
    items: ["Food", "Water Care", "Health Care", "Supplies"],
  },
];

const categoryPills = ["All", "Dogs", "Cats", "Toys", "Health"];

const featuredProducts = [
  {
    id: "salmon-cat-treats",
    name: "Organic Salmon Cat Treats",
    category: "Treats",
    price: "$12.99",
    badges: ["NEW", "BEST"],
    imageAlt: "Organic salmon cat treats package",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_uBvLHZIZsktX8II1Eqf4c16dOGIdBAt4TPRCucE9uyIOuX_hfdf4SwqmLog5GcsnT10yCyF2FZSlrz60b_FRnzijAOtOIrDrmUSAo1ENt5o2vUdiTXuxXMvjzKkS-ceKP-FFLUOzpkmzlFbNeZFcHNIJljacmuq4Y9eI2DcX5tqRFLKIYuAqZjBrss5X-CNW74moay_gyYGGzqFlSZ6XUgX_qj9Lfzyr4tmp7ayVRIe9OPkwzMY9uhbQqS4nE5yN912HhUR6Kyc",
  },
  {
    id: "orthopedic-dog-bed",
    name: "Premium Orthopedic Dog Bed - Grey",
    category: "Beds",
    price: "$89.99",
    badges: ["NEW"],
    imageAlt: "Premium orthopedic dog bed in grey",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDl40X4_3JvQUrrKtg2BXw_Amt9FfUKSgmluKLjMENiwuAwCs5nrytZx9IOY7EOVdHAWWv6q8GpzT2sJ7Z2rjn_6xlEIKQcpddYvQPoK3DPt78YYQM0l-pXDHz_mGdiErKeSK8iMvcOH9u0GWHFuwE2jJPi_gAj1UciUT_7XtDT1-1hoDNcqHW8xoSAr5Z0n-jNhhepMJGaRy98Xg7jhBt763_Rmg06QjKC_ixwUEX40H1kLPFpSz8wxJKIbNBcdfCWx_ySU5xypr0",
  },
  {
    id: "pet-water-fountain",
    name: "Smart Pet Water Fountain",
    category: "Supplies",
    price: "$45.99",
    badges: ["NEW"],
    imageAlt: "Smart pet water fountain",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_tQiZxw_h3JNamvOBCE2_Rz02fyi_ViI0jFLi03NV3jvJdaUifSOQ77aHKSC1y_2ZN_F48-pntHUDjpQdL9A_ZMqxOBqN_AV_1M5kEEqKEqsFOWHaf-FYkYlAoqdDMeyEVhtMVwZcBRprZxKxQCUKulT4b0x3aQz7VKk-DtTXerPZ_ryGSzQXgQbzumUODaOhkrvXLgxzMBp14TJ8zSCrEmVTf064pp3F_x3V3Kuv_eWKn_f9Y2VuYVpRwje0GpjXSxJ5odKhHCs",
  },
  {
    id: "chew-toy-set",
    name: "Durable Chew Toy Set - Large",
    category: "Toys",
    price: "$24.99",
    badges: ["NEW"],
    imageAlt: "Durable chew toy set for large dogs",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYxpfhvUUVbN43D5Z3s88FC7urmgwdaG_j5TGvESLKsQoVxmXI7He0XO-S4ov1O0vwhySgtyGWHof8HaqGBIoChrLUNe2LsZvCdxT19fB2dSxVd_F_pTWbMnZYlYfOd7hnWpxB1prMYp3GWlL5iAxlDBfoGWJ4ojinA1MAijZzfBoHHBFQEQanZDT-dClK43Z_ptPfuH-W9r9DaDowa8B0BSt1iXQMcJ3qrEC88jYYuNgnCFl7kdq8nkyhInF5c6OFXciOuzu4jDk",
  },
];

const recommendations = [
  {
    id: "probiotics",
    name: "Digestive Health Probiotics",
    imageAlt: "Pet digestive health probiotics",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtSg5t_Se0UC9oSif_NCRs4M5cOodPVmpUmLsiWohxQdeG9lUD6gDn3TX8C75U-qpQ14kXMmOqD3rRDVhvju0rURk1C9MHSIugyC5QlkYVR2Ia93qG2h3WAcNx5fYBil8EHHKKY5y_amtTKm7wwluaE6GypR9M7EkkardQja5MiZpJrE90Msu00Ubl2ZCi6QZ8sKraHpn3rcPvEC2YPo4A056DcNyHjg9VpFTACSDYU5ftvHLzMfpFo3rcF2LyE0FQJO2MMD2D2I4",
    tone: "bg-primary-fixed",
  },
  {
    id: "hemp-oil",
    name: "Calming Hemp Oil",
    imageAlt: "Calming hemp oil for pets",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHWHMkeVD9QMgNypEcLMniBeyhT7LFcahWY5nlScjsWSZJXb5Ge_J-5oMaey-BL_T2dsWCXUixzwIDKWg1QpvHgxGtZvH-9GeKJPauti1R-j4HGM3LQXzdBGSNzgVbhLbHTpyrjX2zYYSl5oILS0nsAPNTZwc1gZxFaLhvybUsTPqjDqe8t9UTJXzm0Ms6Q2c9nyUi5dUY6w21WXUdfux8kwg5lh51awKzua6qpUsk8QTbfF-BFFRilRj8D2815iWrpyiGUJFvIJU",
    tone: "bg-primary-container",
  },
  {
    id: "joint-chews",
    name: "Joint Support Chews",
    imageAlt: "Joint support chews for dogs",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCzRvt1yu93GHoOoZve0MsLr7CcRveFsgH4ulGDmXqc9rivy7Y2k-JtWYG-9aFLm4nWiwMl0dA7mMc2pwXsn4YK-NRDdS8_sgLOdBrQqP3p-Dr4bsicQbssLeIrnsJASfi-DqKuDBErDFA77sVrATUyG0xG9izJDnT6DS-SGv4x4Ky81llsN7KGnDTKqjl8ZCZtLZo4qNg2ZrmfNAB6qDAONVgFNQLPoYaaadEmav_mNDJ-53mKG5bForTIkDI_M1oZNa61r0tOzA",
    tone: "bg-primary-fixed-dim",
  },
  {
    id: "skin-supplement",
    name: "Skin & Coat Supplement",
    imageAlt: "Skin and coat supplement for pets",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9tkDVuAw9VGEtTx5kc3C5gr0D5F_FUGT0zzrRxno_Ge02N2IWrv5GhZYaJUpQyu2kNA_NUlvNH9pfdNdbQkFKDTY0dydjLzYIauiozZJcQwOA7slfrJL-QXhgCS1gZGZxNZbkKw3MOky9efvPgh9WO54T7bUBsrhBZxthXjETtBCfUulEXK-eDDrMJqTKO8KLeytqTbNtSV_13K6wjP65Q5aQVTy0qQUzXh_i95iBBu8qGYefph8cCIYPRItbsf3uw9yEzlUpLG4",
    tone: "bg-outline-variant",
  },
];

const b2bGuideItems = [
  {
    title: "상품군 확인",
    description: "카테고리와 추천 상품을 바탕으로 필요한 상품군을 먼저 확인합니다.",
  },
  {
    title: "거래 문의",
    description: "수량, 납품 주기, 배송 조건을 기준으로 상담을 이어갑니다.",
  },
  {
    title: "공급 검토",
    description: "도매 공급 가능 여부와 조건을 확인하는 흐름을 안내합니다.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
        <div className="mx-auto hidden w-full max-w-[1280px] flex-col space-y-4 px-4 py-4 md:flex md:px-20">
          <div className="flex w-full items-center justify-between">
            <div className="w-1/3" aria-hidden="true" />
            <div className="flex w-1/3 justify-center">
              <a
                href="#top"
                className="text-[40px] font-bold leading-[1.2] tracking-[-0.02em] text-on-surface"
                aria-label="GIFT PET 메인으로 이동"
              >
                GIFT PET
              </a>
            </div>
            <div className="flex w-1/3 justify-end">
              <a
                href="#contact"
                className="rounded-full border border-outline-variant px-5 py-2 text-sm font-semibold text-on-surface-variant transition hover:border-primary-container hover:text-primary"
              >
                거래 문의
              </a>
            </div>
          </div>

          <div className="flex w-full justify-center">
            <label className="relative w-full max-w-md">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-tertiary">
                Search
              </span>
              <input
                className="w-full rounded-full border-none bg-surface-container py-2 pl-20 pr-4 text-base leading-[1.6] text-on-surface transition-shadow placeholder:text-tertiary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Search"
                type="search"
                aria-label="상품 검색"
              />
            </label>
          </div>

          <nav className="group relative flex w-full justify-center space-x-8">
            {["NEW", "BEST", "CATEGORY", "B2B", "CONTACT"].map((item) => (
              <a
                key={item}
                className="border-b-2 border-transparent pb-1 text-sm font-semibold uppercase tracking-[0.05em] text-on-surface-variant transition-colors hover:border-primary hover:text-primary first:border-primary first:text-primary"
                href={
                  item === "CATEGORY"
                    ? "#categories"
                    : item === "B2B"
                      ? "#b2b-guide"
                      : item === "CONTACT"
                        ? "#contact"
                        : "#featured-products"
                }
              >
                {item}
              </a>
            ))}
            <div className="invisible absolute left-1/2 top-full z-40 w-screen -translate-x-1/2 pt-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <div className="rounded-b-xl border-t border-surface-container bg-white py-8 shadow-[0px_10px_30px_rgba(0,0,0,0.1)]">
                <div className="mx-auto grid max-w-[1280px] grid-cols-4 gap-8 px-20">
                  {categories.map((category) => (
                    <div key={category.id}>
                      <h2 className="mb-4 text-xl font-semibold leading-[1.4] text-on-surface">
                        {category.name}
                      </h2>
                      <ul className="space-y-3">
                        {category.items.map((item) => (
                          <li
                            key={item}
                            className="text-base leading-[1.6] text-on-surface-variant"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="mx-auto flex w-full flex-col space-y-4 px-5 py-4 md:hidden">
          <div className="flex w-full items-center justify-between">
            <details className="relative">
              <summary
                className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full text-2xl text-on-surface-variant"
                aria-label="메뉴 열기"
              >
                =
              </summary>
              <div className="absolute left-0 top-11 z-50 w-[280px] rounded-lg border border-outline-variant bg-surface p-4 shadow-xl">
                <p className="mb-4 text-xl font-semibold text-on-surface">Menu</p>
                <div className="flex flex-col space-y-5">
                  <a className="text-sm font-semibold text-primary" href="#featured-products">
                    NEW
                  </a>
                  <a className="text-sm font-semibold text-on-surface-variant" href="#featured-products">
                    BEST
                  </a>
                  <a className="text-sm font-semibold text-on-surface-variant" href="#categories">
                    CATEGORY
                  </a>
                  <a className="text-sm font-semibold text-on-surface-variant" href="#b2b-guide">
                    B2B
                  </a>
                  <a className="text-sm font-semibold text-on-surface-variant" href="#contact">
                    CONTACT
                  </a>
                </div>
              </div>
            </details>
            <a
              className="mx-auto text-xl font-bold leading-[1.4] tracking-tight text-on-surface"
              href="#top"
            >
              GIFT PET
            </a>
            <a
              href="#contact"
              className="rounded-full bg-primary-container px-3 py-1.5 text-xs font-bold text-on-primary"
            >
              문의
            </a>
          </div>
          <label className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
              Search
            </span>
            <input
              className="w-full rounded-lg border border-outline-variant bg-surface-container-low py-2 pl-20 pr-4 text-base leading-[1.6] text-on-surface transition-colors placeholder:text-on-surface-variant focus:border-primary-container focus:outline-none focus:ring-1 focus:ring-primary-container"
              placeholder="Search for treats, beds..."
              type="search"
              aria-label="상품 검색"
            />
          </label>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-[1280px] flex-col px-0 py-0 md:px-20 md:py-8">
        <section
          id="top"
          className="relative flex aspect-[4/3] w-full items-end overflow-hidden bg-surface-container md:h-[400px] md:items-center md:rounded-2xl md:shadow-sm"
          aria-labelledby="hero-title"
        >
          <img
            alt="Happy dogs running in a field"
            className="absolute inset-0 h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2bFL0ZrTQzj4LFLIhuShBKL1SwwHYbSyU2kuZgg_c5gg77qPRfs7HjupF1bz0G4ZbiItGfX_0clecs7opfkNZ1kboBaXcZc_hyp1B_pbLg5sDoVzYkQiExsFcohk2SGOyY1RXotKxwIIVeT2MnBlSd0kqsBtD5gsOOwPv4JQmOrbkvoj3r2_iM7ImIuwnVLRD7BcLNQNYUoJx3804eWQBrNPMXHOfdZWQZG5eXm5SrAuickX1mpuXT2vvFbCkZNGaqc_iSfiO2cs"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
          <div className="relative z-10 m-5 max-w-sm pb-3 md:ml-12 md:max-w-lg md:rounded-xl md:bg-white/70 md:p-12 md:backdrop-blur-sm">
            <h1
              id="hero-title"
              className="text-[28px] font-bold leading-[1.2] text-white md:text-[32px] md:text-on-surface"
            >
              Unbox Happiness for Your Pet
            </h1>
            <p className="mb-6 mt-3 text-base leading-[1.6] text-surface-bright md:mt-4 md:text-lg md:text-on-surface-variant">
              Discover our curated selection of premium toys, treats, and care
              products for B2B partners.
            </p>
            <a
              className="inline-flex w-full max-w-[200px] items-center justify-center rounded-lg bg-primary-container px-6 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-on-primary shadow-sm transition hover:bg-primary md:w-auto md:rounded-full md:px-8"
              href="#contact"
            >
              거래 문의
            </a>
          </div>
        </section>

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
            <div className="hidden space-x-2 md:flex" aria-hidden="true">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-container-high text-2xl text-on-surface-variant">
                ‹
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-container-high text-2xl text-on-surface-variant">
                ›
              </span>
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
            <span
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-surface-container-high text-2xl text-on-surface-variant md:flex"
              aria-hidden="true"
            >
              ‹
            </span>
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
            <span
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-surface-container-high text-2xl text-on-surface-variant md:flex"
              aria-hidden="true"
            >
              ›
            </span>
          </div>
        </section>

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

        <section
          id="contact"
          className="px-5 pb-12 md:px-0 md:pb-16"
          aria-labelledby="contact-title"
        >
          <div className="rounded-2xl bg-primary-fixed p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.05em] text-on-primary-container">
                Contact
              </p>
              <h2
                id="contact-title"
                className="mt-3 text-2xl font-semibold leading-[1.3] text-on-surface"
              >
                대량 구매와 납품 상담은 문의로 연결합니다
              </h2>
              <p className="mt-4 text-base leading-[1.6] text-on-surface-variant">
                실제 주문 처리 없이 상품 확인 후 거래 문의로 이어지는 메인
                페이지 흐름을 제공합니다.
              </p>
            </div>
            <a
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary-container px-8 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-on-primary shadow-sm transition hover:bg-primary md:mt-0 md:w-auto"
              href="mailto:contact@giftpet.kr?subject=GIFT%20PET%20B2B%20Inquiry"
            >
              거래 문의하기
            </a>
          </div>
        </section>
      </main>

      <footer className="mt-auto w-full border-t border-surface-container bg-surface-container-low px-5 py-8 md:px-20 md:py-12">
        <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-3">
          <div>
            <p className="mb-4 text-xl font-bold leading-[1.4] text-on-surface">
              GIFT PET
            </p>
            <p className="text-base leading-[1.6] text-on-surface-variant">
              B2B 반려동물 쇼핑몰 리뉴얼 포트폴리오 MVP
            </p>
          </div>
          <div className="md:col-span-2 md:flex md:justify-end md:space-x-16">
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.05em] text-on-surface">
                Links
              </h2>
              <ul className="space-y-3 text-base leading-[1.6]">
                <li>
                  <a className="text-on-surface-variant hover:text-primary" href="#categories">
                    Categories
                  </a>
                </li>
                <li>
                  <a className="text-on-surface-variant hover:text-primary" href="#featured-products">
                    Products
                  </a>
                </li>
                <li>
                  <a className="text-on-surface-variant hover:text-primary" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
