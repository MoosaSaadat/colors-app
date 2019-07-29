import { pageTransitionTime } from "../constants";

export default {
	"@global": {
		".page-enter": {
			opacity: "0",
			zIndex: "1"
		},
		".page-enter-active": {
			opacity: "1"
		},
		".page-enter-done": {
			opacity: "1"
		},
		".page-exit": {
			opacity: "1"
		},
		".page-exit-active": {
			opacity: "0"
		},
		".page-exit-done": {
			opacity: "0"
		},
		".page": {
			position: "fixed",
			width: "100%",
			height: "100vh",
			top: "0",
			transition: `opacity ${pageTransitionTime}ms linear`
		}
	}
};
