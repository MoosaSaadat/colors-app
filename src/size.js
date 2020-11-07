export default {
	down (size) {
		const sizes = {
			xs: "575.98px",
			sm: "767.98px",
			md: "991.98px",
			lg: "1199.98px"
		};
		return `@media (max-width: ${sizes[size]})`;
	},
	up (size) {
		const sizes = {
			xs: "5008px",
			sm: "800px",
			md: "1000px",
			lg: "1200px"
		};
		return `@media (min-width: ${sizes[size]})`;
	},
};
