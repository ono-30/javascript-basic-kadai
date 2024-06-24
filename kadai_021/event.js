// btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById('btn');

// ボタンがクリックされたときにイベント処理を実行する
clickBtn.addEventListener('click', () => {
    const clickText = document.getElementById('text');
// 2秒（2000ミリ秒）後にテキストが変わる非同期処理を実行する
    setTimeout(() => {
        clickText.textContent = 'ボタンをクリックしました';
      }, 2000);   
});
