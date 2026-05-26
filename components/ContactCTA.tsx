export function ContactCTA() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-5 pb-16 pt-8 lg:px-8"
      aria-labelledby="contact-title"
    >
      <div className="rounded-lg border border-orange-100 bg-orange-50 p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-700">
            Contact
          </p>
          <h2 id="contact-title" className="mt-3 text-3xl font-bold text-stone-950">
            대량 구매와 납품 상담은 문의로 연결합니다
          </h2>
          <p className="mt-4 text-base leading-7 text-stone-700">
            이번 MVP는 실제 문의 저장 기능을 포함하지 않습니다. 버튼은 거래 문의
            의도를 명확히 보여주는 안내 역할입니다.
          </p>
        </div>
        <a
          href="mailto:contact@giftpet.kr?subject=GIFT%20PET%20B2B%20%EA%B1%B0%EB%9E%98%20%EB%AC%B8%EC%9D%98"
          className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-orange-700 px-6 text-sm font-bold text-white transition hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto lg:mt-0"
        >
          거래 문의 메일 작성
        </a>
      </div>
    </section>
  );
}
