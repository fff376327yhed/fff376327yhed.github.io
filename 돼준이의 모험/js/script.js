document.getElementById('start-game-button').addEventListener('click', startGame);
document.getElementById('options-button').addEventListener('click', showOptions);
document.getElementById('back-button').addEventListener('click', showMainMenu);
document.getElementById('mobile-optimization-button').addEventListener('click', optimizeForMobile);
document.getElementById('tutorial-button').addEventListener('click', showTutorial);

function startGame() {
    document.getElementById('main-menu').style.display = 'none';
    // 게임 시작 로직을 여기에 추가
    // document.getElementById('game-container').style.display = 'block';
}

function showOptions() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('options-menu').style.display = 'block';
}

function showMainMenu() {
    document.getElementById('options-menu').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
}

function optimizeForMobile() {
    document.body.style.fontSize = '1.2rem'; // 예시로 폰트 크기를 조정합니다.
    document.body.style.padding = '10px'; // 모바일에 맞게 여백을 줄입니다.
    alert('모바일 최적화가 적용되었습니다!');
}

function showTutorial() {
    alert('튜토리얼이 아직 구현되지 않았습니다.');
    // 튜토리얼 화면으로 이동하는 로직을 여기에 추가
}
