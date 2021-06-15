import React from 'react';
import { RouteWrapper } from '../../src/components/layouts/RouteWrapper';
import { BootstrapDetails } from '../../src/pages/bootstrap/[id]';

export default function GovernanceDetails() {
	return (
		<RouteWrapper>
			<BootstrapDetails />
		</RouteWrapper>
	);
}
