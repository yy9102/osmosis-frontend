import React from 'react';
import { RouteWrapper } from '../../src/components/layouts/RouteWrapper';
import { GovernanceDetailsPage } from '../../src/pages/governance/[id]/GovernanceDetailsPage';

export default function GovernanceDetails() {
	return (
		<RouteWrapper>
			<GovernanceDetailsPage />
		</RouteWrapper>
	);
}
