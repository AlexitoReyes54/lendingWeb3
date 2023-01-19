import { Entity } from './Entity';
export interface Loan extends Entity{
    nftId: number;
    lenderId: number;
    borrowerId: number;
    startDate: Date;
    endDate: Date;
    interestRate: number;
    status: string;
    collateral: number;
    collateralToken: string;
    collateralAddress: string;
}