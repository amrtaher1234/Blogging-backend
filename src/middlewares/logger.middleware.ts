import { ServerResponse } from 'http';

export function logger(req: Request, res: ServerResponse, next) {
    // tslint:disable-next-line:no-console
    console.log('Request is ', req.url, res.headersSent);
    next();
}
