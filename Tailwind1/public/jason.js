
function startCounting() {
  let counters = document.querySelectorAll(".number-count");
  let speed = 500; // adjust this value to control the speed of counting

  counters.forEach((counter) => {
    let updateCount = () => {
      let target = +counter.getAttribute("data-count");
      let count = +counter.innerText;
      let increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

// Start counting when the element is visible on the screen
function startCountingWhenVisible() {
  let counterSection = document.querySelector(".counter");
  let options = {
    rootMargin: "0px",
    threshold: 1,
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounting();
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(counterSection);
}

// Call the function to start counting when the section is visible
startCountingWhenVisible();

function toggleMobileMenu() {
  var mobileMenu = document.querySelector(".mobile-menu");
  if (
    mobileMenu.style.display === "none" ||
    mobileMenu.style.display === ""
  ) {
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }
}
