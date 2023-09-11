const over = document.querySelector(".overlay");

const swiper = document.querySelector(".scroll");
function scroller(direction) {
	const width = document.querySelector(".cardBox").offsetWidth;
	if (direction === "right") {
		swiper.scrollLeft += width;
	} else {
		swiper.scrollLeft -= width;
	}
	console.log(width);
}
const sidebar = document.getElementById("sidebar");
function toggle() {
	if (sidebar.classList.contains("show")) {
    sidebar.classList.remove("show");
    document.body.classList.remove('overflow')
	}else{
    sidebar.classList.add("show");
    document.body.classList.add('overflow')

  }
}
const counter = document.getElementById("counter");
const counter2 = document.getElementById("counter2");
const counter3 = document.getElementById("counter3");
const counter4 = document.getElementById("counter4");
let count = counter.innerText;
let count2 = counter2.innerText;
let count3 = counter3.innerText;
let count4 = counter4.innerText;
let scrolling = false;
window.addEventListener("scroll", isScroll);
function Counter() {
	const interval = setInterval(() => {
		if (count < 500) {
			count++;
			count2++;
			count3++;
			count4++;
			update();
		} else {
			clearInterval(interval);
		}
	}, 40);
}
function update() {
	counter.textContent = count;
	counter2.textContent = count2;
	counter3.textContent = count3;
	counter4.textContent = count4;
}

function isScroll() {
	if (!scrolling && window.scrollY >= 200) {
		scrolling = true;
		Counter();
	}
}
