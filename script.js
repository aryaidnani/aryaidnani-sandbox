let currentDate = new Date();
const targetDate = new Date(currentDate.getFullYear(), 11, 20);

const progressItem = document.querySelector(".progress-bar");

if (currentDate > targetDate) {
  targetDate.setFullYear(targetDate.getFullYear() + 1);
}

const daysLeft = Math.ceil((targetDate - currentDate) / (1000 * 60 * 60 * 24));

document.querySelector(".days").innerHTML =
  daysLeft + " day(s) until December 16<sup>th</sup>";

function webTime() {
  currentDate = new Date();

  let timeDiffDays = Math.ceil(
    (targetDate - currentDate) / (1000 * 24 * 60 * 60)
  );

  document.querySelector(".days-det").textContent =
    timeDiffDays < 10 ? "0" + timeDiffDays : timeDiffDays;

  let timeDiffSeconds = targetDate.getSeconds() - currentDate.getSeconds();
  document.querySelector(".seconds").textContent =
    60 + timeDiffSeconds < 10
      ? "0" + (60 + timeDiffSeconds)
      : 60 + timeDiffSeconds;

  let timeDiffMinutes = targetDate.getMinutes() - currentDate.getMinutes();
  document.querySelector(".minutes").textContent =
    60 + timeDiffMinutes < 10
      ? "0" + (60 + timeDiffMinutes)
      : 60 + timeDiffMinutes;

  let timeDiffHours = targetDate.getHours() - currentDate.getHours();
  document.querySelector(".hours").textContent =
    24 + timeDiffHours < 10 ? "0" + (24 + timeDiffHours) : 24 + timeDiffHours;

  progressItem.value = 100 - timeDiffDays;
}

setInterval(webTime, 1000);

document.querySelector(".container").addEventListener("mouseenter", () => {
  document.querySelector(".days").classList.toggle("hidden");
  document.querySelector(".detailed").classList.toggle("hidden");
  progressItem.classList.toggle("hidden");
});

document.querySelector(".container").addEventListener("mouseleave", () => {
  document.querySelector(".days").classList.toggle("hidden");
  document.querySelector(".detailed").classList.toggle("hidden");
  progressItem.classList.toggle("hidden");
});

document.querySelector(".screen-theme").addEventListener("click", () => {
  document.querySelector(".moon-icon").classList.toggle("hidden");
  document.querySelector(".sun-icon").classList.toggle("hidden");
  document.querySelector(".landing-page").classList.toggle("dark");
  document.querySelector(".landing-page").classList.toggle("light");
});

let categories = [
  "business",
  "computers",
  "inspirational",
  "intelligence",
  "knowledge",
  "success",
];

let category = `${categories[Math.trunc(Math.random() * 5)]}`;
console.log(category);

$.ajax({
  method: "GET",
  url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
  headers: { "X-Api-Key": "cbx1VfCMlKG+QYj7XLu9UA==Y0QYiTTzletiQuWT" },
  contentType: "application/json",
  success: function (result) {
    let [quoteObj] = result;
    document.querySelector(".quote-content").textContent = quoteObj.quote;
    document.querySelector(".quote-author").textContent = `-${quoteObj.author}`;
  },
  error: function ajaxError(jqXHR) {
    console.error("Error: ", jqXHR.responseText);
  },
});
