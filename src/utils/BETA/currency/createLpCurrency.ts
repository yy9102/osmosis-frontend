/** coinMinimalDenom = XXX | ibc/XXX | gamm/pool/XXX
 * eg) coinMinimalDenom = uosmo | ibc/ASDF | gamm/pool/XXX
 * */
import { Currency } from '../../../models/BETA/currency';

export function createLpCurrency(denom: string) {
	if (denom.startsWith('gamm/pool/')) {
		// GAMM 토큰의 경우 bank metadata를 쿼리하지 않고 그냥 바로 currency를 등록한다.
		const poolId = denom.replace('gamm/pool/', '');
		return {
			denom,
			symbol: `GAMM-${poolId}`,
			dp: 18,
		} as Currency;
	}
}
