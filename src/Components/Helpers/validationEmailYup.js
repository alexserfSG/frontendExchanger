import * as yup from 'yup';

export const validationEmail = yup.object().shape({
        email: yup.string().required('Поле E-mail необходимо заполнить').email('Указан некорректный email')
    });