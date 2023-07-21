import { States } from '../constants';
import { INote } from './notes';

export type Action = {
    type: States;
    payload: INote[];
};
