import { atom } from 'recoil';
import { knownDenomCoreInfoMap } from '../../configBETA';

/** save knownDenomTrace as new pools are queried.
 * If unknown denom trace exists, such denom should not be shown in frontend app.
 * */
export const knownDenomCoreInfoMapState = atom({
	key: 'knownDenomCoreInfoMapState',
	default: knownDenomCoreInfoMap,
});
