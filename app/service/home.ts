import { Context, Service } from 'egg';
import { getRepository } from 'typeorm';
import { User } from '../entity/user';

export default class HomeService extends Service {
    constructor(ctx: Context) {
        super(ctx);
    }

    async index() {
        const userRepository = getRepository(User);
        const u = await userRepository.findOneById(1);
        return u.name + ': I love Typeorm Egg.js and TypeScript.';
    }
}
