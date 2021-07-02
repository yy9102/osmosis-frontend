export function createLpCurrency(coinMinimalDenom: string) {
	if (coinMinimalDenom.startsWith('gamm/pool/')) {
		// GAMM 토큰의 경우 bank metadata를 쿼리하지 않고 그냥 바로 currency를 등록한다.
		const poolId = coinMinimalDenom.replace('gamm/pool/', '');
		return {
			coinMinimalDenom,
			coinDecimals: 18,
			coinDenom: `GAMM-${poolId}`,
		};
	}
}
