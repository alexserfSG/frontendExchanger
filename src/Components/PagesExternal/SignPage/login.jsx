import React from "react";
import {useDispatch} from "react-redux";
import {pageConfirm, pageRegister} from "../../../redux/slices/signSlice";
import PostServices from "../../Helpers/PostServices";
import {Field, Form, Formik} from "formik";
import {validationEmail} from "../../Helpers/validationEmailYup";
import {SIGN_LOGIN, SIGN_PAGE} from "./Constants";
import {ERROR} from "../../../redux/types";


export const Login = () => {
    const [error, setError] = React.useState('');
    const dispatch = useDispatch();

    async function sendForm(values) {
        let fData = new FormData();
        fData.append('page', SIGN_PAGE);
        fData.append('type', SIGN_LOGIN);
        fData.append('email', values.email);
        await PostServices.sendForm(fData)
            .then(res => {
                console.log(res)
                if (res.action !== ERROR) dispatch(pageConfirm(values.email))
                else setError(res.message);
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className="page_head">
                <div className="log_head_title">
                    <h2>Вход</h2>
                </div>
            </div>
            <div className="page_body">

                    <Formik
                        validationSchema={validationEmail}
                        initialValues={{email: ''}}
                        onSubmit={values => {
                            sendForm(values)
                        }}
                    >
                        {
                            ({ errors, touched }) => (

                                <Form>
                                    <div className="log_body_signin">

                                        {
                                            error && (
                                                <span className="red">{error}</span>
                                            )
                                        }

                                        <Field
                                            autoComplete = "off"
                                            className="log_body_sin_input"
                                            placeholder="E-mail"
                                            name = "email"
                                        />
                                            {
                                                errors.email && touched.email && (
                                                    <span className="red">{errors.email}</span>
                                                )
                                            }

                                        <button
                                            type="submit"
                                            className="yellow_btn log_body_sin_btn"
                                        ><span>Войти</span></button>
                                    </div>
                                </Form>

                            )

                        }

                    </Formik>

                <div className="log_body_signup"><a href='#' onClick={() => dispatch(pageRegister()) }>Зарегистрироваться</a></div>
            </div>
        </>
    )
}
