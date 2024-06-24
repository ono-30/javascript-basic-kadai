// btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById('btn');

// ボタンがクリックされたときにイベント処理を実行する
clickBtn.addEventListener('click', () => {
    const clickText = document.getElementById('text');
    clickText.textContent = 'ボタンをクリックしました';
});