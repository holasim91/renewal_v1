import { Header } from "@/components/home/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryPillsSection } from "@/components/home/CategoryPillsSection";
import { NewArrivalsSection } from "@/components/home/NewArrivalsSection";
import { RecommendationsSection } from "@/components/home/RecommendationsSection";
import { B2BGuideSection } from "@/components/home/B2BGuideSection";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { Footer } from "@/components/home/Footer";

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
      <Header categories={categories} />

      <main className="mx-auto flex w-full max-w-[1280px] flex-col px-0 py-0 md:px-20 md:py-8">
        <HeroSection />

        <CategoryPillsSection categoryPills={categoryPills} />

        <NewArrivalsSection featuredProducts={featuredProducts} />

        <RecommendationsSection recommendations={recommendations} />

        <B2BGuideSection b2bGuideItems={b2bGuideItems} />

        <ContactCTASection />
      </main>

      <Footer />
    </div>
  );
}
