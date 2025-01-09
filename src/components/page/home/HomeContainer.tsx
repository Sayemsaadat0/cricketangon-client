import Button from "@/components/core/button/Button";
import ImageSlider from "@/components/shared/ImageSlider";
import Image from "next/image";
import Link from "next/link";

const HomeContainer = () => {
  return (
    <div className="crick-Container  w-full h-full  text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-28 gap-5 justify-items-center">
      <div className="row-span-2">
        <Link href={"/"}>
          <div className="w-full lg:max-w-[300px]  bg-gradient-to-t from-[#1B023B80] to-[#7E19A6] p-3 rounded-[20px] group hover:bg-c-violet-600 duration-300">
            <div className="p-3 ">
              <h3 className="text-[32px] text-left ">Fantacy Cricket </h3>
              <p>
                Create your dream team, score points based on real matches, and
                compete globally.Join now to turn your cricket knowledge into
                victory!
              </p>
            </div>
            <div className=" group-hover:scale-105 duration-300  ">
              <ImageSlider
             autoPlayInterval={10000}
             className="object-cover w-full h-full rounded-[20px]"
                images={["/2.png", "/2.png", "/2.png"]}
              ></ImageSlider>
            </div>
          </div>
        </Link>
      </div>
      <Link href={'/article'}  className="block row-span-3">
        <div className=" w-full bg-gradient-to-t from-[#1B023B80] to-[#7E19A6] rounded-[20px] space-y-6 group hover:bg-c-violet-600 duration-300">
          <div className="w-full  group-hover:scale-105 duration-300  ">
            <ImageSlider
             autoPlayInterval={10000}
              className="object-cover min-h-[620px] w-full rounded-[20px]"
              images={["/taskin.jpeg", "/taskin.jpeg", "/taskin.jpeg"]}
            ></ImageSlider>
            {/* <Image
              className="object-cover min-h-[620px] w-full rounded-[20px]"
              src={"/taskin.jpeg"}
              alt="fantasy"
              width={394}
              height={620}
            /> */}
          </div>
        </div>
      </Link>
      <div className="w-full row-span-1 lg:max-w-[300px]">
        <Link
          href={"/photos"}
          className="rounded-[20px] space-y-6 duration-300 group flex items-center"
        >
          <div className="w-full h-full max-h-[170px] rounded-[20px] overflow-hidden bg-gradient-to-t from-[#1B023B80] to-[#7E19A6]">
            <ImageSlider
             autoPlayInterval={10000}
             className="object-cover w-full h-full rounded-[20px]"
              images={[
                "https://i.pinimg.com/736x/67/1b/f4/671bf4d5900aa9dc4e4f4fd0622c9233.jpg",
                "https://i.pinimg.com/736x/67/1b/f4/671bf4d5900aa9dc4e4f4fd0622c9233.jpg",
                "https://i.pinimg.com/736x/67/1b/f4/671bf4d5900aa9dc4e4f4fd0622c9233.jpg",
              ]}
            ></ImageSlider>
          </div>
        </Link>
      </div>

      <div className="w-full row-span-1 lg:max-w-[300px]">
        <div className="space-y-6 duration-300 group  flex items-center">
          <div className="w-full h-full  overflow-hidden">
            <Image
              className="object-cover w-full rounded-[20px] h-full "
              src={"/coming.png"}
              // src={"/score.png"}
              alt="fantasy"
              width={350}
              height={200}
            />
          </div>
        </div>
      </div>

      <div className="row-span-2 ">
        <Link href={"/own-11"}>
          <div className="w-full lg:max-w-[300px]  bg-gradient-to-t from-[#1B023B80] to-[#7E19A6] p-3 rounded-[20px] group hover:bg-c-violet-600 duration-300">
            <div className=" p-3 ">
              <h3 className="xl:text-[32px] text-left ">Pick your own XI </h3>
              <p className="leading-7">
                You’ve got the best players in the world available to you – who
                gets in your World Best XI?
              </p>
            </div>
            <div className="w-full h-full lg:max-w-[350px] group-hover:scale-105 duration-300 ">
              <ImageSlider
             autoPlayInterval={10000}
             className="object-cover w-full h-full rounded-[20px]"
                images={["/pick.png", "/pick.png", "/pick.png"]}
              ></ImageSlider>
            </div>
          </div>
        </Link>
      </div>
      <div className="h-full  w-full row-span-2 lg:max-h-[415px] lg:max-w-[300px]">
        <Link
          href={"/stats"}
          className="flex-1 h-full w-full  rounded-[20px] group duration-300"
        >
          <div className="h-full group-hover:scale-105 duration-300">
            <ImageSlider
             autoPlayInterval={10000}
             className="object-cover w-full h-full rounded-[20px]"
              images={["/stats.png", "/stats.png", "/stats.png"]}
            ></ImageSlider>
          </div>
        </Link>
      </div>

      <div className="w-full">
        <div className=" bg-gradient-to-t from-[#1B023B80] to-[#7E19A6] p-5 rounded-[20px]  duration-300 group hover:bg-c-violet-600 flex flex-col lg:flex-row  md:items-center justify-between  w-full gap-10 ">
          <div className="w-full h-full md:shrink-0 md:inline-block lg:max-w-[148px] md:max-h-[148px] group-hover:scale-105 duration-300 aspect-square ">
            <ImageSlider
             autoPlayInterval={10000}
             className="object-cover w-full h-full rounded-[20px]"
              images={[
                "https://i.pinimg.com/736x/eb/11/5e/eb115e0535fa1a65a92ab738ef6b1333.jpg",
                "https://i.pinimg.com/736x/eb/11/5e/eb115e0535fa1a65a92ab738ef6b1333.jpg",
                "https://i.pinimg.com/736x/eb/11/5e/eb115e0535fa1a65a92ab738ef6b1333.jpg",
              ]}
            ></ImageSlider>
          </div>

          <div className="w-full flex  flex-col justify-center items-center gap-2">
            <h3 className="text-[32px] text-left ">Shop Now</h3>
            <div className=" p-[1.5px] w-full bg-gradient-to-tr from-cyan-400 via-c-violet-200 to-c-violet-300  rounded-full ">
              <Link href={"/login"}>
                <Button className="w-full" variant="roundedBtn" label="Sign in" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
