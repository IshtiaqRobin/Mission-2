import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUsersFromDB } from "./user.service";

export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const data = req.body;

    const user = await createUserToDB(data);

    res.status(202).json({
        status: "success",
        data: user,
    });
};

export const getUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const user = getUsersFromDB();

    res.status(202).json({
        status: 'success',
        data: user,
    });
};

// Pattern
// Route call dibe Controller ke, ar Controller call dibe Service ke.
// Route -> Controller -> Service