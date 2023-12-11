import { AiOutlineArrowRight } from 'react-icons/ai';

const Project1 = () => {
    return (
        <div>
            <div className="card card-compact w-96  bg-transparent shadow-2xl text-white">
                <figure><img className='hover:scale-125 ease-in duration-500' src="https://i.ibb.co/yVnQScC/Screenshot-2023-06-27-130717.png" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-semibold uppercase">Language Center</h2>
                    <p> Language Center is a full-stack web application with an admin, instructor and student dashboard..</p>


                    {/* link here */}
                   


                    <div className="card-actions justify-between text-white mt-7">
                    <div className='card-actions'>
                        <a className='border p-2 bg-base-100 rounded-xl' href="https://summer-vacetion-project.web.app/">Live Link</a>
                        <a className='border p-2 bg-base-100 rounded-xl'  href="https://github.com/jahidcst/summer-camp-client">Client  Code</a>
                        <a className='border p-2 bg-base-100 rounded-xl'  href="https://github.com/jahidcst/summer-camp-server"> Server  Code</a>
                    </div>

                        <button  className="border p-2 rounded-full " onClick={() => window.my_modal_1.showModal()}><AiOutlineArrowRight className='text-2xl'></AiOutlineArrowRight></button>

                        <dialog id="my_modal_1" className="modal">
                            <form style={{ background: "linear-gradient(90deg, rgb(7, 35, 59) 1.67%, rgb(4, 29, 52) 39.95%, rgb(4, 25, 45) 58.24%, rgb(4, 14, 24) 80.28%, rgb(5, 12, 22) 101.48%)" }} method="dialog" className="modal-box">

                                <button className="btn  btn-circle btn-ghost text-white text-xl absolute right-2 top-2">✕</button>
                                <div className='text-white'>
                                    <h3 className="font-bold text-xl">Technologies!</h3>
                                    <p className="py-5 mb-6  text-base">React js, React router, React query, axios, Tailwind CSS, DaisyUI, MongoDb, Exrpess js, Firebase, Stripe and JWT</p>
                                </div>
                                <div className='text-white'>
                                    <h1 className="font-bold text-xl ">Key Features </h1>
                                    <p className='space-y-4 py-5  text-base'>
                                        <li>Student Enrollment: Students can log in and enroll in summer school camps using Stripe payment integration, ensuring a seamless enrollment process.</li>

                                        <li>Payment History Tracking: Students can view their payment history, providing transparency and easy access to past transactions.</li>

                                        <li>Instructor Dashboard: Instructors have access to a dedicated dashboard where they can add classes, track class status, and receive valuable feedback from the admin.</li>

                                        <li>Admin Management: Admins can manage users and classes, including approving or denying class requests, assigning roles (student/instructor/admin), and providing feedback.</li>

                                        <li>User-Friendly Interface: The website offers a user-friendly interface that ensures a smooth and intuitive experience for all users.</li>

                                        <li>Dark/Light Theme Options: Users have the ability to switch between dark and light themes, enhancing personalization and visual preferences.</li>
                                    </p>
                                </div>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project1;