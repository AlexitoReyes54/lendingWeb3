import { UserModel } from "../models/User";
import { User } from "../interfaces/User";
import { BaseRepository } from "./baseRespository";

class userRepository extends BaseRepository<User>{
    constructor() {
        super(UserModel);
    }
}

Object.seal(userRepository);
export = userRepository;