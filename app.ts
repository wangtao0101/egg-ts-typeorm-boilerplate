import { Application } from 'egg';
import { createConnection } from 'typeorm';

export default (app: Application) => {
    app.beforeStart(async () => {
        await createConnection({
            type: 'postgres',
            host: '192.168.1.199',
            port: 5432,
            username: 'postgres',
            password: '123456',
            database: 'test',
            entities: [
                __dirname + '/app/entity/*.js',
            ],
            synchronize: true,
        });
        // console.log(app.bar);
    });
};
