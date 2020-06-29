const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");

function toggleNav({ target }) {
	const expanded = target.getAttribute("aria-expanded") === "true" || false;
	menuBtn.setAttribute("aria-expanded", !expanded);
	menu.classList.toggle("open");
}
menuBtn.addEventListener("click", toggleNav);
