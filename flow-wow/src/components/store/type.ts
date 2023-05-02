export const ACTION_VALUE_ALICE = 'actionDetali' as const;

export type TActionDetali={
    id: number;
    value: string;
    quantity: number;
};

export type TActionDetaliGame={
    loading: boolean;
    dataSourse: TActionDetali | null;
};