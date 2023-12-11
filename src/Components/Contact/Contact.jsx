
import emailjs from "emailjs-com";
import { useRef } from "react";
import { Form } from "semantic-ui-react";

import Swal from "sweetalert2";

const SERVICE_ID = "service_rmwr9xy";
const TEMPLATE_ID = "template_sx6dwec";
const PUBLIC_KEY = "fvg5xC2u2T3-BRrSL";


const Contact = () => {

    const form = useRef();

    const handleOnSubmit = (e) => {
        e.preventDefault();


        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
            (result) => {
                console.log(result.text);
                Swal.fire({
                    icon: "success",
                    title: "Message Sent Successfully",
                });
            },
            (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: "error",
                    title: "Ooops, something went wrong",
                    text: error.text,
                });
            }
        );
        e.target.reset();
    };
    // flex flex-col-reverse lg:flex-row items-center max-w-screen-2xl mx-auto space-y-5 lg:space-y-0  lg:space-x-12 p-10 bg-blue-950 rounded-3xl shadow
    return (
        <div id="contact" className="my-10">
            <h1 className="text-3xl text-center py-10 text-white font-semibold">Contact With Me</h1>
            <div className="max-w-screen-lg mx-auto ">
                <div className="flex flex-col-reverse lg:flex-row items-center space-y-5 lg:space-y-0   lg:space-x-10 p-10 bg-blue-950 rounded-3xl shadow  ">

                    <div className="space-y-4">
                        <img src="https://i.ibb.co/Jy4XPxh/IMG-0303.jpg" className=" mt-10 lg:h-96  object-contain shadow-2xl rounded-xl" />
                        <div className="text-white w-full">
                            <h2 className="font-bold text-lg  text-gray-300">Find Me on Phone/Whatsapp:</h2>
                            <p className="text-xl">+8801872033420</p>
                        </div>
                        <div className="text-white">
                            <h2 className="font-bold text-lg text-gray-300">Find Me on E-mail:</h2>
                            <p className="text-xl">jahidhasan.developer09@gmail.com</p>
                        </div>
                    </div>


                    <div>
                        <Form onSubmit={handleOnSubmit} ref={form} className="w-full lg:space-y-5">
                            <h1 className="text-xl font-semibold text-white ">Let's work together to build outstanding web experiences!</h1>
                            <div className="text-white space-y-3">
                                <div className=" lg:flex lg:space-x-4">
                                    <div className=" w-full">

                                        <label className="label">
                                            <span className="label-text text-md text-white">Your Name </span>
                                        </label>
                                        <input type="text" placeholder="Name*" name="user_name" className="input  text-white bg-transparent  w-full  border-gray-500   " />
                                    </div>
                                    <div className=" w-full">
                                        <label className="label">
                                            <span className="label-text text-md text-white">Your Email</span>
                                        </label>
                                        <input type="text" placeholder="Email*" name="user_email" className="input  text-white bg-transparent border-gray-500 w-full   " />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-md text-white">Subject</span>
                                    </label>
                                    <input type="text " placeholder="Subject*" name="subject" className="input text-white bg-transparent border-gray-500 w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-md text-white">Massge</span>
                                    </label>
                                    <textarea className="textarea input text-white bg-transparent border-gray-500  w-full h-32" name="massge" placeholder="Massge*" ></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-info text-lg font-semibold ">Send Massge</button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;






{/* <div
    className="contact font-serif "
    data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-delay="100"
    data-aos-easing="ease-in-out"
>
    <div className="container ">
        <p className="my-8 text-zinc-400">contact us/&gt;</p>
        <div className="w-full text-center  flex justify-center ">
            <Form
                onSubmit={handleOnSubmit}
                className="grad  w-[850px] p-8 rounded-md"
            >
                <div className="gap-8 mb-8  ">
                    <Form.Field
                        className="text-[30px] mb-8"
                        id="form-input-control-email"
                        control={Input}
                        name="user_email"
                        placeholder="Email…"
                        required
                        icon="mail"
                        iconPosition="left"
                    />
                    <Form.Field
                        className="text-[30px]"
                        id="form-input-control-last-name"
                        control={Input}
                        name="user_name"
                        placeholder="Name…"
                        required
                        icon="user circle"
                        iconPosition="left"
                    />
                </div>
                <div className="w-full my-8">
                    <Form.Field
                        className=" mx-auto text-[30px] "
                        id="form-textarea-control-opinion"
                        control={TextArea}
                        name="user_message"
                        placeholder="Message…"
                        required
                    />
                </div>
                <Button
                    type="submit"
                    className="border mt-4 w-full border-blue-600 bg-black hover:bg-[#071cf9]  w-[150px] h-[40px] cursor-pointer  rounded-md tracking-wide transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]"
                >
                    Submit
                </Button>
            </Form>
        </div>
    </div>
</div> */}


