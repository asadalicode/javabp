import { useState, useRef, useEffect } from 'react';

// Data

const Carousel = (data: any) => {
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel: any = useRef(null);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction: string) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }

        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);

    return (
        <div className="carousel my-12 mx-auto px-16 sm:px-8">

            <div className="relative overflow-hidden">
                <div className="flex justify-between absolute top left w-full h-full">
                    <button
                        onClick={movePrev}
                        className="hover:bg-blue-900/75 text-black w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('prev')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-20 -ml-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <span className="sr-only">Prev</span>
                    </button>
                    <button
                        onClick={moveNext}
                        className="hover:bg-blue-900/75 text-black w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('next')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-20 -ml-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
                <div
                    ref={carousel}
                    className="carousel-container relative flex gap-10  sm:px-8 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                >
                    {data.data.map((elem: any, index: any) => {
                        return (
                            <div
                                key={index}
                                className="carousel-item flex  text-center relative snap-start"
                            >
                                <div className="p-6 space-y-4 bg-white w-80  rounded-2xl card-shadow ">
                                    {elem.icon}
                                    <h5 className="mb-2 font-bold tracking-tight text-center text-black text-left max-w-xs">{elem.text}</h5>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
