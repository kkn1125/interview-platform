# Updates

## Server

## Client

- 2024.07.29
  - client
    - 프로필 및 번들 인터뷰 상세 페이지 제작
- 2024.07.21
  - server
    - init
      - 프로젝트 생성
    - feat
      - user, bundle, question 엔티티 작성
      - answer 엔티티 작성
      - user-profile 엔티티 추가
      - session 엔티티 추가
      - global interceptor 제작
      - global exception model 작성
      - global response format 작성
      - 유틸 함수 작성
      - 유틸함수 일부 테스트 코드 작성
      - 데이터베이스 환경변수 및 공통 변수 작성
      - 데이터베이스 연결 테스트
      - 커스텀 로거 제작 및 global logger 설정
      - bundle-question, interview-answer 다대다 관계 작성
      - 각 도메인별 모듈 imports typeorm module table 연결
    - bugfix
      - 다대다 관계 버그 수정
- 2024.07.20
  - client
    - fix
      - 인터뷰 질문 등록 페이지 수정
      - 라우터 수정
      - 헤더 메뉴 리스트 수정
      - 질문 리스트 카드 포맷 수정
    - add
      - 번들 카드 상세 페이지 제작 중
      - 유저 프로필 페이지 제작 중
      - 헤더 프로필 메뉴 추가
      - 커스텀 네비게이션 훅 작성
      - 인터뷰 목록 페이지 제작
      - 인터뷰 답변 등록 페이지 제작
      - 경로 합치기 함수 작성
      - 캐피탈라이즈 함수 작성
      - 현재로 부터 n초(분,시,일,월,연) 전 표기 함수 작성
- 2024-07-18
  - common
    - init
      - 초기화 커밋
  - client
    - init
      - client 프로젝트 생성
      - 랜딩페이지 제작
