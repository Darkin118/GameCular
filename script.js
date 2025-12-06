// ⭐ 발급받은 실제 API 키를 여기에 입력하세요.
const API_KEY = "여기에_발급받은_키_문자열을_붙여넣으세요"; 

// 요청 URL 정의 (키를 포함하며, 예시로 20개의 게임만 요청)
const RAWG_URL = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=20`;

// API로부터 데이터를 가져오는 함수
function fetchGameData() {
    fetch(RAWG_URL)
        .then(response => {
            // 응답이 정상인지 확인 (404, 500 에러 등을 걸러냄)
            if (!response.ok) {
                throw new Error('API 서버 통신에 문제가 발생했습니다. (Status: ' + response.status + ')');
            }
            return response.json(); // 응답을 JSON 형식으로 변환
        })
        .then(data => {
            // ✅ 성공! data.results에 게임 목록 배열이 들어 있습니다.
            const gameList = data.results; 
            console.log("API로부터 가져온 게임 목록 (총 개수):", gameList.length);
            
            // ⭐ TODO: 여기에 추천 로직 실행 함수를 호출합니다.
            // runRecommendationLogic(gameList); 
        })
        .catch(error => {
            // 에러 발생 시 처리
            console.error("데이터를 가져오는 중 치명적인 오류 발생:", error);
        });
}

// 웹사이트가 로드될 때 데이터를 가져오도록 함수 호출
fetchGameData();
document.getElementById('recommend-btn').addEventListener('click', function() {
    // 1. 사용자가 선택한 값 가져오기
    const mood = document.getElementById('mood-select').value;
    
    let genre = "";
    let desc = "";

    // 2. 선택에 따라 장르 정하기 (규칙 기반)
    if (mood === "action") {
        genre = "액션 RPG";
        desc = "스트레스를 날려버릴 화려한 스킬과 타격감!";
    } else if (mood === "story") {
        genre = "인터랙티브 무비 / 어드벤처";
        desc = "영화 같은 연출과 깊이 있는 스토리에 빠져보세요.";
    } else if (mood === "relax") {
        genre = "힐링 시뮬레이션 (동물의 숲 등)";
        desc = "경쟁 없이 나만의 공간을 꾸미며 힐링하세요.";
    } else if (mood === "brain") {
        genre = "전략 / 퍼즐";
        desc = "당신의 지능을 시험해보세요. 승리는 계획된 자의 것!";
    }

    // 3. 화면에 결과 보여주기
    const resultArea = document.getElementById('result-area');
    document.getElementById('genre-name').innerText = genre;
    document.getElementById('genre-desc').innerText = desc;
    
    // 숨겨져 있던 결과창을 보이게 하기
    resultArea.classList.remove('hidden');
});