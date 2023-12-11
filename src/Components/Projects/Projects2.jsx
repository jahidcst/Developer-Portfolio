import { AiOutlineArrowRight } from 'react-icons/ai';

const Project2 = () => {
    return (
        <div>
            <div className="card card-compact w-96  bg-transparent shadow-2xl text-white">
                <figure><img className='hover:scale-125 ease-in duration-500' src="https://i.ibb.co/1TTC3xD/ss.png" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-semibold uppercase">Sweet toys</h2>
                    <p> Sweet Toys is a full-stack web application with authentication and database integration..</p>


                    {/* link here */}



                    <div className="card-actions justify-between text-white mt-7">
                        <div className='card-actions'>
                            <a className='border p-2 bg-base-100 rounded-xl' href="https://my-toy-project-eb4f6.web.app/">Live Link</a>
                            <a className='border p-2 bg-base-100 rounded-xl' href="https://github.com/jahidcst/toy-client-side">Client  Code</a>
                            <a className='border p-2 bg-base-100 rounded-xl' href="https://github.com/jahidcst/toy-server-side"> Server  Code</a>
                        </div>

                        <button className="border p-2 rounded-full " onClick={() => window.my_modal_2.showModal()}><AiOutlineArrowRight className='text-2xl'></AiOutlineArrowRight></button>

                        <dialog id="my_modal_2" className="modal">
                            <form style={{ background: "linear-gradient(90deg, rgb(7, 35, 59) 1.67%, rgb(4, 29, 52) 39.95%, rgb(4, 25, 45) 58.24%, rgb(4, 14, 24) 80.28%, rgb(5, 12, 22) 101.48%)" }} method="dialog" className="modal-box">

                                <button className="btn  btn-circle btn-ghost text-white text-xl absolute right-2 top-2">✕</button>
                                <div className='text-white'>
                                    <h3 className="font-bold text-xl">Technologies!</h3>
                                    <p className="py-5 mb-6  text-base">React , React router , DaisyUI Tailwind CSS, Firebase , Express.js , MongoDB, Vercel.</p>
                                </div>
                                <div className='text-white'>
                                    <h1 className="font-bold text-xl ">Key Features! </h1>
                                    <p className='space-y-4 py-5  text-base'>
                                        <li>Sweet Toys is a full-stack application. Here users can find lots of toys.</li>

                                        <li>Users can add new products and they can also edit and delete their products on the “My Toys” page.</li>

                                       
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

export default Project2;