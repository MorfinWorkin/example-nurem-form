import React from 'react';

const MyButton = () => {
    return (
        <div>
            <button>No hace ni mierda este boton</button>
        </div>
    );
}

const InputTextBox = () => {
    return (
        <div className="container px-5 my-5">
            <div className="form-floating mb-3">
                <input
                    className="form-control"
                    id="nombreYApellidos"
                    type="text"
                    placeholder="Nombre y Apellidos"
                    data-sb-validations="required"
                />
                <label htmlFor="nombreYApellidos">Nombre y Apellidos</label>
            </div>
        </div>
    );
}

const SelectBox = () => {
    return (
        <div className="container px-5 my-5">
            <div className="form-floating mb-3">
                <select className="form-select" id="sexo" aria-label="Sexo">
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Otro">Otro</option>
                </select>
                <label htmlFor="sexo">Sexo</label>
            </div>
        </div>
    );
}

const BigTextBox = () => {
    return (
        <div className="container px-5 my-5">
            <div className="form-floating mb-3">
                <textarea
                    className="form-control"
                    id="motivoDeConsulta"
                    type="text"
                    placeholder="Motivo de Consulta"
                    style={{ height: "10rem" }}
                    data-sb-validations="required"
                    defaultValue={""}
                />
                <label htmlFor="motivoDeConsulta">Motivo de Consulta</label>
                <div
                    className="invalid-feedback"
                    data-sb-feedback="motivoDeConsulta:required"
                >
                    Motivo de Consulta is required.
                </div>
            </div>
        </div>
    );
}

const SubmitFormButton = () => {
    return (
        <div className="container px-5 my-5">
            <div className="d-grid">
                <button
                    className="btn btn-primary btn-lg enabled"
                    id="submitButton"
                    type="submit"
                >
                    Submit
                </button>

            </div>
        </div>
    );
}

const FieldRequired = () => {
    return (
        <div>
            <div
                className="invalid-feedback"
                data-sb-feedback="nombreYApellidos:required"
            >
                Nombre y Apellidos is required.
            </div>

        </div>
    );
}

const Form = () => {
    return (
        <div className="container px-5 my-5">
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="nombreYApellidos"
                        type="text"
                        placeholder="Nombre y Apellidos"
                        data-sb-validations="required"
                    />
                    <label htmlFor="nombreYApellidos">Nombre y Apellidos</label>
                    <div
                        className="invalid-feedback"
                        data-sb-feedback="nombreYApellidos:required"
                    >
                        Nombre y Apellidos is required.
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="lugarDeNacimiento"
                        type="text"
                        placeholder="Lugar de Nacimiento"
                        data-sb-validations="required"
                    />
                    <label htmlFor="lugarDeNacimiento">Lugar de Nacimiento</label>
                    <div
                        className="invalid-feedback"
                        data-sb-feedback="lugarDeNacimiento:required"
                    >
                        Lugar de Nacimiento is required.
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="edad"
                        type="text"
                        placeholder="Edad"
                        data-sb-validations="required"
                    />
                    <label htmlFor="edad">Edad</label>
                    <div className="invalid-feedback" data-sb-feedback="edad:required">
                        Edad is required.
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <select className="form-select" id="sexo" aria-label="Sexo">
                        <option value="Femenino">Femenino</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Otro">Otro</option>
                    </select>
                    <label htmlFor="sexo">Sexo</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="estadoCivil"
                        type="text"
                        placeholder="Estado Civil"
                        data-sb-validations="required"
                    />
                    <label htmlFor="estadoCivil">Estado Civil</label>
                    <div className="invalid-feedback" data-sb-feedback="estadoCivil:required">
                        Estado Civil is required.
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="religion"
                        type="text"
                        placeholder="Religión"
                        data-sb-validations="required"
                    />
                    <label htmlFor="religion">Religión</label>
                    <div className="invalid-feedback" data-sb-feedback="religion:required">
                        Religión is required.
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="domicilio"
                        type="text"
                        placeholder="Domicilio"
                        data-sb-validations="required"
                    />
                    <label htmlFor="domicilio">Domicilio</label>
                    <div className="invalid-feedback" data-sb-feedback="domicilio:required">
                        Domicilio is required.
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="telefono"
                        type="text"
                        placeholder="Teléfono "
                        data-sb-validations=""
                    />
                    <label htmlFor="telefono">Teléfono </label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="cel"
                        type="text"
                        placeholder="Cel"
                        data-sb-validations="required"
                    />
                    <label htmlFor="cel">Cel</label>
                    <div className="invalid-feedback" data-sb-feedback="cel:required">
                        Cel is required.
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Email"
                        data-sb-validations="required,email"
                    />
                    <label htmlFor="email">Email</label>
                    <div className="invalid-feedback" data-sb-feedback="email:required">
                        Email is required.
                    </div>
                    <div className="invalid-feedback" data-sb-feedback="email:email">
                        Email Email is not valid.
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="contactoDeEmergencia"
                        type="text"
                        placeholder="Contacto de Emergencia"
                        data-sb-validations="required"
                    />
                    <label htmlFor="contactoDeEmergencia">Contacto de Emergencia</label>
                    <div
                        className="invalid-feedback"
                        data-sb-feedback="contactoDeEmergencia:required"
                    >
                        Contacto de Emergencia is required.
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="celEmergencia"
                        type="text"
                        placeholder="Cel Emergencia"
                        data-sb-validations="required"
                    />
                    <label htmlFor="celEmergencia">Cel Emergencia</label>
                    <div
                        className="invalid-feedback"
                        data-sb-feedback="celEmergencia:required"
                    >
                        Cel Emergencia is required.
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <textarea
                        className="form-control"
                        id="motivoDeConsulta"
                        type="text"
                        placeholder="Motivo de Consulta"
                        style={{ height: "10rem" }}
                        data-sb-validations="required"
                        defaultValue={""}
                    />
                    <label htmlFor="motivoDeConsulta">Motivo de Consulta</label>
                    <div
                        className="invalid-feedback"
                        data-sb-feedback="motivoDeConsulta:required"
                    >
                        Motivo de Consulta is required.
                    </div>
                </div>
                <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                        <div className="fw-bolder">Form submission successful!</div>
                        <p>To activate this form, sign up at</p>
                        <a href="https://startbootstrap.com/solution/contact-forms">
                            https://startbootstrap.com/solution/contact-forms
                        </a>
                    </div>
                </div>
                <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">Error sending message!</div>
                </div>
                <div className="d-grid">
                    <button
                        className="btn btn-primary btn-lg enabled"
                        id="submitButton"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export { Form, MyButton, InputTextBox, SelectBox, BigTextBox, SubmitFormButton, FieldRequired };
