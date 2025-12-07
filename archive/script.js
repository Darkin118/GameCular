let ALL_GAMES = [];
const API_KEY = "d6756424932b4fe2b4092a1b64e6204f";
const RAWG_URL = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=20&ordering=-rating`;

const MOOD_TO_GENRES = {
    action: ["Action"],
    adventure: ["Adventure"],
    story: ["RPG","Strategy"],
    relax: ["Simulation","Casual","Puzzle"]
};

const GENRE_TRANSLATIONS = {
    "Action":"액션",
    "Indie":"인디",
    "Adventure":"어드벤처",
    "Strategy":"전략",
    "Shooter":"슈팅",
    "Puzzle":"퍼즐",
    "Simulation":"시뮬레이션",
    "Platformer":"플랫폼",
    "Casual":"캐주얼",
    "Arcade":"아케이드",
};

// 이미지 리사이즈
function getResizedImageUrl(originalUrl, width=300){
    if(!originalUrl || !originalUrl.includes('/media/')) return originalUrl;
    const idx = originalUrl.indexOf('/media/');
    return originalUrl.slice(0, idx+7) + `resize/${width}/-/` + originalUrl.slice(idx+7);
}

// API 데이터 로드
function loadGames(){
    fetch(RAWG_URL)
        .then(res=>res.json())
        .then(data=>{
            ALL_GAMES = data.results || [];
            console.log("ALL_GAMES sample:", ALL_GAMES.slice(0,5).map(g=>({name:g.name, genres:g.genres.map(gg=>gg.name)})));
        })
        .catch(err=>console.error("API 로딩 실패:", err));
}

// 설문 점수 기반 mood 결정
function calculateMood(){
    const scores = {
        action: parseInt(document.querySelector('input[name="q1"]:checked')?.value || 0),
        adventure: parseInt(document.querySelector('input[name="q2"]:checked')?.value || 0),
        story: parseInt(document.querySelector('input[name="q3"]:checked')?.value || 0),
        relax: parseInt(document.querySelector('input[name="q4"]:checked')?.value || 0)
    };

    let maxMood = "action", maxScore = scores.action;
    for(let mood in scores){
        if(scores[mood] > maxScore){
            maxMood = mood;
            maxScore = scores[mood];
        }
    }
    return maxMood;
}

// 게임 추천
function recommendGame(){
    const mood = calculateMood();
    const targetGenres = MOOD_TO_GENRES[mood];
    console.log("추천 mood:", mood, "targetGenres:", targetGenres);

    const filteredGames = ALL_GAMES
        .filter(g=>Array.isArray(g.genres)&&g.genres.length>0)
        .filter(g=>g.genres.some(gg=>targetGenres.some(tg=>tg.toLowerCase()===gg.name.toLowerCase())))
        .filter(g=>g.rating>=3.5);

    console.log("filteredGames:", filteredGames.map(g=>g.name));

    if(filteredGames.length===0){
        document.getElementById('genre-name').innerText = 
            `죄송합니다. [${targetGenres.map(g=>GENRE_TRANSLATIONS[g]||g).join(", ")}] 장르의 게임을 찾지 못했습니다.`;
        document.getElementById('result-area')?.classList.add('hidden');
        return;
    }

    const selectedGame = filteredGames[Math.floor(Math.random()*filteredGames.length)];
    displayRecommendation(selectedGame, targetGenres);
}

// 결과 표시
function displayRecommendation(game, genres){
    const resultArea = document.getElementById('result-area');
    const title = game.name;
    const genreStr = Array.isArray(game.genres)?game.genres.map(g=>GENRE_TRANSLATIONS[g.name]||g.name).join(', '):'장르 없음';
    const imgUrl = game.background_image || game.short_screenshots?.[0]?.image || 'placeholder.png';
    if(!resultArea) return;

resultArea.classList.remove('hidden');
    resultArea.innerHTML = `
        <div class="game-thumbnail">
            <img src="${imgUrl}" alt="${title} 표지">
        </div>
        <div class="game-info">
            <h2>🎉 추천 게임: ${title}</h2>
            <p>장르: ${genreStr}</p>
            <p style="color:gray;">(설명 또는 추가 정보)</p>
        </div>
    `;

    document.getElementById('genre-name').innerText = 
        `설문 결과에 따라 [${genres.map(g=>GENRE_TRANSLATIONS[g]||g).join(", ")}] 장르 게임을 추천합니다.`;
}

document.addEventListener('DOMContentLoaded',()=>{
    loadGames();
    document.getElementById('recommend-btn')?.addEventListener('click', recommendGame);
});