# 🔭 GameCular

사용자 선호도 기반 게임 추천 웹 서비스

![GameCular](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![RAWG API](https://img.shields.io/badge/RAWG-API-FF6600?style=flat-square)

## 📖 프로젝트 소개

GameCular는 사용자의 게임 선호도를 분석하여 맞춤형 게임을 추천해주는 웹 서비스입니다. 
간단한 설문을 통해 사용자의 취향을 파악하고, RAWG API를 활용하여 실시간으로 최적의 게임을 추천합니다.

## ✨ 주요 기능

- 🎮 **플랫폼 선택**
  - 원하는 플랫폼 선택 가능 (여러 개 동시 선택)
  - 7개 플랫폼 지원: 전체, PC, PlayStation, Xbox, Nintendo, iOS, Android
  - 선택한 플랫폼에서만 게임 추천
  - 직관적인 버튼 UI

- 🎮 **4가지 질문 기반 성향 분석**
  - 액션 선호도
  - 모험/탐험 성향
  - 전략/스토리 중시도
  - 캐주얼/힐링 선호도

- 🎯 **맞춤형 게임 추천**
  - 액션 헌터 (Action, Shooter, Fighting)
  - 모험가 (Adventure, Platformer)
  - 전략가 (RPG, Strategy)
  - 힐링 마스터 (Simulation, Casual, Puzzle, Family)

- 🔄 **중복 방지 시스템**
  - 이미 추천받은 게임은 제외
  - 다양한 게임 경험 제공
  - 모든 게임 추천 후 자동 초기화

- 💾 **안정적인 대체 데이터**
  - API 장애 시 자동으로 대체 데이터 사용
  - 5초 타임아웃 설정

- 🎬 **트레일러 링크 제공**
  - 추천된 게임의 트레일러를 YouTube에서 바로 확인
  - 게임 구매 전 미리보기 가능

- 📊 **선택 내용 표시**
  - 추천 결과에 사용자가 선택한 설문 응답 표시
  - 각 항목별 점수와 선택지 확인 가능
  - 추천 근거 투명성 제공

- 📱 **모바일 반응형 디자인**
  - 모바일, 태블릿, 데스크톱 모두 지원
  - 터치 친화적인 UI

## 🛠️ 기술 스택

### Frontend
- **[HTML5](https://developer.mozilla.org/ko/docs/Web/HTML)**: 시맨틱 마크업
- **[CSS3](https://developer.mozilla.org/ko/docs/Web/CSS)**: 
  - Flexbox & Grid 레이아웃
  - CSS 애니메이션 (별 효과)
  - 그라데이션 & 블러 효과
  - 반응형 디자인 (Mobile First)
  - 미디어 쿼리 활용
- **[JavaScript (ES6+)](https://developer.mozilla.org/ko/docs/Web/JavaScript)**:
  - Fetch API
  - Promise 비동기 처리
  - DOM 조작
  - 이벤트 핸들링
  - 중복 방지 로직

### API
- **[RAWG Video Games Database API](https://rawg.io/apidocs)**
  - 실시간 게임 데이터
  - 평점 기반 정렬
  - 장르 필터링

### Fonts
- **Gowun Batang** (제목용 한글 폰트)
- **Noto Sans KR** (본문용 한글 폰트)

## 📁 프로젝트 구조

```
gamecular/
├── index.html                    # 메인 HTML 파일
└── README.md                     # 프로젝트 문서
```

## 🚀 시작하기

### 1. 파일 다운로드
```bash
git clone https://github.com/yourusername/gamecular.git
cd gamecular
```

### 2. 로컬 실행
```bash
# 방법 1: Python 간단한 서버
python -m http.server 8000

# 방법 2: VS Code Live Server 확장 사용
# 방법 3: 브라우저에서 HTML 파일 직접 열기
```

## 🎮 사용 방법

1. **웹사이트 접속**
   - 로컬: `http://localhost:8000`

2. **플랫폼 선택**
   - 원하는 게임 플랫폼 선택 (기본: 전체 플랫폼)
   - 여러 플랫폼 동시 선택 가능
   - 선택/해제 자유롭게 가능

3. **설문 작성**
   - 4가지 질문에 대해 1~5점 척도로 응답
   - 기본값: 모두 3점 (보통)

4. **게임 추천 받기**
   - "추천 받기" 버튼 클릭
   - 선택한 설문 내용 확인
   - 성향에 맞는 게임 확인
   - 트레일러 링크로 게임 영상 확인
   - "다른 게임 추천받기" 버튼으로 추가 추천

5. **반복 사용**
   - 설문 내용 변경 후 다시 추천 가능
   - 같은 장르 내에서 중복 없이 추천
   - 모든 게임 추천 후 자동으로 처음부터 다시 시작

## 🔧 API 설정

### RAWG API Key 발급
1. [RAWG.io](https://rawg.io/apidocs) 접속
2. 회원가입 후 API Key 발급
3. HTML 파일에서 API Key 교체:

```javascript
const API_KEY = "your-api-key-here";
```

## 💡 주요 기능 설명

### 1. 성향 분석 알고리즘
```javascript
// 4가지 질문의 점수를 비교하여 가장 높은 점수의 성향 선택
const scores = {
    action: q1_score,
    adventure: q2_score,
    story: q3_score,
    relax: q4_score
};
// 최고 점수 성향에 따라 해당 장르 게임 추천
```

### 2. 게임 필터링
- 선택된 성향의 장르와 매칭되는 게임만 필터링
- 선택된 플랫폼의 게임만 필터링
- 평점 3.5 이상의 게임만 추천
- 이미 추천한 게임 제외 (RECOMMENDED_GAMES 배열 사용)

### 3. 플랫폼 선택 시스템
```javascript
// 플랫폼 필터링 로직
if (!SELECTED_PLATFORMS.includes('all')) {
    filteredGames = filteredGames.filter(g => {
        return g.platforms.some(p => {
            return SELECTED_PLATFORMS.some(selected => 
                p.platform.name.includes(selected)
            );
        });
    });
}
```

### 4. 중복 방지 시스템
```javascript
// 이미 추천한 게임 이름을 배열에 저장
RECOMMENDED_GAMES.push(selectedGame.name);

// 필터링 시 제외
.filter(g => !RECOMMENDED_GAMES.includes(g.name));
```

### 5. 오류 처리
- API 실패 시 자동으로 대체 게임 데이터 사용
- 5초 타임아웃으로 무한 대기 방지
- 사용자에게 친절한 오류 메시지 제공

### 6. 트레일러 링크
- YouTube 검색 URL 자동 생성
- 게임 이름 + "trailer" 키워드로 검색
- 새 탭에서 열림

### 7. 선택 내용 표시
- 추천 결과 상단에 사용자 선택 내용 표시
- 4가지 질문에 대한 응답 (점수 + 레이블)
- 추천 근거의 투명성 제공
```javascript
// 예시 출력
액션 선호도: 매우 그렇다 (5점)
모험/탐험 성향: 그렇다 (4점)
전략/스토리 중시도: 보통이다 (3점)
캐주얼/힐링 선호도: 아니다 (2점)
```

## 🎨 디자인 특징

### 우주 테마
- 별이 반짝이는 애니메이션 배경
- 황금색 별빛 효과
- 그라데이션을 활용한 깊이감
- 블러 효과로 몽환적인 분위기

### 반응형 디자인
- **데스크톱 (1024px+)**: 사이드바 + 메인 컨텐츠 (2단 레이아웃)
- **태블릿/모바일 (768px 이하)**: 세로 스크롤 (1단 레이아웃)
- 터치 친화적인 버튼 크기
- 모바일에서도 읽기 쉬운 폰트 크기

### 사용자 경험 (UX)
- 호버 효과로 인터랙션 피드백
- 부드러운 트랜지션 애니메이션
- 명확한 시각적 피드백
- 클릭 가능한 링크에 밑줄 효과

### 인터랙티브 요소
- 플랫폼 선택 버튼 (클릭으로 선택/해제)
- 기술 스택 배지 클릭 시 공식 문서로 이동
- 학교 이름 클릭 시 학교 홈페이지로 이동
- 트레일러 버튼으로 YouTube 검색

## 📊 성능 최적화

- CSS 애니메이션 GPU 가속 활용
- 폰트 로딩 최적화 (preconnect 사용)
- 반응형 이미지 처리
- 효율적인 DOM 조작

## 🐛 알려진 이슈

1. **CORS 이슈**
   - 로컬 환경에서 file:// 프로토콜 사용 시 발생 가능
   - 해결: 로컬 서버 사용 권장

## 🔜 향후 개발 계획

- [ ] 게임 상세 정보 모달 추가
- [ ] 즐겨찾기 기능
- [ ] 사용자 리뷰 시스템
- [ ] 친구에게 공유하기
- [ ] 다국어 지원 (영어)
- [ ] 다크모드 / 라이트모드 토글
- [ ] 게임 검색 기능
- [ ] 출시년도 필터 추가
- [ ] PWA (Progressive Web App) 지원

## 👨‍💻 개발자 정보

**윤인성**
- 소속: [서울사이버대학교](https://www.iscu.ac.kr/) 빅데이터-정보보호학과 재학
- 프로젝트: 웹 개발 포트폴리오
- 지원: 교수님 강의 + Claude AI 협업

## 📝 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

- RAWG API: [RAWG Terms of Service](https://rawg.io/apidocs) 준수
- 폰트: Google Fonts (Open Font License)

## 🙏 감사의 말

- RAWG.io - 훌륭한 게임 데이터베이스 API 제공
- Anthropic Claude - 개발 지원 및 코드 리뷰
- 교수님 - 프로젝트 지도
- Google Fonts - 아름다운 한글 폰트 제공
- MDN Web Docs - 웹 개발 참고 자료

## 📞 문의

프로젝트에 대한 질문이나 제안사항이 있으시면 이슈를 등록해주세요!

---

이 프로젝트가 도움이 되셨다면 Star를 눌러주세요!