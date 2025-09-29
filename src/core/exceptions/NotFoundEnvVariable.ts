


export class NotFoundEnvVariable extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'NotFoundEnvVariable';
    }
}