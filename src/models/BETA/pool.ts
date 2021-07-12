export interface PoolInfoRes {
	/** Since it's pools in osmosis zone, this stays the same. */
	'@type': '/osmosis.gamm.v1beta1.Pool';
	/** TODO:Q: what is address of a pool?
	 * eg) osmo1c8gdt3cquepqadv6ys2m9ht8eys40c2ws46ntwm7zknr2hwcsuhsly32ft
	 * */
	address: string;
	/** TODO:Q what is future pool governor?
	 * eg) 24h
	 * */
	future_pool_governor: string;
	id: string;
	poolAssets: Array<{ token: { denom: string; amount: string }; weight: string }>;
	poolParams: {
		/** 18 decimal exitFee. eg) 0.00000000010*/
		exitFee: string;
		/** for LBP pool ratio change rate */
		smoothWeightChangeParams: null;
		/** 18 decimal swap fee, in ratio */
		swapFee: string;
	};
	totalShares: {
		/** amount of total GAMM tokens
		 * eg) 46831178663450220730063766
		 * */
		amount: string;
		/** pool token name, token you get for providing liquidity
		 * eg) gamm/pool/1
		 * */
		denom: string;
	};
	/**
	 * addition of weights of poolAssets
	 * */
	totalWeight: string;
}
