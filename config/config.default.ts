export class DefaultConfig {
    readonly keys = '1234';

    readonly security = {
        domainWhiteList: ['http://localhost:4000'],
        csrf: {
            enable: false,
        },
    };
}

export default new DefaultConfig();
