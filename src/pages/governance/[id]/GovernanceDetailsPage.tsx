import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import { TVote } from '../Governance';
import { GovernanceDetailsOverview } from './DetailsOverview';
import { VotingTally } from './VotingTally';

export interface IProposal {
	id: number;
	title: string;
	status: string;
	proposalType: string;
	description: string;

	votingStart: number; // timestamp
	votingEnd: number; //	timestamp

	depositEndTime: number; //	timestamp

	totalVotePercentage: number;
	voteResults: Record<TVote, number>;
}

interface QueryParams {
	id?: string;
}

export const GovernanceDetailsPage: FunctionComponent = observer(() => {
	const router = useRouter();
	const queryParams: QueryParams = router.query;

	React.useEffect(() => {
		if (isNaN(Number(queryParams.id))) {
			router.push('/governance');
		}
		// TODO : if proposal not found, display not found
	}, [queryParams.id, router]);

	const proposal = {
		id: Number(queryParams.id),
		title: 'Parameter change: lower minimum proposal deposit amount',
		status: 'Voting Period',
		proposalType: 'Update Pool Incentives',
		description:
			'This governance proposal is to ask Atom delegators to allow the spending of 5,000 Atoms for the Gravity DEX Incentivized Testnet (Trading Competition) from the Cosmos Hub Community Fund. By voting Yes, the voter agrees to send 5,000 Atoms from the community fund to the multisig address which is controlled by 4 multisig committee members, who will distribute the Atoms to the competition winners. Detail of the proposal can be found at https://ipfs.io/ipfs/QmTFxNA6punVox7JXvgp7eUFkC9GxRu26unCUwRwyvsiHz',
		votingStart: Date.now(),
		votingEnd: Date.now(),

		depositEndTime: Date.now(),

		totalVotePercentage: 0.359,
		voteResults: {
			yes: 89775944,
			no: 89775944,
			noWithVeto: 89775944,
			abstain: 89775944,
		},
	} as IProposal;

	return (
		<div className="w-full h-full bg-surface">
			<div className="px-15 bg-background">
				<div className="py-10 max-w-max mx-auto">
					<GovernanceDetailsOverview proposal={proposal} />
				</div>
			</div>
			<div className="px-15 pt-10 pb-10">
				<div className="max-w-max mx-auto">
					<VotingTally proposal={proposal} />
				</div>
			</div>
		</div>
	);
});
