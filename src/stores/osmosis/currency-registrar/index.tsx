import { ChainInfo } from '@keplr-wallet/types';
import { ChainStore } from '@keplr-wallet/stores';

export class LPCurrencyRegistrar<C extends ChainInfo = ChainInfo> {
	constructor(protected readonly chainStore: ChainStore<C>) {
		/** for each chainInfo run registerCurrencyRegistrar */
		chainStore.addSetChainInfoHandler(chainInfoInner => {
			/** this is like an event emitter, whenever registerCurrencyRegistrar is called with
			 * callback (this.registerLPCurrency), it looks throughnknownDenoms in chainInfoInner
			 * removes it from unknownCurrency if callback does not return undefined, and adds
			 * it to registeredCurrencies (known) currency.
			 * */
			chainInfoInner.registerCurrencyRegistrar(this.registerLPCurrency);
		});
	}

	protected readonly registerLPCurrency = (coinMinimalDenom: string) => {
		if (coinMinimalDenom.startsWith('gamm/pool/')) {
			// GAMM 토큰의 경우 bank metadata를 쿼리하지 않고 그냥 바로 currency를 등록한다.
			const poolId = coinMinimalDenom.replace('gamm/pool/', '');
			return {
				coinMinimalDenom,
				coinDecimals: 18,
				coinDenom: `GAMM-${poolId}`,
			};
		}
	};
}
