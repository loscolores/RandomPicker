let emojiArr = ["🇨🇦", "🇨🇭", "🇮🇹", "🇸🇬", "🇹🇼"];
let nameArr = [
  "단풍이 아름다운 캐나다",
  "알프스 언덕에서 요들송을! 스위스",
  "젤라또야 피자야 기다리렴.. 이탈리아",
  "야경이 눈부신 싱가포르",
  "버블티의 본고장! 대만",
];

const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  const index = Math.floor(Math.random() * emojiArr.length);
  document.querySelector(".emoji").innerHTML = emojiArr[index];

  document.querySelector(
    ".question"
  ).innerHTML = `당신이 여행할 국가는 <br> ${nameArr[index]}입니다!`;
});
