import { projects } from "@/data";
import { PinContainer } from "./3d-pin";



const ReacentProjects = () => {
  return (
    <>
      <div className="py-20" id='projects'>
        <h1
          className="mb-4  font-extrabold leading-none tracking-tight  md:text-5xl lg: text-6xl dark: text-white"
        >
          A small selection of
          <span className="text-purple"> recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.map(({ title, des, img, iconLists, id, link }) => (
            <div
              key={id}
              className="sm:h-[41] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            >
              <PinContainer title={title} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] sm:h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden ig:rounded-3xl bg-violet-900">
                    <img src={"/bg.png"} alt="bg-img" />
                  </div>
                  <img src={img} alt={img} className="z-10 absolute bottom-0" />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black-100 lg:h-10 w-10 m-1 h-10 flex justify-center items-center"
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ReacentProjects;