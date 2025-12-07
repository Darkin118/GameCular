# 🎮 GameCular - 게임 추천 시스템

RAWG API를 활용한 설문 기반 게임 추천 웹 애플리케이션

## 📋 프로젝트 개요

사용자의 게임 선호도를 4가지 질문으로 파악하여 최적의 게임을 추천하는 시스템입니다.

## ✨ 주요 기능

- 📊 4가지 설문 항목을 통한 사용자 취향 분석
- 🎯 실시간 RAWG API 연동으로 최신 게임 데이터 제공
- 🎨 반응형 디자인으로 모바일/데스크톱 지원
- ⭐ 게임 평점, 플랫폼, 출시일 등 상세 정보 표시

## 🛠️ 사용 기술

- **HTML5**: 구조 및 마크업
- **CSS3**: 스타일링 (그라디언트, 애니메이션, 반응형 디자인)
- **JavaScript (Vanilla JS)**: 동적 기능 구현
- **RAWG API**: 게임 데이터베이스

## 🎯 설문 로직

| 질문 | 연관 장르 |
|------|-----------|
| 빠른 액션과 스릴 | Action, Shooter, Fighting |
| 탐험과 새로운 세계 | Adventure, Platformer |
| 깊은 스토리와 전략 | RPG, Strategy |
| 편안하고 가벼운 플레이 | Simulation, Casual, Puzzle, Family |

## 📂 프로젝트 구조
```
GameCular/
├── index.html          # 메인 파일 (HTML + CSS + JS 통합)
├── README.md           # 프로젝트 설명서
└── archive/            # 개발 과정 파일 (선택사항)
    ├── styles.css      # 구버전 CSS
    ├── script.js       # 구버전 JS
    └── games.json      # 구버전 더미 데이터
```

## 🚀 실행 방법

1. `index.html` 파일을 웹 브라우저에서 열기
2. 또는 Live Server 등으로 로컬 서버 실행
```bash
# VS Code Live Server 사용 시
# index.html 우클릭 → Open with Live Server
```

## 🔧 개발 과정

### 초기 기획
- React, Node.js 등 프레임워크 사용 고려
- 복잡한 백엔드 구조 설계

### 최종 결정
- **Vanilla JavaScript로 단순화**
- 이유:
  - 프로젝트 규모에 적합한 기술 스택 선택
  - 빠른 프로토타이핑 및 배포
  - 추가 빌드 도구 없이 즉시 실행 가능
  - 학습 곡선 최소화

### 주요 변경사항
1. ~~정적 JSON 파일~~ → **RAWG API 실시간 연동**
2. ~~파일 분리 구조~~ → **단일 HTML 파일**
3. ~~복잡한 상태 관리~~ → **간단한 변수 기반 관리**

## 📊 API 정보

- **API**: RAWG Video Games Database API
- **엔드포인트**: `https://api.rawg.io/api/games`
- **문서**: https://rawg.io/apidocs

## 🎨 디자인 특징

- 그라디언트 배경 (보라색 계열)
- 카드 기반 UI
- 호버 효과 및 부드러운 전환
- 반응형 레이아웃

## 📈 향후 개선 계획

- [ ] 게임 상세 정보 모달 추가
- [ ] 추천 히스토리 저장 기능
- [ ] 더 많은 설문 항목 추가
- [ ] 소셜 공유 기능
- [ ] 다크모드 지원

## 👤 개발자

윤인성

## 📝 라이선스

MIT License

---

**Made with ❤️ using RAWG API**