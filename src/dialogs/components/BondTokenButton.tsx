import { observer } from 'mobx-react-lite';
import React from 'react';
import { TToastType, useToast } from '../../components/common/toasts';
import { BasicAmountConfig } from '../../hooks/tx/basic-amount-config';
import { useStore } from '../../stores';
function getKeyLastTimeLockUp(): string {
	return `last_time_to_lockup`;
}

interface Props {
	amountConfig: BasicAmountConfig;
	canLockUp: boolean;
	selectedDurationIndex: number;
}

export const BondTokenButton = observer(function BondTokenButton({
	amountConfig,
	canLockUp,
	selectedDurationIndex,
}: Props) {
	const toast = useToast();

	const { chainStore, queriesStore, accountStore } = useStore();
	const account = accountStore.getAccount(chainStore.current.chainId);
	const queries = queriesStore.get(chainStore.current.chainId);
	const lockableDurations = queries.osmosis.queryLockableDurations.lockableDurations;

	return (
		<button
			className="w-2/3 h-15 bg-primary-200 rounded-2xl flex justify-center items-center hover:opacity-75 cursor-pointer disabled:opacity-50"
			disabled={!account.isReadyToSendMsgs || amountConfig.getError() != null || !canLockUp}
			onClick={async e => {
				e.preventDefault();

				if (account.isReadyToSendMsgs) {
					const duration = lockableDurations[selectedDurationIndex];
					try {
						await account.osmosis.sendLockTokensMsg(
							duration.asSeconds(),
							[
								{
									currency: amountConfig.sendCurrency,
									amount: amountConfig.amount,
								},
							],
							'',
							tx => {
								if (tx.code) {
									toast.displayToast(TToastType.TX_FAILED, { message: tx.log });
								} else {
									toast.displayToast(TToastType.TX_SUCCESSFULL, {
										customLink: chainStore.current.explorerUrlToTx.replace('{txHash}', tx.hash.toUpperCase()),
									});

									localStorage.setItem(getKeyLastTimeLockUp(), new Date().toString());
								}

								close();
							}
						);
						toast.displayToast(TToastType.TX_BROADCASTING);
					} catch (e) {
						toast.displayToast(TToastType.TX_FAILED, { message: e.message });
					}
				}
			}}>
			{account.isSendingMsg === 'lockTokens' ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
					viewBox="0 0 24 24">
					<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
					<path
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						className="opacity-75"
					/>
				</svg>
			) : (
				<p className="text-white-high font-semibold text-lg">Bond</p>
			)}
		</button>
	);
});
