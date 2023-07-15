let curPlayer = 1;

const getRandomValue = () => {
  return Math.trunc(Math.random() * 6) + 1;
};

const handleRoll = () => {
  const curRoundScore = document.querySelector(
    `.section__score--value--player${curPlayer}`
  );
  let currentRoundTotal = curRoundScore.innerText;

  const randomValue = getRandomValue();

  // 주사위 값이 1, 2일 경우 현재 라운드 합계는 0이 되고 상대방에게 기회가 넘어감
  if (randomValue === 1 || randomValue === 2) {
    curRoundScore.innerText = 0;
    curPlayer = curPlayer === 1 ? 2 : 1;
  }

  // 나머지의 경우 주사위를 돌리거나 hold 할 수 있음
  // hold 하면 현재 라운드 합계를 총합계에 더해주고 기회를 상대방에게 넘김
  else {
    curRoundScore.innerText = Number(currentRoundTotal) + randomValue;
  }
};

const rollButton = document.querySelector(".btn-roll");
rollButton.addEventListener("click", handleRoll);
