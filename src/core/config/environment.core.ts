import { injectable } from "inversify";
import { NotFoundEnvVariable } from "../exceptions/NotFoundEnvVariable";
import { TRequiredVariables } from "./variable";



export interface IEnvironment {
    get(key: TRequiredVariables): string
}

@injectable()
export class Environment implements IEnvironment {
    constructor() {}
    

    public get(key: TRequiredVariables): string {
        const value = process.env[key];
        if (!value) throw new NotFoundEnvVariable("Variable " + key + " not found");
        return value;
    }
}