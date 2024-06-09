import { TabDispatchAction } from '@ag108/ct-utils/types/dispatch';

import { FileIndexState, PackageLinks } from '@ag108/ct-utils';

const PKG_NAME = 'attachments';

export const Image = ({ setTab }: { setTab: TabDispatchAction }) => {
	return <PackageLinks modules={['insert']} pkgName={PKG_NAME} libName='image' backTab={FileIndexState} setTab={setTab} />;
}
export const Pdf = ({ setTab }: { setTab: TabDispatchAction }) => {
	return <PackageLinks modules={['insert']} pkgName={PKG_NAME} libName='pdf' backTab={FileIndexState} setTab={setTab} />;
}
export const Other = ({ setTab }: { setTab: TabDispatchAction }) => {
	return <PackageLinks modules={['insert']} pkgName={PKG_NAME} libName='other' backTab={FileIndexState} setTab={setTab} />;
}