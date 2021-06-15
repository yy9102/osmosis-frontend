import cn from 'clsx';
import isArray from 'lodash-es/isArray';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import { LAYOUT, TSIDEBAR_ITEM, TSIDEBAR_SELECTED_CHECK } from '../../../constants';
import { TCardTypes } from '../../../interfaces';
import { mapKeyValues } from '../../../utils/scripts';
import { Img } from '../../common/Img';
import { Container } from '../../containers';
import { SidebarBottom } from './SidebarBottom';
import { SidebarItem } from './SidebarItem';

export const Sidebar = () => {
	const router = useRouter();
	const pathname = router.pathname;

	const [openSidebar, setOpenSidebar] = React.useState<boolean>(true);
	return (
		<div
			// onMouseEnter={() => setOpenSidebar(true)}
			// onMouseLeave={() => setOpenSidebar(false)}
			className="overflow-x-visible max-w-sidebar-open min-w-sidebar-open pointer-events-none h-full z-50">
			<div className="fixed h-full">
				<Container
					className={cn(
						'h-full transition-all pointer-events-auto fixed overflow-x-hidden',
						openSidebar ? 'min-w-sidebar-open max-w-sidebar-open' : 'min-w-sidebar-closed max-w-sidebar-closed'
					)}
					type={TCardTypes.CARD}>
					<div className="w-full h-full py-6 px-4 flex flex-col justify-between">
						<div>
							<section className="mb-15 px-1">
								<LogoArea openSidebar={openSidebar} />
							</section>
							<section>
								{mapKeyValues(LAYOUT.SIDEBAR, (_: string, value: TSIDEBAR_ITEM) => (
									<SidebarItem
										key={value.TEXT}
										selected={pathnameCheck(pathname, value.SELECTED_CHECK)}
										openSidebar={openSidebar}
										sidebarItem={value}
									/>
								))}
							</section>
						</div>
						<div>
							<SidebarBottom openSidebar={openSidebar} />
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};
const pathnameCheck = (str: string, routes: TSIDEBAR_SELECTED_CHECK) => {
	if (isArray(routes)) {
		for (const route of routes) {
			if (route instanceof RegExp) {
				if (route.test(str)) return true;
			} else if ((route as string) === str) return true;
		}
	} else {
		if (str === (routes as string)) return true;
	}
	return false;
};

const LogoArea: FunctionComponent<TLogoArea> = ({ openSidebar }) => {
	return (
		<div className="flex items-center">
			<Img className={cn('w-12 h-12')} src={`/public/assets/main/logo-single.png`} />
			<Img
				style={{ maxWidth: openSidebar ? '113px' : '0px' }}
				className={'h-4.5 transition-all'}
				src="/public/assets/main/logo-text.png"
			/>
		</div>
	);
};

interface TLogoArea {
	openSidebar: boolean;
}
