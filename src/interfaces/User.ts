import { Entity } from './Entity';
export interface User extends Entity{
    username: string;
    password: string;
}