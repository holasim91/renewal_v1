type HeaderCategory = {
  id: string;
  name: string;
  items: string[];
};

type HeaderProps = {
  categories: HeaderCategory[];
};

export function Header({ categories }: HeaderProps) {
  return (
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
  );
}
