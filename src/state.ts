import { Tab } from '@ag108/ct-utils/types/main';

const Closed = false;

export const ImageState: Tab = {
	main: Closed,
	math: {
		index: Closed,
		chain: Closed,
		arithmetic: Closed,
		geometry: Closed,
		algebra: Closed,
		calculus: Closed,
		matrix: Closed,
		algorithm: Closed,
	},
	time: { index: Closed, relative: Closed, absolute: Closed, special: Closed, custom: Closed },
	file: { index: Closed, image: true, pdf: Closed, other: Closed },
	paint: { index: Closed, red: Closed, blue: Closed, green: Closed, yellow: Closed, magenta: Closed, cyan: Closed },
	emote: { index: Closed, faces: Closed, foodBev: Closed, nature: Closed, objects: Closed, hearts: Closed, flags: Closed, moreSymbols: Closed },
};
export const PdfState: Tab = {
	main: Closed,
	math: {
		index: Closed,
		chain: Closed,
		arithmetic: Closed,
		geometry: Closed,
		algebra: Closed,
		calculus: Closed,
		matrix: Closed,
		algorithm: Closed,
	},
	time: { index: Closed, relative: Closed, absolute: Closed, special: Closed, custom: Closed },
	file: { index: Closed, image: Closed, pdf: true, other: Closed },
	paint: { index: Closed, red: Closed, blue: Closed, green: Closed, yellow: Closed, magenta: Closed, cyan: Closed },
	emote: { index: Closed, faces: Closed, foodBev: Closed, nature: Closed, objects: Closed, hearts: Closed, flags: Closed, moreSymbols: Closed },
};
export const OtherFileState: Tab = {
	main: Closed,
	math: {
		index: Closed,
		chain: Closed,
		arithmetic: Closed,
		geometry: Closed,
		algebra: Closed,
		calculus: Closed,
		matrix: Closed,
		algorithm: Closed,
	},
	time: { index: Closed, relative: Closed, absolute: Closed, special: Closed, custom: Closed },
	file: { index: Closed, image: Closed, pdf: Closed, other: true },
	paint: { index: Closed, red: Closed, blue: Closed, green: Closed, yellow: Closed, magenta: Closed, cyan: Closed },
	emote: { index: Closed, faces: Closed, foodBev: Closed, nature: Closed, objects: Closed, hearts: Closed, flags: Closed, moreSymbols: Closed },
};
