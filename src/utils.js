export function searchValidation(value) {
    const regExp = new RegExp('^[a-z0-9]+$', 'i')
    
    return regExp.test(value)
}