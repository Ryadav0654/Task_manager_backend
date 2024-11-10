import { NextFunction, Request, Response } from "express"

type AsyncHandlerFunction = (
    req: Request,
    res: Response,
    next: NextFunction
) =>  Promise<Response<any, Record<string, any>>>;

export const asyncHander =  (fn: AsyncHandlerFunction) => {
    return async (req:Request, res: Response, next:NextFunction): Promise<void> => {
        try {
            await fn(req, res, next);
        } catch (error: any) {
            res.status(error.status || 500).json({
                success: false,
                message: error.message,
            });
        }
    }
}