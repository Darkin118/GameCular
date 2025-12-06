// script.js 파일 최상단에 추가
let ALL_GAMES = []; // API에서 받아온 전체 게임 목록을 저장할 변수

// ⭐ 발급받은 실제 API 키를 여기에 입력하세요.
const API_KEY = "d6756424932b4fe2b4092a1b64e6204f"; 

// 요청 URL 정의 (키를 포함하며, 예시로 20개의 게임만 요청)
const RAWG_URL = `https://api.rawg.io/api/games?key=d6756424932b4fe2b4092a1b64e6204f
&page_size=20`;

const GENRE_TRANSLATIONS = {
    "Action": "액션",
    "Indie": "인디",
    "Adventure": "어드벤처",
    "RPG": "롤플레잉 (RPG)",
    "Strategy": "전략",
    "Shooter": "슈팅",
    "Puzzle": "퍼즐",
    "Simulation": "시뮬레이션",
    "Platformer": "플랫폼",
    // 여기에 더 많은 장르 번역을 추가하세요.
};

function displayGameList(games){
    const container = document.getElementById('game-list-container');
    
    // 이전 목록 초기화 및 제목 표시
    container.innerHTML = '<h2>총 ' + games.length + '개의 게임 목록을 불러왔습니다.</h2>';
    
games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card-item'); 

        // 1. 장르 목록을 가져와 태그 형태로 만듭니다.
        // 장르가 복수일 수 있으므로 배열을 순회하여 HTML 문자열로 만듭니다.
        const genreTags = game.genres.map(g => 
            `<span class="genre-tag">${g.name}</span>`
        ).join(''); // 태그들을 하나의 문자열로 합칩니다.

        // 2. HTML 구조를 삽입합니다. (이미지 태그와 정보 포함)
        gameCard.innerHTML = `
            <div class="game-thumbnail">
                <img src="${game.background_image || 'placeholder.png'}" alt="${game.title} 표지">
                </div>
            <div class="game-info">
                <h3>${game.title}</h3>
                <p>${genreTags || '장르 정보 없음'}</p>
            </div>
        `;

        container.appendChild(gameCard);
    });
}
function loadAndDisplayGames() {
    // 버튼 비활성화 (로딩 중)
    document.getElementById('recommend-btn').disabled = true;

    fetch(RAWG_URL)
        .then(response => {
            // ⭐⭐⭐ 가장 중요한 방어 코드입니다! ⭐⭐⭐
            if (!response.ok) {
                // 401, 403 등 오류 발생 시 바로 Error를 던져 catch 블록으로 이동시킵니다.
                // 이 코드가 없으면 .json() 변환이나 다음 .then()에서 오류가 납니다.
                throw new Error(`API 통신 실패: 상태 코드 ${response.status}. 키나 주소를 확인하세요.`);
            }
            return response.json();
        })
        .then(data => {
            // ⭐⭐⭐ ALL_GAMES에 안전하게 할당 ⭐⭐⭐
            // data.results가 없을 경우를 대비하여 빈 배열([])을 할당합니다.
            ALL_GAMES = data.results || []; 
            
            console.log(`총 ${ALL_GAMES.length}개의 게임 데이터를 메모리에 로드했습니다.`);
            
            // 데이터 로드 성공 시에만 버튼 활성화
            if (ALL_GAMES.length > 0) {
                document.getElementById('recommend-btn').disabled = false;
                document.getElementById('genre-name').innerText = "추천 장르를 선택하고 버튼을 누르세요.";
            } else {
                 document.getElementById('genre-name').innerText = "데이터는 불러왔으나, 목록이 비어 있습니다.";
            }
        })
        .catch(error => {
            // 네트워크 오류든, throw된 오류든 여기서 모두 처리합니다.
            console.error("치명적인 데이터 로딩 오류 발생:", error.message);
            
            // 실패 시 버튼은 계속 비활성화합니다.
            document.getElementById('genre-name').innerText = `[로딩 실패] ${error.message}`;
            document.getElementById('recommend-btn').disabled = true;
        });
}
function recommendGame() {
    const moodSelect = document.getElementById('mood-select');
    const selectedMood = moodSelect.value;
    
    // moodSelect가 없는 경우를 방어
    if (!moodSelect || !selectedMood) {
        document.getElementById('genre-name').innerText = "분위기 선택이 필요합니다.";
        return;
    }

    // 1. 선택된 무드에 따라 필터링할 장르를 결정합니다.
    // **TODO: 이 로직을 더 복잡하게 만드세요!**
    let targetGenre = '';
    if (selectedMood === "action") targetGenre = "Action";
    else if (selectedMood === "adventure") targetGenre = "Adventure";
    else if (selectedMood === "story") targetGenre = "RPG"; 
    else if (selectedMood === "relax") targetGenre = "Simulation";

    // 2. 전체 게임 목록에서 타겟 장르를 포함하는 게임을 필터링합니다.
    const filteredGames = ALL_GAMES.filter(game => {
        // game.genres가 존재하고 배열이며, targetGenre를 포함하는지 확인
        return Array.isArray(game.genres) && game.genres.some(genre => genre.name === targetGenre);
    });

    // 3. 필터링된 게임 중 무작위로 하나를 선택합니다. (더 나은 추천을 위해)
    let recommendedGame = null;
    if (filteredGames.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredGames.length);
        recommendedGame = filteredGames[randomIndex];
    }

    // 4. 결과 표시
    if (recommendedGame) {
        // 성공 시 로직
        document.getElementById('genre-name').innerText = `선택하신 분위기에 따라 [${GENRE_TRANSLATIONS[targetGenre] || targetGenre}] 게임을 추천합니다.`;
        displayRecommendation(recommendedGame);
    } else {
        // ⭐ 실패 시 로직: displayRecommendation 함수를 호출하지 않습니다! ⭐
        document.getElementById('genre-name').innerText = `죄송합니다. [${GENRE_TRANSLATIONS[targetGenre] || targetGenre}] 장르의 게임을 찾지 못했습니다. 목록이 비어 있습니다.`;
        // 결과 영역을 숨깁니다.
        document.getElementById('result-area').classList.add('hidden');
    }
}

// script.js 파일에 추가
function displayRecommendation(game) {
    const resultArea = document.getElementById('result-area');
    
    // 장르 배열을 깔끔한 문자열로 변환합니다.
    const genres = Array.isArray(game.genres) 
        ? game.genres.map(g => GENRE_TRANSLATIONS[g.name] || g.name).join(', ') 
        : '장르 정보 없음';

    // 만약 resultArea가 null이면 여기서 함수 실행을 중단합니다. (안전 코드)
    if (!resultArea) {
        console.error("오류: 'result-area' 요소를 찾을 수 없습니다. index.html의 ID를 확인하세요.");
        return; 
    }

    resultArea.classList.remove('hidden');

    resultArea.innerHTML = `
        <h2>🎉 최종 추천 게임: ${game.title}</h2>
        <div style="display:flex; align-items: center; margin-top: 20px;">
            <div class="final-thumbnail">
                <img src="${game.background_image || 'placeholder.png'}" 
                     alt="${game.title} 표지">
            </div>
            <div class="final-info">
                <p style="font-size: 1.1em; color: #4CAF50;">#${game.title} #${genres.split(',')[0].trim()}</p>
                <p>장르: ${genres}</p>
                <p style="color: gray; font-size: 0.9em;">
                    (이곳에 게임 설명 등을 추가하세요.)
                </p>
            </div>
        </div>
    `;
}

// script.js 파일 맨 아래에 추가
// DOMContentLoaded 이벤트 리스너를 사용하여 HTML 요소가 모두 로드된 후 실행되도록 보장
document.addEventListener('DOMContentLoaded', function() {
    // 1. 페이지 로드 시 API 데이터 로드 함수 호출
    loadAndDisplayGames(); 

    // 2. 버튼 클릭 이벤트 연결
    const recommendBtn = document.getElementById('recommend-btn');
    if (recommendBtn) { // 버튼 요소가 존재하는지 확인
        recommendBtn.addEventListener('click', recommendGame);
    }
});