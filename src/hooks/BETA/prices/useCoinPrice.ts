import { useQuery } from 'react-query';
import { getCoinPrice } from '../../../remotes/price/getCoinPrice';

interface Params {
	vsCurrencies?: string[];
	coinGeckoIds?: string[];
}

export function useCoinPrice({ vsCurrencies, coinGeckoIds }: Params = {}) {
	return useQuery(['coingecko', 'basicPrice'], () => {
		return getCoinPrice({ vsCurrencies, coinGeckoIds });
	});
}
