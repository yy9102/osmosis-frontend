import { NativeCurrency } from '../../../models/BETA/currency';

export function toLpCurrency(denom: string) {
	if (denom.startsWith('gamm/pool/')) {
		// GAMM 토큰의 경우 bank metadata를 쿼리하지 않고 그냥 바로 currency를 등록한다.
		const poolId = denom.replace('gamm/pool/', '');
		return {
			originalDenom: denom,
			symbol: `GAMM-${poolId}`,
			name: `Generalized automated market maker pool ${poolId}`,
			decimals: 18,
		} as NativeCurrency;
	}
}
