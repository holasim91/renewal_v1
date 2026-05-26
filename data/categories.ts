import type { Category } from "@/types/category";

export const categories: Category[] = [
  {
    id: "dog",
    name: "강아지",
    description: "사료, 간식, 장난감, 케어 용품",
    itemCountLabel: "주요 B2B 상품군",
  },
  {
    id: "cat",
    name: "고양이",
    description: "사료, 간식, 모래, 놀이 용품",
    itemCountLabel: "정기 납품 추천",
  },
  {
    id: "small-animal",
    name: "소동물",
    description: "햄스터, 토끼 등 소동물 용품",
    itemCountLabel: "전문 카테고리",
  },
  {
    id: "aquarium",
    name: "수족관",
    description: "관상어 사료와 수질 관리 용품",
    itemCountLabel: "용품 중심 구성",
  },
];
