import React from 'react'
import './NewsPage.css'
export default function NewsPage() {
    return (
        <div className='my-10'>
            <h4 className="text-textStrongColor font-bold sm:text-3xl text-xl sm:mt-7 sm:mb-2 sm:mx-5 mt-2 mb-1 mx-2 text-center max-w-full justify-center">Tin tức</h4>
            <div className="border-t border-blue-700 sm:mb-4 mb-2 mx-auto w-[20vh] justify-center text-center "></div>

            <div className='lg:flex  w-full'>

                <div
                    className="mx-4 lg:mx-4 mb-2 lg:h-fit h-1/6 zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/051.jpg"
                        className="w-full align-middle transition duration-300 ease-linear" />
                    <a href="#!">
                        <div
                            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                            <div className="flex h-full items-end justify-start">
                                <div className="m-3 text-white">
                                    <p className="mb-3 text-xl font-bold">I miss the sun</p>
                                    <p>
                                        <small
                                        >Published <u>13.01.2022</u> by Anna Maria Doe</small
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                    </a>
                </div>


                <div className="lg:w-5/12 lg:mx-4 mx-4 grid sm:gap-6 gap-3 grid-cols-2 ">
                    <div
                        className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/051.jpg"
                            className="w-full align-middle transition duration-300 ease-linear" />
                        <a href="#!">
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                                <div className="flex h-full items-end justify-start">
                                    <div className="m-3 text-white">
                                        <p className="mb-0 lg:text-lg font-bold">I miss the sun</p>
                                        <p>
                                            <small
                                            >Published <u>13.01.2022</u> by Anna Maria Doe</small
                                            >
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                        </a>
                    </div>

                    <div
                        className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/044.jpg"
                            className="w-full align-middle transition duration-300 ease-linear" />
                        <a href="#!">
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                                <div className="flex h-full items-end justify-start">
                                    <div className="m-3 text-white">
                                        <p className="mb-0 lg:text-lg font-bold">
                                            Adventure in the desert
                                        </p>
                                        <p>
                                            <small>Published <u>12.01.2022</u> by Mark Equel</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                        </a>
                    </div>

                    <div
                        className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/045.jpg"
                            className="w-full align-middle transition duration-300 ease-linear" />
                        <a href="#!">
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                                <div className="flex h-full items-end justify-start">
                                    <div className="m-3 text-white">
                                        <p className="mb-0 lg:text-lg font-bold">Lonely mountain</p>
                                        <p>
                                            <small
                                            >Published <u>10.01.2022</u> by Bilbo baggins</small
                                            >
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                        </a>
                    </div>

                    <div
                        className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/047.jpg"
                            className="w-full align-middle transition duration-300 ease-linear" />
                        <a href="#!">
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                                <div className="flex h-full items-end justify-start">
                                    <div className="m-3 text-white">
                                        <p className="mb-0 lg:text-lg font-bold">Lets go!</p>
                                        <p>
                                            <small>Published <u>09.01.2022</u> by Halley Frank</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                        </a>
                    </div>

                    <div
                        className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/028.jpg"
                            className="w-full align-middle transition duration-300 ease-linear" />
                        <a href="#!">
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                                <div className="flex h-full items-end justify-start">
                                    <div className="m-3 text-white">
                                        <p className="mb-0 lg:text-lg font-bold">
                                            A hut in the mountains
                                        </p>
                                        <p>
                                            <small>Published <u>07.01.2022</u> by David Beak</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                        </a>
                    </div>

                    <div
                        className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/049.jpg"
                            className="w-full align-middle transition duration-300 ease-linear" />
                        <a href="#!">
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                                <div className="flex h-full items-end justify-start">
                                    <div className="m-3 text-white">
                                        <p className="mb-0 lg:text-lg font-bold">Beautiful waterfall</p>
                                        <p>
                                            <small>Published <u>04.01.2022</u> by Joe Svan</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
