# AGENTS.md

## Project

GiftPet Renewal MVP는 기존 PHP 기반 B2B 반려동물 쇼핑몰을 Next.js + TypeScript 기반으로 리뉴얼하는 포트폴리오 프로젝트입니다.

이 프로젝트는 전체 쇼핑몰 기능 구현이 아니라, 메인 / 상품 목록 / 상품 상세 페이지 중심의 상품 탐색 경험 개선을 목표로 합니다.

## Read first

작업 전 아래 문서를 먼저 확인하세요.

- `docs/project-brief.md`: 프로젝트 목적, 대상 사이트, 1차 목표, 제외 범위
- `docs/requirements.md`: MVP 페이지와 페이지별 요구사항
- `docs/verification.md`: 작업 후 검증 기준
- `docs/progress.md`: 현재 진행 상태와 다음 작업
- `docs/workflow-rules.md`: 작업 방식과 금지사항

Header 세부 분리 작업을 할 때만 아래 문서를 확인하세요.

- `docs/header-refactor-plan.md`

## Core rules

- 한 번에 하나의 작업만 수행합니다.
- 리팩토링과 디자인 변경을 섞지 않습니다.
- 기능 추가와 구조 분리를 섞지 않습니다.
- 사용자가 요청하지 않은 페이지는 수정하지 않습니다.
- className과 레이아웃을 임의로 변경하지 않습니다.
- 로그인, 회원가입, 장바구니, 결제, 주문, 관리자 기능은 MVP 제외 범위입니다.
- 작업 전 수정 파일 목록을 먼저 제안합니다.
- 작업 후 검증 방법을 제시합니다.
