import axios from 'axios';
import { KNOWN_COINGECKO_IDS } from '../../constants/BETA/coinGeckoIds';
import { COINGECKO_API_DOMAIN } from '../../constants/BETA/urls';

/** eg) { usd: 11.20} */
type VsCurrencyRes = { [vsCurrency: string]: number };

interface Params {
	/** base asset used to measure price of coin. eg) usd */
	vsCurrencies?: string[];
	coinGeckoIds?: string[];
}

export async function getCoinPrice({ vsCurrencies = ['usd'], coinGeckoIds = KNOWN_COINGECKO_IDS }: Params = {}) {
	const res = await axios.get<{ [coinGeckoId: string]: VsCurrencyRes }>(`${COINGECKO_API_DOMAIN}/simple/price`, {
		params: { vs_currencies: vsCurrencies.join(','), ids: coinGeckoIds.join(',') },
	});
	return res.data;
}
