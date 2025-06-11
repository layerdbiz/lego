export default function nav() {
	const mobileMenuButton = document.getElementById("mobile-menu-button");
	const mobileMenu = document.getElementById("mobile-menu");
	if (mobileMenuButton && mobileMenu) {
		mobileMenuButton.addEventListener("click", () => {
			mobileMenu.classList.toggle("hidden");
		});

		const mobileLinks = mobileMenu.querySelectorAll("a");
		mobileLinks.forEach((link) => {
			link.addEventListener("click", () => {
				mobileMenu.classList.add("hidden");
			});
		});
	}

	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const targetId = this.getAttribute("href");
			const targetElement = document.querySelector(targetId);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: "smooth" });
			}
		});
	});

	// Scroll Spy for active navigation links
	const sections = document.querySelectorAll("section[id]");
	// Selects nav links specifically from the main navigation bar (desktop and mobile)
	const navLinks = document.querySelectorAll(".nav-links a");
	const navElement = document.querySelector("header");
	let navHeight = 0;

	if (navElement) {
		navHeight = navElement.offsetHeight;
	}

	// Update navHeight on window resize, as nav height might change (e.g., logo/padding changes)
	window.addEventListener("resize", () => {
		if (navElement) {
			navHeight = navElement.offsetHeight;
		}
	});

	function changeNavActiveState() {
		if (!navElement) return; // Exit if nav element isn't found

		let currentSectionId = "";
		// Consider a small offset to trigger activation a bit earlier or later if desired
		const scrollPosition = window.scrollY + navHeight + 1; // +1 to ensure it's just past the top of the section

		for (let i = sections.length - 1; i >= 0; i--) {
			if (sections[i].offsetTop <= scrollPosition) {
				currentSectionId = sections[i].id;
				break; // Found the current or last passed section
			}
		}

		// Fallback to home if above all sections or no section is matched yet (e.g. very top)
		if (
			!currentSectionId && sections.length > 0 &&
			scrollPosition < sections[0].offsetTop
		) {
			currentSectionId = "hero-cover"; // Assuming 'hero-cover' is your topmost section/home
		} else if (
			!currentSectionId && sections.length === 0 && window.scrollY < navHeight
		) {
			// If no sections, but at top, still try to activate home
			currentSectionId = "hero-cover";
		}

		navLinks.forEach((link) => {
			link.classList.remove("active-link");
			// Check if the link's href matches the currentSectionId
			// Ensure link.getAttribute('href') is not null before calling substring
			if (
				link.getAttribute("href") &&
				link.getAttribute("href").substring(1) === currentSectionId
			) {
				link.classList.add("active-link");
			}
		});
	}

	// Initial call to set active link on page load
	if (
		sections.length > 0 ||
		document.querySelector('.nav-links a[href="#hero-cover"]')
	) {
		changeNavActiveState();
	}
	window.addEventListener("scroll", changeNavActiveState);
}
