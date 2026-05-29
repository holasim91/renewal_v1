# Requirements

## MVP Pages

- `/` 또는 `/shop`: 메인 페이지
- `/products`: 상품 목록 페이지
- `/products/[id]`: 상품 상세 페이지

## Main Page

- Hero 영역
- 주요 카테고리
- 추천 상품
- B2B 거래 안내
- 문의 CTA

## Product List Page

- 상품 카드 목록
- 카테고리 필터 UI
- 검색 UI
- 정렬 UI는 선택 사항

## Product Detail Page

- 상품 이미지
- 상품명
- 브랜드
- 가격 또는 가격 확인 상태
- 배송 정보
- 상품 설명
- 거래 문의 버튼

## Price Handling

기존 화면에서 실제 가격 정책은 명확히 확인되지 않았다. 따라서 MVP에서는 실제 가격을 반드시 표시하기보다 다음과 같은 상태값으로 표현할 수 있다.

- 로그인 후 가격 확인
- 회원 전용가
- 문의 필요
- 오프라인 전용

## Non-goals

- 실제 주문 처리
- 실제 결제
- 실제 로그인
- 실제 DB 연동
