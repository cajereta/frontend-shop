import Image from "next/image";

export const Testimonials = () => {
  return (
    <div className="flex gap-6 my-10 px-12 md:px-14 xl:px-24 flex-col h-[40rem] md:flex-row w-full justify-center  ">
      <div className="flex flex-col w-full md:w-[30%] justify-center text-center h-full p-4 md:p-12 items-center gap-4 rounded-xl ring-gray-900/30 border ">
        <Image
          src="/avatar.png"
          width={64}
          height={64}
          className="rounded-full  mx-auto"
          alt="Avatar"
        />
        <div>
          <h3 className="font-medium text-gray-800">John Doe</h3>
          <h4 className="text-gray-700">CEO</h4>
        </div>
        <p className="text-gray-600">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        </p>
      </div>
      <div className="w-full md:w-[70%] h-full rounded-md">
        <div
          className="w-full h-full rounded-xl bg-cover"
          style={{ backgroundImage: 'url("/22.jpg")' }}
        >
          <div className="flex w-full h-full bg-black/60 rounded-xl justify-center items-center [text-shadow:_0px_10px_10px_rgb(0_0_0_/_60%)]">
            <div className="flex w-3/5 h-3/5 rounded-lg bg-white/30 items-center">
              <div className="flex flex-col text-center gap-2 mx-auto items-center">
                <button className="bg-black w-fit p-2  text-white font-bold border border-slate-800 rounded-md uppercase">
                  25% discount
                </button>
                <h3 className="text-white text-2xl font-bold ">
                  Summer Discount
                </h3>
                <p className="text-gray-100 font-medium">
                  Starting from $19.99
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
