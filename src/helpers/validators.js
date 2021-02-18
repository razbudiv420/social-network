export const required = value =>  value ? undefined : 'Данное поле обязательно для заполнения!'
export const maxLength = max => value => 
    value && value.length > max ? `Длина должна быть не больше ${max} символов` : undefined
export const maxLength15 = maxLength(15)
export const maxLength200 = maxLength(200)
export const maxLength50 = maxLength(50)
export const number = value => 
    value && isNaN(Number(value)) ? `Значение должно быть числом` : undefined
export const minValueAge = min => value => 
    value && value < min ? `Минимальный возраст ${min} лет` : undefined
export const minAge18 = minValueAge(18)


