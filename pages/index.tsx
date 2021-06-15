import React from 'react';
import { RouteWrapper } from '../src/components/layouts/RouteWrapper';
import { MainPage } from '../src/pages/main';

export default function Main() {
	return (
		<RouteWrapper>
			<MainPage />
		</RouteWrapper>
	);
}
