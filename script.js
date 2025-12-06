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