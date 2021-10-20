import React,{useState} from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("")
    const {register, handleSubmit,formState: {errors}} = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_XKcIP1DCMsyN2EtOhHtPg";

    const onSubmit = (data , r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
            )
            r.target.reset()
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Form sent succesfully. I'll conatct you soon.");
            }).catch(err => console.error(`Something went wrong. ${err}`));
    };

    return (
        <div id="contact" className="contact">
            <div className="text-center">
                <h1>contact me</h1>
                <p>Please fill out the form and state your query. I'll contact you as soon as possible.</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    {...register("name", {
                                        required: "Please enter your name",
                                            maxLength: {
                                                value: 20,
                                                message: "Please enter a name with fewer that 20 characters",
                                            },
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                            {/* PHONE INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    name="phone"
                                    {...register("phone", {
                                        required: "Please enter your phone number",
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span>
                            {/* EMAIL INPUT */}
                            <div className="text-center">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    {...register("email", {
                                        required: "Please provide your email",
                                        pattern: {
                                            value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                            message: "Invalid Email",
                                        }
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    {...register("subject", {
                                        required: "OOPS, you forget to add Subject.",
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION */}
                            <div className="text-center">
                                <textarea
                                    className="form-control"
                                    placeholder="Please state your query"
                                    name="description"
                                    {...register("description", {
                                        required: "You forgot to write your query",
                                    })}
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.description && errors.description.message}
                            </span>
                            <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
