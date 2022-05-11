/* 페이지 내 이메일 출력 함수 */
function showMessage() {
  document.getElementById("email").innerHTML = "zero950@gmail.com";
}

document.getElementById("email").addEventListener("click", showMessage);

/* 주야 모드 버튼 애니메이션 동작 */
const swithBox = document.querySelector(".night_day");

document.querySelector("input").addEventListener("change", (e) => {
  const { checked } = e.target;
  if (checked) {
    swithBox.classList.add("move");
  } else {
    swithBox.classList.remove("move");
  }
});

/* 주야 모드 배경전환 구현 */
let Back = {
  setColor: function (color) {
    let sections = document.querySelectorAll(".profile");
    for (let i = 0; i < sections.length; i++) {
      let item = sections.item(i);
      item.style.color = color;
    }
    // contact_logo i에 대한 색변경
    let logo = document.querySelectorAll(".contact_logo i");
    for (let i = 0; i < logo.length; i++) {
      let item = logo.item(i);
      item.style.color = color;
    }
    // document.querySelectorAll(".profile").style.color = color;
  },
  setBackgroundColor: function (color) {
    let sections = document.querySelectorAll(".profile");
    for (let i = 0; i < sections.length; i++) {
      let item = sections.item(i);
      item.style.backgroundColor = color;
    }
    // document.querySelectorAll(".profile").style.backgroundColor = color;
  },
};

/* 주야모드 실행함수 */
function nightDayHandler(self) {
  // let target = document.querySelector("body");
  if (self.value === "night") {
    Back.setBackgroundColor("#262e28");
    Back.setColor("#8fc2ae");
    self.value = "day";
  } else {
    Back.setBackgroundColor("#f7fcf8");
    Back.setColor("#6d6e78");
    self.value = "night";
  }
}

/* Back To Top 버튼 */
document.addEventListener("scroll", handleScroll);

let scrollToTopBtn = document.querySelector(".top_button");
// 스크롤 했을 때 일정구간에서 버튼의 등장여부 결정
function handleScroll() {
  let scrollableHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let GOLDEN_RATIO = 0.5;

  if (document.documentElement.scrollTop / scrollableHeight > GOLDEN_RATIO) {
    // 버튼을 보여주기
    scrollToTopBtn.style.display = "block";
  } else {
    // 버튼을 숨기기
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
