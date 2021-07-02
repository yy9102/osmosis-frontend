import { atom } from 'recoil';
import { chainInfoList } from '../../constants/BETA/chainInfoList';

export const chainInfoListState = atom({
	key: 'chainInfoListState',
	default: chainInfoList,
});
