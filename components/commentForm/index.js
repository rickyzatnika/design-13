import axios from "axios";
import { useForm } from "react-hook-form";
import moment from "moment";
import Swal from "sweetalert2";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";

const CommentForm = ({ guest }) => {

  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { uuid } = router.query;

  const formSubmit = async ({ comments }) => {
    const userId = guest?.userId;
    await axios
      .patch(`${process.env.NEXT_PUBLIC_PRO_URI}/invitation/comment/${uuid}`, {
        comments: comments,
        date: moment().format("DD MMMM YYYY, h:mm a"),
      })
      .then(() => {
        setLoading(true);
        setTimeout(() => {
          Swal.fire({
            title: "Terkirim",
            icon: "success",
            text: "Terima Kasih atas Partisipasinya",
            showConfirmButton: false,
            showClass: {
              popup: "animate__animated animate__zoomIn",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOut",
            },
          }),
            reset();
          setLoading(false);
          location.reload();
        }, 400);
        return () => clearTimeout();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: "Error",
        });
        reset();
        console.log(error)
      });
  };


  return (
    <>
      <AOSWrapper>
        <div
          id="wish"
          className="overflow-hidden shadow-xl  pt-24 pb-2  shadow-black/10 px-1 lg:px-3 relative bg-[#050608]"
        >
          <div className="absolute top-8 bg-goyang -right-12">
            <Image src="/img/bunga-2.png" alt="" width={200} height={175} objectFit="cover" />
          </div>
          <div className="pt-9 text-left">
            <div className="flex gap-2 items-center bg-gradient-to-tr from-stone-400 py-2 via-stone-400 to-stone-600  bg-clip-text text-transparent ">
              <h3
                data-aos="fade-right"
                data-aos-duration="1500"
                className="text-2xl alex ">Pesan</h3>
              <p
                data-aos="fade-up"
                data-aos-duration="1500"
                className="titles text-4xl ">
                &
              </p>
              <h3 data-aos="fade-left"
                data-aos-duration="1500" className="text-2xl alex">Harapan</h3>
            </div>
            <p className="text-stone-400/80 brush px-2 text-xl">
              Do`a dan ucapan terbaik untuk kami
            </p>
          </div>
          <form
            onSubmit={handleSubmit(formSubmit)}
            accept-charset="UTF-8"
            className="max-w-3xl mx-auto relative px-2 py-9 flex flex-col "
          >
            <div className="pt-3 antialiased">
              <textarea
                name=""
                cols="30"
                rows="10"
                className="w-full font-normal p-4 text-sm focus:outline-zinc-400 focus:border-none placeholder:italic rounded text-zinc-500 border-none  "
                placeholder="Tulis Pesan ..."
                {...register("comments", {
                  required: true,
                })}
              ></textarea>
            </div>

            <button
              type="submit"
              className="rounded text-sm sm:text-md w-full lg:w-fit mx-auto py-2 px-8 mt-3 bg-[#F5F5F5] shadow text-zinc-500 transition-all duration-300 ease-linear hover:scale-95 "
            >
              {loading ? (
                "loading..."
              ) : (
                "Kirim"
              )}
            </button>
          </form>
        </div>
      </AOSWrapper>
    </>
  );
};

export default CommentForm;
