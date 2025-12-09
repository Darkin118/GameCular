# 🔭 GameCular - 우주 망원경 테마 게임 추천 시스템

설문 기반으로 사용자 취향에 맞는 게임을 추천하는 웹 애플리케이션

[![Live Demo](https://img.shields.io/badge/Live-Demo-blueviolet?style=for-the-badge)](https://본인사용자명.github.io/GameCular/)

---

## 🌌 프로젝트 개요

GameCular는 우주를 관측하는 망원경처럼 사용자에게 완벽한 게임을 찾아주는 추천 시스템입니다. 
4가지 설문 문항을 통해 사용자의 게임 취향을 분석하고, RAWG API를 활용하여 실시간으로 최적의 게임을 추천합니다.

---

## 👨‍💻 개발자 소개

**윤인성**

- 🎓 서울사이버대학교 빅데이터·정보보호학과 재학
- 🌟 AWS 클라우드 서비스를 활용한 첫 포트폴리오 프로젝트
- 💡 교수님의 강의와 대화형 AI(Claude)의 도움을 받아 제작
- 🚀 지속적인 개선과 학습을 통해 발전해 나가는 중

### 💭 개발 동기

AWS 클라우드 서비스를 이용한 웹 개발은 처음이었지만, 수업에서 배운 내용을 실제로 적용해보고 싶었습니다. 
대화형 인공지능의 도움을 받아가며 하나씩 구현해나가는 과정에서 많은 것을 배울 수 있었습니다.

---

## ✨ 주요 기능

### 📊 스마트 추천 시스템
- 4가지 설문 항목을 통한 사용자 취향 분석
- 액션, 모험, 전략, 휴식형 등 다양한 장르 지원
- 중복 방지 기능으로 매번 새로운 게임 추천

### 🎮 실시간 게임 데이터
- RAWG API 연동으로 최신 게임 정보 제공
- 게임 평점, 출시일, 플랫폼 정보 표시
- 고화질 게임 이미지 제공

### 🌌 우주 망원경 테마
- 우주를 배경으로 한 독특한 디자인
- 애니메이션 별 효과
- 네온 글로우와 글래스모피즘 UI
- 반응형 디자인으로 모바일/데스크톱 지원

---

## 🛠️ 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업
- **CSS3**: 
  - CSS Grid & Flexbox 레이아웃
  - 키프레임 애니메이션
  - 글래스모피즘 효과
  - 반응형 디자인
- **JavaScript (Vanilla)**: 
  - ES6+ 문법
  - Fetch API
  - DOM 조작
  - 이벤트 핸들링

### API & Services
- **RAWG API**: 게임 데이터베이스
- **AWS**: 호스팅 (예정)
- **GitHub Pages**: 배포

### Design
- **Google Fonts**: Gowun Batang, Noto Sans KR
- **Color Scheme**: 우주 테마 (보라/남색 계열)

---

## 📋 설문 로직

사용자의 응답에 따라 가장 높은 점수를 받은 카테고리의 게임을 추천합니다.

| 질문 | 연관 장르 | 특징 |
|------|-----------|------|
| 빠르고 화려한 액션 | Action, Shooter, Fighting | 박진감 넘치는 전투 |
| 탐험과 모험 | Adventure, Platformer | 미지의 세계 발견 |
| 전략과 스토리 | RPG, Strategy | 깊이 있는 게임플레이 |
| 편안한 휴식 | Simulation, Casual, Puzzle, Family | 힐링 게임 |

---

## 📂 프로젝트 구조
```
GameCular/
├── index.html              # 메인 파일 (HTML + CSS + JS 통합) ⭐
├── README.md               # 프로젝트 설명서
└── archive/                # 개발 과정 파일 (참고용)
    ├── README.md           # 버전별 변경 내역
    ├── v1-index.html       # 초기 HTML
    ├── styles.css          # 분리된 CSS (v1)
    ├── script.js           # 분리된 JS (v1)
    └── games.json          # 더미 데이터 (v1)
```

> 💡 **Tip**: 실제 사용 시에는 루트의 `index.html` 파일만 열면 됩니다!

---

## 🚀 실행 방법

### 1. 로컬에서 실행

#### 방법 A: 브라우저로 바로 열기
```bash
# 파일 탐색기에서 index.html 더블클릭
# 또는
open index.html  # Mac
start index.html # Windows
```

#### 방법 B: Live Server 사용 (권장)
```bash
# VS Code Extension 설치
# index.html 우클릭 → Open with Live Server
```

#### 방법 C: Python 서버
```bash
# Python 3 사용
python -m http.server 8000

# 브라우저에서 http://localhost:8000 접속
```

### 2. GitHub Pages 배포
```bash
# 1. GitHub 저장소로 이동
https://github.com/본인사용자명/GameCular

# 2. Settings → Pages
# 3. Branch: main 선택
# 4. Save 클릭

# 배포된 URL:
# https://본인사용자명.github.io/GameCular/
```

---

## 🔄 개발 히스토리

### Phase 1: 프로토타입 (v1.0)
**기간**: 초기 개발

**특징**:
- 파일 분리 구조 (HTML, CSS, JS 분리)
- 정적 JSON 데이터 사용
- 기본적인 UI/UX

**기술 스택**:
- 전통적인 파일 구조
- 더미 게임 데이터

### Phase 2: API 통합 (v1.5)
**개선사항**:
- RAWG API 연동
- 실시간 게임 데이터 로딩
- 에러 처리 추가

### Phase 3: 디자인 리뉴얼 (v2.0) ⭐ 현재
**기간**: 최종 버전

**주요 변경사항**:
- 🌌 **우주 망원경 테마** 적용
- 🔭 망원경 이모지 브랜딩
- ✨ 애니메이션 별 배경
- 💎 글래스모피즘 UI
- 🎨 보라/남색 네온 색상
- 📏 문항 간격 80px로 확대
- 🚫 중복 게임 추천 방지
- 📱 완전한 반응형 디자인

**기술적 개선**:
- 단일 HTML 파일로 통합
- 폴백 시스템 (API 실패 시 더미 데이터)
- 향상된 사용자 경험

자세한 개발 과정은 [`archive/README.md`](./archive/README.md) 참고

---

## 📊 API 정보

### RAWG Video Games Database API

**엔드포인트**: `https://api.rawg.io/api/games`

**사용된 파라미터**:
- `key`: API 인증 키
- `page_size`: 40 (한 번에 가져올 게임 수)
- `ordering`: -rating (평점 높은 순 정렬)

**공식 문서**: https://api.rawg.io/docs

**API 키 발급**: https://rawg.io/login?forward=developer

### API 사용 예시
```javascript
const API_KEY = "your_api_key_here";
const url = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&ordering=-rating`;

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data.results));
```

---

## 🎨 디자인 특징

### 🌌 우주 테마
- **배경**: 다층 그라디언트로 깊은 우주 표현
- **별**: CSS 애니메이션으로 움직이는 별들
- **색상**: 보라/남색 계열의 우주적 느낌

### 💎 글래스모피즘
- 반투명 배경 (`backdrop-filter: blur()`)
- 부드러운 그림자
- 네온 테두리 효과

### ✨ 인터랙션
- 호버 시 떠오르는 효과
- 선택 시 글로우 효과
- 부드러운 트랜지션

---

## 📈 향후 개선 계획

- [ ] 게임 상세 정보 모달 추가
- [ ] 사용자 추천 히스토리 저장 (localStorage)
- [ ] 게임 즐겨찾기 기능
- [ ] 소셜 공유 기능
- [ ] 더 많은 설문 항목 추가
- [ ] 다크모드/라이트모드 토글
- [ ] 다국어 지원 (영어)
- [ ] PWA(Progressive Web App) 전환

---

## 🐛 알려진 이슈

### API 관련
- CORS 정책으로 인해 로컬에서 `file://` 프로토콜로 열 시 API 호출 실패
  - **해결**: Live Server 사용 또는 GitHub Pages 배포

### 브라우저 호환성
- Internet Explorer 미지원
- 최신 Chrome, Firefox, Safari, Edge 권장

---

## 💻 개발 환경

- **OS**: Windows / macOS / Linux
- **Editor**: VS Code
- **Browser**: Chrome 120+
- **Node.js**: 필요 없음 (Vanilla JavaScript)

---

## 📝 라이선스

MIT License

---

## 🙏 감사의 말

- **교수님**: 프로젝트 방향성과 AWS 강의 제공
- **Claude AI**: 개발 과정 전반에 걸친 기술 지원
- **RAWG API**: 풍부한 게임 데이터 제공
- **서울사이버대학교**: 학습 기회 제공

---

## 📞 문의

프로젝트에 대한 질문이나 제안사항이 있으시면 GitHub Issues를 통해 연락 주세요!

---

**Made with 🔭 and 💜 by 윤인성**

*"우주를 관측하듯, 완벽한 게임을 찾아드립니다"*