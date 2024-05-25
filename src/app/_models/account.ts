import { Role } from './role';

export class Account {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
    contactNumber: string;
    gender: string;
    status: string;
    fields: string;
    position: string;
    jwtToken?: string;
}