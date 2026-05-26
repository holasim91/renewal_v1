# Verification

## Command Checks
작업 후 아래 명령어를 실행한다.

- `npm run lint`
- `npm run build`
- `npm run dev`

## Page Checks
브라우저에서 아래 페이지를 확인한다.

- `/`
- `/products`
- `/products/[id]`

## UI Checks
- 모바일 375px에서 레이아웃이 깨지지 않는가
- 상품 카드가 정상적으로 표시되는가
- 버튼과 링크가 의도대로 동작하는가
- 이미지 alt가 있는가
- heading 구조가 너무 이상하지 않은가

## Scope Checks
- 로그인, 결제, 장바구니 기능이 추가되지 않았는가
- mock data 범위를 넘어서 실제 API나 DB를 임의로 추가하지 않았는가
- 한 파일이 과도하게 커지지 않았는가