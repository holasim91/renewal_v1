# Header Refactor Plan

## 1. 현재 상태

Header는 현재 큰 섹션 단위 컴포넌트로 분리된 상태이다.

현재 단계에서는 Header 내부의 세부 컴포넌트 분리를 진행하지 않고, 전체 레이아웃과 className을 유지한다.

## 2. 지금 당장 세부 분리를 하지 않는 이유

- 현재 목표는 큰 섹션 단위 분리이다.
- 검색, 모바일 메뉴, active navigation 등 실제 기능이 아직 붙지 않았다.
- 너무 이른 세부 분리는 파일 수와 props 복잡도를 증가시킬 수 있다.
- 현재 화면 디자인을 변경하지 않는 것이 우선이다.

## 3. 향후 분리 후보

### HeaderLogo

역할:

- 로고 표시
- 홈 링크 제공

예상 props:

- 없음 또는 `href`, `label`

Component type:

- Server Component

---

### HeaderNavigation

역할:

- 데스크톱 카테고리 메뉴 렌더링
- 향후 현재 경로 active 처리

예상 props:

```ts
type NavigationItem = {
  label: string;
  href: string;
};

type HeaderNavigationProps = {
  items: NavigationItem[];
};
```

Component type:

- 기본은 Server Component
- 현재 경로 active 처리가 client hook 기반이면 Client Component 검토

---

### HeaderActions

역할:

- 상품 문의 버튼
- MVP 제외 기능 안내 버튼이 필요한 경우 처리

Component type:

- Server Component 가능
- 클릭 상태 메시지가 필요하면 Client Component로 분리

---

### HeaderSearch

역할:

- 검색 UI
- 검색어 입력
- 상품 목록 페이지로 keyword query 이동

Component type:

- Client Component 가능성 높음

분리 시점:

- 실제 검색 입력 기능을 붙일 때

---

### MobileMenuButton

역할:

- 모바일 메뉴 열기 버튼

Component type:

- Client Component

분리 시점:

- 모바일 메뉴 open/close 상태가 생길 때

---

### MobileMenuDrawer

역할:

- 모바일 카테고리 메뉴 표시
- 메뉴 닫기 처리

Component type:

- Client Component

분리 시점:

- 모바일 메뉴 구현 시

## 4. 분리 순서

1. HeaderLogo 분리
2. HeaderNavigation 분리
3. HeaderActions 분리
4. HeaderSearch 분리
5. MobileMenuButton / MobileMenuDrawer 분리

## 5. 변경 금지 사항

- 기존 className 임의 변경 금지
- 기존 레이아웃 구조 변경 금지
- Header 외 다른 섹션 수정 금지
- 디자인 변경 금지
- 기능 추가 금지

## 6. 검증 방법

- 메인 페이지 Header 시각 비교
- 데스크톱 레이아웃 확인
- 모바일 레이아웃 확인
- 링크 동작 확인
- console error 확인
- `pnpm lint`
- `pnpm build`
