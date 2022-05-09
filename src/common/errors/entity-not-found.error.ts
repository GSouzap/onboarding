export class EntityNotFoundError extends Error {
  constructor (paramName: string) {
    super(`This ${paramName} does not exists`)
    this.name = 'InvalidParamError'
  }
}