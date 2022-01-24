
import httpStatus from "http-status";
import { ValidationError } from "express-validation";
import { NextFunction, Request, Response } from "express";



const handler = (err: any, req: Request, res: Response, next: NextFunction) => {
	const response = {
		statusCode: err.status || httpStatus.INTERNAL_SERVER_ERROR,
		message: err.message || httpStatus[err.status],
		errors: err.errors,
		stack: err.stack,
		timestamp: new Date().toISOString(),
		IP: req.ip,
		URL: req.originalUrl,
	};


	if (process.env.mode !== 'development') {
		delete response.stack;
	}

	res.status(response.statusCode);
	res.json(response);
	res.end();
};

const converter = (err: any, req: Request, res: Response, next: NextFunction) => {
	let convertedError = err;

	if (err instanceof ValidationError) {
		convertedError = {
			message: 'Validation Error',
			errors: err.error,
			status: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
			stack: err.details,
		};
	} else if (err.code == 'P2002') {
		convertedError = {
			message: 'There is a unique constraint violation, a new data cannot be created with this data',
			status: err.code || httpStatus.INTERNAL_SERVER_ERROR,
			stack: err.stack,
		};
	} else {
		convertedError = {
			message: err.message,
			status: err.status || httpStatus.INTERNAL_SERVER_ERROR,
			stack: err.stack,
		};
	}

	return handler(convertedError, req, res, next);
};

const notFound = (req: Request, res: Response, next: NextFunction) => {
	const err = {
		message: 'Not found',
		status: httpStatus.NOT_FOUND,
	};
	return handler(err, req, res, next);
};

export default {
	handler,
	converter,
	notFound,
}