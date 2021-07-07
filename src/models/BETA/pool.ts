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
	/** poolId */
	id: string;
	/** token.denom in coinMinimalDenom. eg) uatom, or ibc/27394FB092D2ECC... TODO:Q what is poolAsset.weight */
	poolAssets: Array<{ token: { denom: string; amount: string }; weight: string }>;
	poolParams: {
		/** 18 decimal exitFee */
		exitFee: '0.000000000000000000';
		/** for LBP pool ratio change rate */
		smoothWeightChangeParams: null;
		/** 18 decimal swap fee */
		swapFee: '0.005000000000000000';
	};
	totalShares: {
		/** TODO:Q what is totalShares amount?
		 * eg) 46831178663450220730063766
		 * */
		amount: string;
		/** pool token name, token you get for providing liquidity
		 * eg) gamm/pool/1
		 * */
		denom: string;
	};
	/**
	 * TODO:Q what is totalWeight?
	 * eg) 1073741824000000;
	 * */
	totalWeight: string;
}
