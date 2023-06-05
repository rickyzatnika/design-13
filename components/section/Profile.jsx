/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";

import Link from "next/link";
import { SlSocialInstagram } from "react-icons/sl";

import "animate.css";

const Profile = () => {
  return (
    <>
      <AOSWrapper>
        <div
          className="w-full -top-1 min-h-screen bg-gradient-to-b from-stone-900 to-[#050608]  flex flex-col items-center justify-center py-10 lg:justify-between relative "
          id="profile"
        >
          {/* {showQrCode && <GetQrCode setShowQrCode={setShowQrCode} />} */}

          <div className="bg-[#333333] rounded-3xl shadow-lg shadow-black/10 w-[93%] md:w-[80%] py-12 relative  flex flex-col items-center justify-center  h-full  z-30">
            <div className=" flex shadow-inner overflow-hidden w-fit  p-6 sm:p-8 px-10 sm:px-14 shadow-black/20 flex-col justify-center gap-0 items-center relative mx-auto">
              <div className="absolute -bottom-8 -left-12 w-full">
                <Image
                  src="/img/bunga.png"
                  width={150}
                  height={150}
                  priority
                  alt=""
                  className="bg-goyang"
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                className="relative "
              >
                <div className="absolute top-0.5 left-3 mx-auto right-0 w-6/12 h-full -z-5 bg-gradient-to-t from-[#050608]/30 to-black/20 rounded-t-full  " />
                <img
                  src="/img/gallery/man.png"
                  alt=""
                  className="rounded-t-full object-cover object-center relative z-10 w-6/12 h-auto  mx-auto"
                />
              </div>

              <div className="mt-3 flex flex-col gap-2 items-center justify-center px-4">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="titles text-2xl text-stone-500 capitalize "
                >
                  Andi Saputra
                </h2>
                <Link
                  href="https://instagram.com/rahmadi.irawansyah"
                  target="_blank"
                  passHref
                  prefetch={false}
                >
                  <SlSocialInstagram
                    size={22}
                    className="text-stone-400/80 mb-2 animate-spin hover:animate-none"
                  />
                </Link>
                <div className="text-center text-stone-400/80 ">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="alex text-stone-400/80 text-xl"
                  >
                    Putra dari :
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="titles text-stone-400/80 text-xl"
                  >
                    Bpk. Irawan Yusmiatna{" "}
                  </p>
                  <p
                    className="text-stone-400/80"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    &
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    className="titles text-stone-400/80 text-lg"
                  >
                    Ibu Rosmini
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="brush text-6xl my-3 text-stone-400  "
            >
              &
            </div>
            <div className="relative  overflow-hidden shadow-inner  p-6 sm:p-8 px-10 sm:px-14 w-fit shadow-black/20  flex flex-col items-center justify-center gap-0">
              <div className="absolute -bottom-8 -right-14 ">
                <Image
                  src="/img/bunga.png"
                  width={150}
                  height={150}
                  priority
                  alt=""
                  className="bg-goyang "
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                className="relative overflow-hidden"
              >
                <div className="absolute top-0.5 left-3 mx-auto right-0 w-6/12 h-full -z-5 bg-gradient-to-t from-[#050608]/30 to-black/20 rounded-t-full  " />
                <img
                  src="/img/gallery/girl.png"
                  alt=""
                  className="rounded-t-full object-cover object-center relative z-10 w-6/12 h-auto  mx-auto"
                />
              </div>

              <div className="mt-3 flex flex-col gap-2 items-center justify-center px-4">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="titles text-2xl text-stone-500 capitalize "
                >
                  Nita Ayu
                </h2>
                <Link
                  href="https://instagram.com/rahmadi.irawansyah"
                  target="_blank"
                  passHref
                  prefetch={false}
                >
                  <SlSocialInstagram
                    size={22}
                    className="text-stone-400/80 mb-2 animate-spin hover:animate-none"
                  />
                </Link>
                <div className="text-center text-stone-400/80 ">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="alex text-stone-400/80 text-xl"
                  >
                    Putra dari :
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="titles text-stone-400/80 text-xl"
                  >
                    Bpk. Irawan Yusmiatna{" "}
                  </p>
                  <p
                    className="text-stone-400/80"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    &
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    className="titles text-stone-400/80 text-lg"
                  >
                    Ibu Rosmini
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Profile;
