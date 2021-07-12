import { Dec } from '@keplr-wallet/unit';

interface Params {
	inTokenData: {
		amount: string;
		weight: string;
	};
	outTokenData: {
		amount: string;
		weight: string;
	};
	swapFee: string;
}
export function calcSpotPrice({ inTokenData, outTokenData, swapFee }: Params) {
	const weightedInAmount = new Dec(inTokenData.amount).quo(new Dec(inTokenData.weight));
	const weightedOutAmount = new Dec(outTokenData.amount).quo(new Dec(outTokenData.weight));
	const oneDec = new Dec(1);
	const feeAdjustment = oneDec.quo(oneDec.sub(new Dec(swapFee)));

	return weightedInAmount.quo(weightedOutAmount).mul(feeAdjustment);
}
