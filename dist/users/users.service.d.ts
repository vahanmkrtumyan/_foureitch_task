import { Model } from 'mongoose';
export declare type User = any;
export declare class UsersService {
    private readonly userModel;
    private readonly users;
    constructor(userModel: Model<User>);
    insertUser(username: string, password: string): Promise<string>;
    findOne(username: string): Promise<User | undefined>;
}
