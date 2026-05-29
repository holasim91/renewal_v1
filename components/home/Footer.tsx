export function Footer() {
  return (
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
                <a
                  className="text-on-surface-variant hover:text-primary"
                  href="#featured-products"
                >
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
  );
}
