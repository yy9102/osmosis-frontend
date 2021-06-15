import React from 'react';
import { RouteWrapper } from '../../src/components/layouts/RouteWrapper';
import { GovernancePage } from '../../src/pages/governance';

export default function Governance() {
	return (
		<RouteWrapper>
			<GovernancePage />
		</RouteWrapper>
	);
}
