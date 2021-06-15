import React from 'react';
import { RouteWrapper } from '../../src/components/layouts/RouteWrapper';
import { PoolPage } from '../../src/pages/pool';

export default function Pool() {
	return (
		<RouteWrapper>
			<PoolPage />
		</RouteWrapper>
	);
}
