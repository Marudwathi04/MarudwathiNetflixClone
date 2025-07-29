const faqItems = document.querySelectorAll(".faq-box li");

faqItems.forEach((item) => {
	item.addEventListener("click", () => {
		item.classList.toggle("active");
	});
});
