import CommentForm from "../commentForm";
import { FaUserCircle } from "react-icons/fa";
import AOSWrapper from "../AOS/AOSWrapper";

const Wish = ({ guest, posts }) => {
  return (
    <>
      <AOSWrapper>
        <div className="w-full " id="wish">
          <CommentForm guest={guest} />
          <div className="w-full pt-10 pb-24 relative overflow-y-scroll h-[90%] bg-[#222222] pl-3 lg:px-10 ">
            <h2 className="text-stone-400">
              {posts?.length + 1}{" "}
              <span className="brush text-sm">Post Comment</span>
            </h2>
            <ol className=" p-8   ">
              <li className="w-full border-b pb-4 border-stone-500">
                <div className="absolute w-3 h-3 left-3 lg:left-8 ">
                  <FaUserCircle
                    className="text-stone-500/80 shadow-md shadow-stone-400/80 rounded-full"
                    size={26}
                  />
                </div>
                <span className="mb-1 text-lg titles  leading-none text-stone-400">
                  WebQodes Digital Invitation
                </span>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="mb-2 p-2 text-sm leading-relaxed lg:text-md  text-stone-400/80 "
                >
                  Happy wedding Rio & Nisa, semoga menjadi keluarga yang
                  Sakinah, Mawadah & Warohmah.. Amiin ..
                </p>
                <small className="text-stone-400/80 p-2 ">
                  10 Juni 2023, 9:14 pm
                </small>
              </li>
            </ol>

            {posts?.map((post, i) => (
              <ol key={i} className="p-8  ">
                <li className="w-full border-b pb-4 border-stone-500 mb-2">
                  <div className="absolute w-3 h-3 left-3 lg:left-8 ">
                    <FaUserCircle
                      className="text-stone-500/80 shadow-md shadow-stone-400/80 rounded-full"
                      size={24}
                    />
                  </div>
                  <span className="mb-1 capitalize text-lg titles  leading-none text-stone-400">
                    {post?.name}
                  </span>

                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="mb-4 p-2 text-sm leading-relaxed lg:text-md  text-stone-400/80 "
                  >
                    {post?.comments}
                  </p>

                  <small className="text-stone-400/80 p-2">{post?.date}</small>
                </li>

                {!post?.reply ? (
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="text-sm italic text-stone-400/80"
                  >
                    Belum ada balasan ...
                  </p>
                ) : (
                  <div className="bg-[#333333] w-full h-auto py-10 pt-4 px-4 relative">
                    <h1 className="mb-2  text-sm text-stone-400/80">
                      Balasan dari Rio & Nisa
                    </h1>
                    <div className="relative ">
                      <p className="text-stone-400/80 text-sm">{post?.reply}</p>
                    </div>
                  </div>
                )}
              </ol>
            ))}
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Wish;
