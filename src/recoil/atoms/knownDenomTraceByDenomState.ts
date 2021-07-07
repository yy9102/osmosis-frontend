import { atom } from 'recoil';
import { DenomTraceRes } from '../../models/BETA/denom';

/** save knownDenomTrace as new pools are queried.
 * If unknown denom trace exists, such denom should not be shown in frontend app.
 * */
export const knownDenomTraceByDenomState = atom({
	key: 'knownDenomTraceByDenomState',
	default: {} as { [denom: string]: DenomTraceRes | null | undefined },
});
