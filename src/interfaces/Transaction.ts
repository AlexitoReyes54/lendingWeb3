import { Entity } from './Entity';
export interface Transaction extends Entity{
    nftId: number;
    lenderId: number;
    borrowerId: number;
    amount: number;
    token: string;
    address: string;
    status: string;
    date: Date;
}