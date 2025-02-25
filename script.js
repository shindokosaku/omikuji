(() => {
    const DURATION = 3000;
    const SLOT_TIME = 100;
    const omikujiArray = [
        "./images/_omikuji_daikichi.png",
        "./images/_omikuji_chuutichi.png",
        "./images/_omikuji_syoukichi.png",
        "./images/_omikuji_suekichi.png",
        "./images/_omikuji_kichi.png",
        "./images/_omikuji_kyou.png",
        "./images/_omikuji_daikyou.png"
    ];
    const $result = document.getElementById("js-result");
    //先頭に$をつけるのは変数がHTML要素を格納していることを明示するためのプレフィックス;
    // プレフィックスとはクラス名や変数名の冒頭になんらかの文字列を付与すること;
    const getRandomNumber = (argMin, argMax) => {
      const min = Math.ceil(argMin);
      const max = Math.floor(argMax);
      return Math.floor(Math.random() * (max-min) + min);
    }

    const playOmikuji = () => {
        const slotAnimationTimer = setInterval(() => {
          const randomKey = getRandomNumber(0,6);
          $result.setAttribute("src", omikujiArray[randomKey]);
        },SLOT_TIME);
        
        setTimeout(() => {
          clearInterval(slotAnimationTimer);
          const randomKey = getRandomNumber(0,6);
          $result.setAttribute("src", omikujiArray[randomKey]);
        }, DURATION);
    };

    document.getElementById("js-button").addEventListener("click",playOmikuji);
    })();