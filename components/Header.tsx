const navItems = [
  { label: "카테고리", href: "#categories" },
  { label: "추천 상품", href: "#featured-products" },
  { label: "거래 안내", href: "#b2b-guide" },
  { label: "문의", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <a
          href="#top"
          className="text-xl font-bold tracking-tight text-stone-950"
          aria-label="GIFT PET 메인으로 이동"
        >
          GIFT PET
        </a>
        <nav aria-label="메인 메뉴">
          <ul className="flex flex-wrap gap-2 text-sm font-semibold text-stone-600 sm:justify-end">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 transition hover:bg-orange-50 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
