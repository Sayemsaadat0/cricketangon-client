import RandomShapeGenerator from "@/components/core/RandomShapeGenerator";
import axiosRequest from "@/lib/axiosRequest";
import StatsDetailsContainer from "../_components/_details/StatsDetailsContainer";

interface Props {
  params: { slug: number };
}

const page = async ({ params }: Props) => {
  const { slug } = params;

  try {
    const data = await axiosRequest({
      url: `/stats/${slug}/`,
      method: "get",
    });

    return (
      <div className="crick-Container relative  ">
        <div className="mt-10 max-w-7xl overflow-hidden mx-auto fixed  w-full top-0 left-1/2 -translate-x-1/2">
          <RandomShapeGenerator />
        </div>
        <div className="relative mx-auto mt-24  w-[80%]">
          <StatsDetailsContainer data={data} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching article details:", error);
    return (
      <div>
        <p>Failed to load article details. Please try again later.</p>
      </div>
    );
  }
};

export default page;
