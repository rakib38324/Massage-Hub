import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay, Pagination } from "swiper/modules";
import React from "react";

const FeaturesAndPopularSite = () => {
  const popularCities = [
    { city: "Atlanta", state: "GA" },
    { city: "Indianapolis", state: "IN" },
    { city: "Philadelphia", state: "PA" },
    { city: "Boston", state: "MA" },
    { city: "Jacksonville", state: "FL" },
    { city: "Queens", state: "NY" },
    { city: "Chicago", state: "IL" },
    { city: "Kansas City", state: "MO" },
    { city: "Raleigh", state: "NC" },
    { city: "Chicago", state: "IL" },
    { city: "Los Angeles", state: "CA" },
    { city: "San Antonio", state: "TX" },
    { city: "El Paso", state: "TX" },
    { city: "Miami", state: "FL" },
    { city: "Tucson", state: "AZ" },
    { city: "Fresno", state: "CA" },
    { city: "Nashville", state: "TN" },
    { city: "Upland", state: "CA" },
    { city: "Houston", state: "TX" },
    { city: "Oklahoma City", state: "OK" },
    { city: "Washington", state: "D.C." },
  ];

  return (
    <div className=" mx-5 my-10">
      <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-2 ">
        <div>
          <p className="text-lg font-poppins font-medium my-2">
            Featured Testimonial
          </p>
          <div className="h-[430px] bg-white p-5 rounded-lg">
            <Swiper
              // slidesPerView={3}
              spaceBetween={10}
              freeMode={true}
              pagination={true}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[FreeMode, Autoplay, Pagination]}
              className="mySwiper  "
              breakpoints={{
                // For small device
                640: {
                  slidesPerView: 1,
                },
                // For medium device
                768: {
                  slidesPerView: 1,
                },
                // For larger screens
                1024: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide className=" mb-8  border border-white">
                <div className="h-[160px] grid grid-cols-3 gap-4 border rounded-xl">
                  <div className="col-span-1 w-full ">
                    <img
                      className="w-full h-[160px] rounded-2xl p-1"
                      src={img1}
                      alt="Burger"
                    />
                  </div>
                  <div className="col-span-2 my-3">
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
                      <p>123 Elm Street, New York</p>
                    </div>
                    <p className="text-sm font-poppins font-medium my-3">
                      Healing Bodywork{" "}
                      <span className="text-blue-600">by Cort</span>
                    </p>
                    <p className="text-xs font-poppins font-medium mt-7">
                      Corts healing bodywork massage was absolutely
                      transformative. Their intuitive touch and deep
                      understanding of
                      <span className="text-blue-500">...Read More</span>
                    </p>
                  </div>
                </div>
                <div className="h-[160px] grid grid-cols-3 gap-4 border rounded-xl mt-5">
                  <div className="col-span-1 w-full ">
                    <img
                      className="w-full h-[160px] rounded-2xl p-1"
                      src={img2}
                      alt="Burger"
                    />
                  </div>
                  <div className="col-span-2 my-3">
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
                      <p>123 Elm Street, New York</p>
                    </div>
                    <p className="text-sm font-poppins font-medium my-3">
                      Healing Bodywork{" "}
                      <span className="text-blue-600">by Cort</span>
                    </p>
                    <p className="text-xs font-poppins font-medium mt-7">
                      Corts healing bodywork massage was absolutely
                      transformative. Their intuitive touch and deep
                      understanding of
                      <span className="text-blue-500">...Read More</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" mb-8  border border-white">
                <div className="h-[160px] grid grid-cols-3 gap-4 border rounded-xl">
                  <div className="col-span-1 w-full ">
                    <img
                      className="w-full h-[160px] rounded-2xl p-1"
                      src={img1}
                      alt="Burger"
                    />
                  </div>
                  <div className="col-span-2 my-3">
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
                      <p>123 Elm Street, New York</p>
                    </div>
                    <p className="text-sm font-poppins font-medium my-3">
                      Healing Bodywork{" "}
                      <span className="text-blue-600">by Cort</span>
                    </p>
                    <p className="text-xs font-poppins font-medium mt-7">
                      Corts healing bodywork massage was absolutely
                      transformative. Their intuitive touch and deep
                      understanding of
                      <span className="text-blue-500">...Read More</span>
                    </p>
                  </div>
                </div>
                <div className="h-[160px] grid grid-cols-3 gap-4 border rounded-xl mt-5">
                  <div className="col-span-1 w-full ">
                    <img
                      className="w-full h-[160px] rounded-2xl p-1"
                      src={img2}
                      alt="Burger"
                    />
                  </div>
                  <div className="col-span-2 my-3">
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
                      <p>123 Elm Street, New York</p>
                    </div>
                    <p className="text-sm font-poppins font-medium my-3">
                      Healing Bodywork{" "}
                      <span className="text-blue-600">by Cort</span>
                    </p>
                    <p className="text-xs font-poppins font-medium mt-7">
                      Corts healing bodywork massage was absolutely
                      transformative. Their intuitive touch and deep
                      understanding of
                      <span className="text-blue-500">...Read More</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" mb-8  border border-white">
                <div className="h-[160px] grid grid-cols-3 gap-4 border rounded-xl">
                  <div className="col-span-1 w-full ">
                    <img
                      className="w-full h-[160px] rounded-2xl p-1"
                      src={img1}
                      alt="Burger"
                    />
                  </div>
                  <div className="col-span-2 my-3">
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
                      <p>123 Elm Street, New York</p>
                    </div>
                    <p className="text-sm font-poppins font-medium my-3">
                      Healing Bodywork{" "}
                      <span className="text-blue-600">by Cort</span>
                    </p>
                    <p className="text-xs font-poppins font-medium mt-7">
                      Corts healing bodywork massage was absolutely
                      transformative. Their intuitive touch and deep
                      understanding of
                      <span className="text-blue-500">...Read More</span>
                    </p>
                  </div>
                </div>
                <div className="h-[160px] grid grid-cols-3 gap-4 border rounded-xl mt-5">
                  <div className="col-span-1 w-full ">
                    <img
                      className="w-full h-[160px] rounded-2xl p-1"
                      src={img2}
                      alt="Burger"
                    />
                  </div>
                  <div className="col-span-2 my-3">
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
                      <p>123 Elm Street, New York</p>
                    </div>
                    <p className="text-sm font-poppins font-medium my-3">
                      Healing Bodywork{" "}
                      <span className="text-blue-600">by Cort</span>
                    </p>
                    <p className="text-xs font-poppins font-medium mt-7">
                      Corts healing bodywork massage was absolutely
                      transformative. Their intuitive touch and deep
                      understanding of
                      <span className="text-blue-500">...Read More</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div>
          <p className="ml-5 text-lg font-poppins font-medium my-2">
            Popular Cities
          </p>
          <div className=" h-[430px]  bg-white lg:mx-5 rounded-lg grid grid-cols-3">
            {popularCities?.map((city, i) => (
              <div>
                <p
                  key={i}
                  className="text-blue-600 underline text-center my-[18px]"
                >
                  {city?.city},{city?.state}
                </p>

                <hr className={`$ ? "hidden" : "block"} `} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAndPopularSite;
