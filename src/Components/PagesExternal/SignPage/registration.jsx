import React from "react";
import PostServices from "../../Helpers/PostServices";
import { useDispatch } from "react-redux";
import { pageConfirm } from "../../../redux/slices/signSlice";
import { validationEmail } from "../../Helpers/validationEmailYup";
import { Formik, Form , Field } from "formik";
import {SIGN_PAGE, SIGN_REGISTER} from "./Constants";


export const Registration = () => {

    const dispatch = useDispatch();

    async function sendForm(values) {
        let fData = new FormData();
        fData.append('page', SIGN_PAGE);
        fData.append('type', SIGN_REGISTER);
        fData.append('email', values.email);
        await PostServices.sendForm(fData)
            .then(res => {
                //console.log(res)
                if (res) dispatch(pageConfirm())
            })
            .catch(error => console.log(error))
    }

    return (
        <>

            <div className="page_head">
                <div className="log_head_title">
                    <h2>Регистрация</h2>
                </div>
            </div>

            <div className="page_body">

                <Formik
                    validationSchema={validationEmail}
                    initialValues={
                        {email: ''}
                    }
                    onSubmit={values => {sendForm(values)}}
                >
                    { ({errors,touched}) => (

                            <Form>

                                <div className="log_body_signin">

                                    <Field
                                        className="log_body_sin_input"
                                        placeholder="E-mail"
                                        name="email"
                                    />
                                    {
                                        errors.email && touched.email && (
                                            <span className="red">{errors.email}</span>
                                        )
                                    }

                                    <button
                                        type="submit"
                                        className="yellow_btn log_body_sin_btn"
                                    ><span>Зарегистрироваться</span></button>
                                </div>

                            </Form>
                        )
                    }

                </Formik>

                <div className="accept_legal"><p>Регистрация аккаунта Coinschest означает ваше согласие с Политикой конфиденциальности и Условиями предоставления услуг.</p></div>

            </div>

        </>
    )
}