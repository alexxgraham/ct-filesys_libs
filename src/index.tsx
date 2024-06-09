import { TabDispatchAction } from '@ag108/ct-utils/types/dispatch';
import { PackageLibraries } from '@ag108/ct-utils/types/main';

import { PackageIndexLink } from '@ag108/ct-utils';

import { ImageState, OtherFileState, PdfState } from './state';

const libraries: PackageLibraries = [
	{ name: 'image', tabState: ImageState },
	{ name: 'pdf', tabState: PdfState },
	{ name: 'other', tabState: OtherFileState }
]

export const IndexFilesys = ({setTab}: {setTab: TabDispatchAction}) => {
	return (
		<article className='flex flex-col pt-2'>
			<p className='text-accent uppercase'>
				[<PackageIndexLink setTab={setTab} />] attachment libraries ({libraries.length}):
			</p>
			<ol className='flex flex-col px-4 items-start h-[140px] overflow-scroll'>
				{libraries.map((library, i) => (
					<li key={i + 1}>
						<button onClick={() => setTab(library.tabState)} className='uppercase outline-none'>
							{i + 1}) [<span className='hover:underline cursor-pointer'>{library.name}</span>]
						</button>
					</li>
				))}
			</ol>
		</article>
	);
}

export { Image, Pdf, Other } from '~/libs'