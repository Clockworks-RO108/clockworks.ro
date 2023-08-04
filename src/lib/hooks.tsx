import React from "react";

export const useInterval = (cb: () => void, delayMs: number) => {
	const savedCb = React.useRef(cb);

	React.useEffect(() => {
		savedCb.current = cb;
	}, [cb]);

	React.useEffect(() => {
		const id = setInterval(() => savedCb.current(), delayMs);

		return () => clearInterval(id);
	}, [delayMs]);
};
