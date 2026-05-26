import { b2bGuideItems } from "@/data/b2b-guide";

export function B2BGuide() {
  return (
    <section
      id="b2b-guide"
      className="mx-auto max-w-6xl px-5 py-14 lg:px-8"
      aria-labelledby="b2b-guide-title"
    >
      <div className="rounded-lg bg-stone-950 p-6 text-white sm:p-8 lg:p-10">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-200">
            B2B Guide
          </p>
          <h2 id="b2b-guide-title" className="mt-3 text-3xl font-bold">
            거래 문의 중심의 탐색 흐름
          </h2>
          <p className="mt-4 text-base leading-7 text-stone-300">
            MVP에서는 상품 확인 후 거래 문의로 이어지는 정보 구조만 표현합니다.
          </p>
        </div>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {b2bGuideItems.map((item, index) => (
            <li key={item.title} className="rounded-md bg-white/10 p-5">
              <span className="text-sm font-bold text-orange-200">
                STEP {index + 1}
              </span>
              <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-300">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
