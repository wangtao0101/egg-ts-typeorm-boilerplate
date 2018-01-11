import { Controller } from 'egg';

export default class HomeController extends Controller {
    public async index() {
        const ctx = this.ctx;

        const data = await this.service.home.index();

        ctx.body = data;
        ctx.status = 200;
    }
}
