import { atom } from 'recoil';
import { coinGeckoIdMap } from '../../configBETA';

export const coinGeckoIdMapState = atom({
	key: 'coinGeckoIdMapState',
	default: coinGeckoIdMap,
});
