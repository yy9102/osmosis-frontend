import { Hash } from '@keplr-wallet/crypto';
import { Buffer } from 'buffer';
import { DenomPath } from '../../../models/BETA/denom';

interface Params {
	paths: DenomPath[];
	coinMinimalDenom: string;
}

/**
 * returns ibc/TAKA2134...
 * */
export function toIbcDenom({ paths, coinMinimalDenom }: Params) {
	/** if it start with ibc it is already in ibcDenom */
	if (coinMinimalDenom.startsWith('ibc/')) {
		return coinMinimalDenom;
	}
	const rawDenomPrefix = paths.map(({ portId, channelId }) => `${portId}/${channelId}`).join('/');
	/** rawDenom is of the form transfer/channel-0/uatom */
	const rawDenom = `${rawDenomPrefix}/${coinMinimalDenom}`;
	const ibcCoinMinimalDenomHash = Buffer.from(Hash.sha256(Buffer.from(rawDenom)))
		.toString('hex')
		.toUpperCase();
	return `ibc/${ibcCoinMinimalDenomHash}`;
}
