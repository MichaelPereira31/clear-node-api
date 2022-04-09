export class InvalidParamError extends Error {
    constructor(paramName: string){
        super(`Invalide param: ${paramName}`);
        this.name = 'InvalidParamError'
    }
}