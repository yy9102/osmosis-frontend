import React from 'react';
import { RouteWrapper } from '../../src/components/layouts/RouteWrapper';
import { PoolsPage } from '../../src/pages/pools';

export default function Pools() {
	return (
		<RouteWrapper>
			<PoolsPage />
		</RouteWrapper>
	);
}
