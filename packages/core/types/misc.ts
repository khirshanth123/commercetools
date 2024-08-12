import { NextMiddleware } from 'next/server';

export type NonEmptyArray<T> = [T, ...T[]];

export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;
