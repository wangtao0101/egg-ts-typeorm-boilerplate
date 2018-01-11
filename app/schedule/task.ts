import { Context } from 'egg';

module.exports = () => {
    return {
        schedule: {
            interval: '1m',
            type: 'worker',
        },
        async task(ctx: Context): Promise<void> {
            ctx.service.home.index(); // you can access the service via ctx
            // tslint:disable-next-line:no-console
            console.log(`[schedule] Schduled task running.`);
        },
    };
};
