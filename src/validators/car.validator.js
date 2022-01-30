import Joi from "joi";

export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яёЁіІїЇ]{1,20}$')).required().messages({
        'string.empty': '"model" не може бути пустим',
        'string.pattern.base': 'Тільки букви мин 1 макс 20'
    }),
    price: Joi.number().min(0).max(1000000).messages({
        'number.base': 'Тільки цифри від 1 - 1 000 000',
        'number.min': 'Ціна має бути більше або рівне 0',
        'number.max': 'Ціна має бути не більше 1 000 000'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.base': 'Рік може бути від 1990 до теперішнього',
        'number.min': 'Рік має бути більше 1990',
        'number.max': 'Рік має бути не більше теперішнього'
    })
})