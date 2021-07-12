import { atom } from 'recoil';
import { denomInfoMap } from '../../configBETA';

/** save knownDenomTrace as new pools are queried.
 * If unknown denom trace exists, such denom should not be shown in frontend app.
 * */
export const denomInfoMapState = atom({
	key: 'denomInfoMapState',
	default: denomInfoMap,
});
