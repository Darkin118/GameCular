// ⭐ 발급받은 실제 API 키를 여기에 입력하세요.
const API_KEY = "d6756424932b4fe2b4092a1b64e6204f"; 

// 요청 URL 정의 (키를 포함하며, 예시로 20개의 게임만 요청)
const RAWG_URL = `https://api.rawg.io/api/games?key=d6756424932b4fe2b4092a1b64e6204f
&page_size=20`;

function displayGameList(games) {
    // 1. 목록을 표시할 HTML 요소를 가져옵니다.
    const container = document.getElementById('game-list-container');
    
    // 이전에 표시된 내용이 있다면 지우고, 총 개수를 표시합니다.
    container.innerHTML = '<h2>API에서 가져온 게임 목록 (' + games.length + '개)</h2>';
    
    // 2. 게임 목록 배열(games)을 하나씩 순회합니다.
    games.forEach(game => {
        // 3. 각 게임마다 새로운 div를 만듭니다.
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card-item'); // CSS 스타일을 위해 클래스 추가

        // RAWG 데이터 구조에 맞게 제목과 장르를 표시합니다.
        // 장르 배열(game.genres)을 문자열로 변환합니다.
        const genres = game.genres.map(g => g.name).join(', ');

        gameCard.innerHTML = `
            <h3 style="margin-bottom: 5px;">${game.title}</h3>
            <p style="color: gray; font-size: 0.9em;">장르: ${genres || '정보 없음'}</p>
        `;

        // 4. 만든 게임 카드를 목록 컨테이너에 삽입합니다.
        container.appendChild(gameCard);
    });
}
function loadAndDisplayGames() {
    fetch(RAWG_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const gameList = data.results; 
            
            // 데이터가 도착하면 실행할 함수 호출
            displayGameList(gameList); 
        })
        .catch(error => {
            console.error("데이터 로딩 오류:", error);
        });
}
// API로부터 데이터를 가져오는 함수
function fetchGameData() {
    fetch(RAWG_URL)
        .then(data => {
        // API 서버에서 받아온 실제 게임 목록 배열은 data.results 안에 있습니다.
        const gameList = data.results; 
    
        // console.log("API로부터 가져온 게임 목록:", gameList.length); // 콘솔 출력 (이건 이제 필요 없지만 디버깅용으로 둡니다)

        // ⭐⭐ 새로 만든 함수를 여기서 호출해야 합니다! ⭐⭐
        displayGameList(gameList);

        // TODO: 여기에 추천 로직 실행 함수를 호출할 수 있습니다.
    })
    .catch(error => {
        // ... 오류 처리
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

// script.js 파일 내부에 추가

function displayGameList(games) {
    // 1. 목록을 표시할 HTML 요소를 가져옵니다.
    const container = document.getElementById('game-list-container');
    
    // 이전에 표시된 내용이 있다면 지우고, 총 개수를 표시합니다.
    container.innerHTML = '<h2>API에서 가져온 게임 목록 (' + games.length + '개)</h2>';
    
    // 2. 게임 목록 배열(games)을 하나씩 순회합니다.
    games.forEach(game => {
        // 3. 각 게임마다 새로운 div를 만듭니다.
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card-item'); // CSS 스타일을 위해 클래스 추가

        // RAWG 데이터 구조에 맞게 제목과 장르를 표시합니다.
        // 장르 배열(game.genres)을 문자열로 변환합니다.
        const genres = game.genres.map(g => g.name).join(', ');

        gameCard.innerHTML = `
            <h3 style="margin-bottom: 5px;">${game.title}</h3>
            <p style="color: gray; font-size: 0.9em;">장르: ${genres || '정보 없음'}</p>
        `;

        // 4. 만든 게임 카드를 목록 컨테이너에 삽입합니다.
        container.appendChild(gameCard);
    });
}
loadAndDisplayGames();