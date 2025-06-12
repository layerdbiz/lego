export default function getYear() {
	const currentYearElement = document.getElementById("currentYear");
	if (currentYearElement) {
		currentYearElement.textContent = new Date().getFullYear();
	}
}
