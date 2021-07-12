import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { coinGeckoIdMapState } from '../../../recoil/atoms/coinGeckoIdMapState';
import { denomInfoMapState } from '../../../recoil/atoms/denomInfoMapState';
import { getCoinPrice } from '../../../remotes/price/getCoinPrice';
import { useAllPoolList } from '../pools/useAllPoolList';

interface Params {
	denom: string;
	vsCurrency?: string;
}

export function useFiatPrice({ vsCurrency = 'usd', denom }: Params) {
	const coinGeckoPriceMap = useQuery(
		['coingecko', 'basicPrice', vsCurrency],
		() => getCoinPrice({ vsCurrencies: [vsCurrency] }),
		{ staleTime: 3_000 }
	);

	const denomInfoMap = useRecoilValue(denomInfoMapState);
	const coinGeckoIdMap = useRecoilValue(coinGeckoIdMapState);

	const fiatPrice = useMemo(() => {
		const originalDenom = denomInfoMap[denom]?.originalDenom;
		const vsCurrencyRes = coinGeckoPriceMap.data?.[coinGeckoIdMap[originalDenom]];
		return vsCurrencyRes?.[vsCurrency];
	}, [coinGeckoIdMap, coinGeckoPriceMap.data, denom, denomInfoMap, vsCurrency]);

	const allPoolList = useAllPoolList(undefined, { enabled: fiatPrice == null && coinGeckoPriceMap.isSuccess });
	/** find pool with highest tvl, that contains denom.
	 * find spot price. find price of outToken if does not exist;
	 * find pool with highest tvl, that cointains outToken denom
	 * */
}
