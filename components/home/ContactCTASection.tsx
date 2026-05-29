export function ContactCTASection() {
  return (
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
            실제 주문 처리 없이 상품 확인 후 거래 문의로 이어지는 메인 페이지
            흐름을 제공합니다.
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
  );
}
