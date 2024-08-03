import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

const Carousle = () => {
  const Therapist = [
    {
      name: "Alexander Cort",
      address: "123 Elm Street, New York",
      services: "Mobile & In-Studio",
      image: img1,
    },
    {
      name: "Michael Smith",
      address: "789 Maple Drive, NY",
      services: "Mobile & In-Studio",
      image: img2,
    },
    {
      name: "David Martinez",
      address: "Pine Street, San Fran",
      services: "Mobile & In-Studio",
      image: img3,
    },
    {
      name: "Jennifer Lee",
      address: "567 Cedar Lane, Miami",
      services: "Mobile & In-Studio",
      image: img4,
    },
  ];

  return (
    <section>
      <p className="ml-5 mt-10 text-lg font-poppins font-medium">
        Featured Therapist
      </p>
      <div className="mx-5 md:p-5 my-5 bg-white rounded-lg">
        
        <div className="carousel w-full">
         
          <div id="slide1" className="carousel-item relative w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden  gap-2 lg:mx-16">
              <div className="relative border rounded-lg">
                <div className="w-full h-1/2">
                  <img
                    className="w-full h-full rounded-2xl p-1"
                    src={img1}
                    alt="Burger"
                  />
                </div>
                <div className="p-2">
                  <p className="text-sm font-medium font-poppins">
                    Alexander Cort
                  </p>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>
                    <p className="text-xs font-normal font-poppins my-2">
                      123 Elm Street, New York
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>

                    <p className="text-xs font-normal font-poppins my-2">
                      Mobile & In-Studio
                    </p>
                  </div>
                </div>

                <div className="w-full absolute bottom-0">
                  <div className="flex justify-center items-center bg-blue-300 hover:bg-blue-600  hover:text-white py-4 cursor-pointer rounded-b-lg">
                    <p className="text-sm font-poppins font-medium underline  ">
                      See Details
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative border rounded-lg">
                <div className="w-full h-1/2">
                  <img
                    className="w-full h-full rounded-2xl p-1"
                    src={img1}
                    alt="Burger"
                  />
                </div>
                <div className="p-2">
                  <p className="text-sm font-medium font-poppins">
                    Alexander Cort
                  </p>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>
                    <p className="text-xs font-normal font-poppins my-2">
                      123 Elm Street, New York
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>

                    <p className="text-xs font-normal font-poppins my-2">
                      Mobile & In-Studio
                    </p>
                  </div>
                </div>

                <div className="w-full absolute bottom-0">
                  <div className="flex justify-center items-center bg-blue-300 hover:bg-blue-600  hover:text-white py-4 cursor-pointer rounded-b-lg">
                    <p className="text-sm font-poppins font-medium underline  ">
                      See Details
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block relative border rounded-lg">
                <div className="w-full h-1/2">
                  <img
                    className="w-full h-full rounded-2xl p-1"
                    src={img2}
                    alt="Burger"
                  />
                </div>
                <div className="p-2">
                  <p className="text-sm font-medium font-poppins">
                    Alexander Cort
                  </p>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>
                    <p className="text-xs font-normal font-poppins my-2">
                      123 Elm Street, New York
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>

                    <p className="text-xs font-normal font-poppins my-2">
                      Mobile & In-Studio
                    </p>
                  </div>
                </div>

                <div className="w-full absolute bottom-0">
                  <div className="flex justify-center items-center bg-blue-300 hover:bg-blue-600  hover:text-white py-4 cursor-pointer rounded-b-lg">
                    <p className="text-sm font-poppins font-medium underline  ">
                      See Details
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block relative border rounded-lg">
                <div className="w-full h-1/2">
                  <img
                    className="w-full h-full rounded-2xl p-1"
                    src={img3}
                    alt="Burger"
                  />
                </div>
                <div className="p-2">
                  <p className="text-sm font-medium font-poppins">
                    Alexander Cort
                  </p>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>
                    <p className="text-xs font-normal font-poppins my-2">
                      123 Elm Street, New York
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>

                    <p className="text-xs font-normal font-poppins my-2">
                      Mobile & In-Studio
                    </p>
                  </div>
                </div>

                <div className="w-full absolute bottom-0">
                  <div className="flex justify-center items-center bg-blue-300 hover:bg-blue-600  hover:text-white py-4 cursor-pointer rounded-b-lg">
                    <p className="text-sm font-poppins font-medium underline  ">
                      See Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:absolute left-0 right-0 top-1/2 lg:flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle bg-blue-300">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle bg-blue-300">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden gap-2 lg:mx-16">
              <div className=" relative border rounded-lg">
                <div className="w-full h-1/2">
                  <img
                    className="w-full h-full rounded-2xl p-1"
                    src={img4}
                    alt="Burger"
                  />
                </div>
                <div className="p-2">
                  <p className="text-sm font-medium font-poppins">
                    Alexander Cort
                  </p>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>
                    <p className="text-xs font-normal font-poppins my-2">
                      123 Elm Street, New York
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>

                    <p className="text-xs font-normal font-poppins my-2">
                      Mobile & In-Studio
                    </p>
                  </div>
                </div>

                <div className="w-full absolute bottom-0">
                  <div className="flex justify-center items-center bg-blue-300 hover:bg-blue-600  hover:text-white py-4 cursor-pointer rounded-b-lg">
                    <p className="text-sm font-poppins font-medium underline  ">
                      See Details
                    </p>
                  </div>
                </div>
              </div>
              <div className=" relative border rounded-lg">
                <div className="w-full h-1/2">
                  <img
                    className="w-full h-full rounded-2xl p-1"
                    src={img5}
                    alt="Burger"
                  />
                </div>
                <div className="p-2">
                  <p className="text-sm font-medium font-poppins">
                    Alexander Cort
                  </p>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>
                    <p className="text-xs font-normal font-poppins my-2">
                      123 Elm Street, New York
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>

                    <p className="text-xs font-normal font-poppins my-2">
                      Mobile & In-Studio
                    </p>
                  </div>
                </div>

                <div className="w-full absolute bottom-0">
                  <div className="flex justify-center items-center bg-blue-300 hover:bg-blue-600  hover:text-white py-4 cursor-pointer rounded-b-lg">
                    <p className="text-sm font-poppins font-medium underline  ">
                      See Details
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block relative border rounded-lg">
                <div className="w-full h-1/2">
                  <img
                    className="w-full h-full rounded-2xl p-1"
                    src={img1}
                    alt="Burger"
                  />
                </div>
                <div className="p-2">
                  <p className="text-sm font-medium font-poppins">
                    Alexander Cort
                  </p>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>
                    <p className="text-xs font-normal font-poppins my-2">
                      123 Elm Street, New York
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>

                    <p className="text-xs font-normal font-poppins my-2">
                      Mobile & In-Studio
                    </p>
                  </div>
                </div>

                <div className="w-full absolute bottom-0">
                  <div className="flex justify-center items-center bg-blue-300 hover:bg-blue-600  hover:text-white py-4 cursor-pointer rounded-b-lg">
                    <p className="text-sm font-poppins font-medium underline  ">
                      See Details
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block relative border rounded-lg">
                <div className="w-full h-1/2">
                  <img
                    className="w-full h-full rounded-2xl p-1"
                    src={img3}
                    alt="Burger"
                  />
                </div>
                <div className="p-2">
                  <p className="text-sm font-medium font-poppins">
                    Alexander Cort
                  </p>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>
                    <p className="text-xs font-normal font-poppins my-2">
                      123 Elm Street, New York
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>

                    <p className="text-xs font-normal font-poppins my-2">
                      Mobile & In-Studio
                    </p>
                  </div>
                </div>

                <div className="w-full absolute bottom-0">
                  <div className="flex justify-center items-center bg-blue-300 hover:bg-blue-600  hover:text-white py-4 cursor-pointer rounded-b-lg">
                    <p className="text-sm font-poppins font-medium underline  ">
                      See Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:absolute left-0 right-0 top-1/2 lg:flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle bg-blue-300">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle bg-blue-300">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden gap-2 lg:mx-16">
              <div className="hidden lg:block  relative border rounded-lg">
                <div className="w-full h-1/2">
                  <img
                    className="w-full h-full rounded-2xl p-1"
                    src={img2}
                    alt="Burger"
                  />
                </div>
                <div className="p-2">
                  <p className="text-sm font-medium font-poppins">
                    Alexander Cort
                  </p>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>
                    <p className="text-xs font-normal font-poppins my-2">
                      123 Elm Street, New York
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>

                    <p className="text-xs font-normal font-poppins my-2">
                      Mobile & In-Studio
                    </p>
                  </div>
                </div>

                <div className="w-full absolute bottom-0">
                  <div className="flex justify-center items-center bg-blue-300 hover:bg-blue-600  hover:text-white py-4 cursor-pointer rounded-b-lg">
                    <p className="text-sm font-poppins font-medium underline  ">
                      See Details
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block  relative border rounded-lg">
                <div className="w-full h-1/2">
                  <img
                    className="w-full h-full rounded-2xl p-1"
                    src={img4}
                    alt="Burger"
                  />
                </div>
                <div className="p-2">
                  <p className="text-sm font-medium font-poppins">
                    Alexander Cort
                  </p>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>
                    <p className="text-xs font-normal font-poppins my-2">
                      123 Elm Street, New York
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>

                    <p className="text-xs font-normal font-poppins my-2">
                      Mobile & In-Studio
                    </p>
                  </div>
                </div>

                <div className="w-full absolute bottom-0">
                  <div className="flex justify-center items-center bg-blue-300 hover:bg-blue-600  hover:text-white py-4 cursor-pointer rounded-b-lg">
                    <p className="text-sm font-poppins font-medium underline  ">
                      See Details
                    </p>
                  </div>
                </div>
              </div>
              <div className=" relative border rounded-lg">
                <div className="w-full h-1/2">
                  <img
                    className="w-full h-full rounded-2xl p-1"
                    src={img3}
                    alt="Burger"
                  />
                </div>
                <div className="p-2">
                  <p className="text-sm font-medium font-poppins">
                    Alexander Cort
                  </p>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>
                    <p className="text-xs font-normal font-poppins my-2">
                      123 Elm Street, New York
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>

                    <p className="text-xs font-normal font-poppins my-2">
                      Mobile & In-Studio
                    </p>
                  </div>
                </div>

                <div className="w-full absolute bottom-0">
                  <div className="flex justify-center items-center bg-blue-300 hover:bg-blue-600  hover:text-white py-4 cursor-pointer rounded-b-lg">
                    <p className="text-sm font-poppins font-medium underline  ">
                      See Details
                    </p>
                  </div>
                </div>
              </div>
              <div className=" relative border rounded-lg">
                <div className="w-full h-1/2">
                  <img
                    className="w-full h-full rounded-2xl p-1"
                    src={img2}
                    alt="Burger"
                  />
                </div>
                <div className="p-2">
                  <p className="text-sm font-medium font-poppins">
                    Alexander Cort
                  </p>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>
                    <p className="text-xs font-normal font-poppins my-2">
                      123 Elm Street, New York
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>

                    <p className="text-xs font-normal font-poppins my-2">
                      Mobile & In-Studio
                    </p>
                  </div>
                </div>

                <div className="w-full absolute bottom-0">
                  <div className="flex justify-center items-center bg-blue-300 hover:bg-blue-600  hover:text-white py-4 cursor-pointer rounded-b-lg">
                    <p className="text-sm font-poppins font-medium underline  ">
                      See Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:absolute left-0 right-0 top-1/2 lg:flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle bg-blue-300">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle bg-blue-300">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden gap-2 lg:mx-16">
              <div className="hidden lg:block  relative border rounded-lg">
                <div className="w-full h-1/2">
                  <img
                    className="w-full h-full rounded-2xl p-1"
                    src={img1}
                    alt="Burger"
                  />
                </div>
                <div className="p-2">
                  <p className="text-sm font-medium font-poppins">
                    Alexander Cort
                  </p>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>
                    <p className="text-xs font-normal font-poppins my-2">
                      123 Elm Street, New York
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>

                    <p className="text-xs font-normal font-poppins my-2">
                      Mobile & In-Studio
                    </p>
                  </div>
                </div>

                <div className="w-full absolute bottom-0">
                  <div className="flex justify-center items-center bg-blue-300 hover:bg-blue-600  hover:text-white py-4 cursor-pointer rounded-b-lg">
                    <p className="text-sm font-poppins font-medium underline  ">
                      See Details
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block  relative border rounded-lg">
                <div className="w-full h-1/2">
                  <img
                    className="w-full h-full rounded-2xl p-1"
                    src={img1}
                    alt="Burger"
                  />
                </div>
                <div className="p-2">
                  <p className="text-sm font-medium font-poppins">
                    Alexander Cort
                  </p>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>
                    <p className="text-xs font-normal font-poppins my-2">
                      123 Elm Street, New York
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>

                    <p className="text-xs font-normal font-poppins my-2">
                      Mobile & In-Studio
                    </p>
                  </div>
                </div>

                <div className="w-full absolute bottom-0">
                  <div className="flex justify-center items-center bg-blue-300 hover:bg-blue-600  hover:text-white py-4 cursor-pointer rounded-b-lg">
                    <p className="text-sm font-poppins font-medium underline  ">
                      See Details
                    </p>
                  </div>
                </div>
              </div>
              <div className=" relative border rounded-lg">
                <div className="w-full h-1/2">
                  <img
                    className="w-full h-full rounded-2xl p-1"
                    src={img1}
                    alt="Burger"
                  />
                </div>
                <div className="p-2">
                  <p className="text-sm font-medium font-poppins">
                    Alexander Cort
                  </p>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>
                    <p className="text-xs font-normal font-poppins my-2">
                      123 Elm Street, New York
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>

                    <p className="text-xs font-normal font-poppins my-2">
                      Mobile & In-Studio
                    </p>
                  </div>
                </div>

                <div className="w-full absolute bottom-0">
                  <div className="flex justify-center items-center bg-blue-300 hover:bg-blue-600  hover:text-white py-4 cursor-pointer rounded-b-lg">
                    <p className="text-sm font-poppins font-medium underline  ">
                      See Details
                    </p>
                  </div>
                </div>
              </div>
              <div className=" relative border rounded-lg">
                <div className="w-full h-1/2">
                  <img
                    className="w-full h-full rounded-2xl p-1"
                    src={img1}
                    alt="Burger"
                  />
                </div>
                <div className="p-2">
                  <p className="text-sm font-medium font-poppins">
                    Alexander Cort
                  </p>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>
                    <p className="text-xs font-normal font-poppins my-2">
                      123 Elm Street, New York
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      className="my-auto"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99617 0.166626C7.71606 0.166626 9.95832 2.3354 9.95832 5.01865C9.95832 6.37078 9.46658 7.62608 8.6572 8.69005C7.76429 9.86368 6.66375 10.8862 5.42497 11.6889C5.14146 11.8744 4.88558 11.8884 4.57442 11.6889C3.32859 10.8862 2.22804 9.86368 1.34278 8.69005C0.532814 7.62608 0.0416565 6.37078 0.0416565 5.01865C0.0416565 2.3354 2.28392 0.166626 4.99617 0.166626ZM4.99617 3.53644C4.09679 3.53644 3.36329 4.27784 3.36329 5.16973C3.36329 6.06862 4.09679 6.7756 4.99617 6.7756C5.89613 6.7756 6.63669 6.06862 6.63669 5.16973C6.63669 4.27784 5.89613 3.53644 4.99617 3.53644Z"
                        fill="#5C635A"
                      />
                    </svg>

                    <p className="text-xs font-normal font-poppins my-2">
                      Mobile & In-Studio
                    </p>
                  </div>
                </div>

                <div className="w-full absolute bottom-0">
                  <div className="flex justify-center items-center bg-blue-300 hover:bg-blue-600  hover:text-white py-4 cursor-pointer rounded-b-lg">
                    <p className="text-sm font-poppins font-medium underline  ">
                      See Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:absolute left-0 right-0 top-1/2 lg:flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle bg-blue-300">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle bg-blue-300">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousle;
