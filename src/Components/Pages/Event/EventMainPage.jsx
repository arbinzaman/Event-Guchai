const EventMainPage = () => {
  return (
    <div className="mb-10 mt-10">
      <section className="p-4 lg:p-8  text-black-100  ">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row shadow-2xl">
            <img
              src="https://source.unsplash.com/640x480/?1"
              alt=""
              className="h-80  aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <h3 className="text-3xl font-bold">
           Starter 
              </h3>
              <p className="my-6 text-black-400  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse shadow-2xl">
            <img
              src="https://source.unsplash.com/640x480/?2"
              alt=""
              className="h-80  aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase text-black-400  ">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="my-6 text-black-400  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row shadow-2xl">
            <img
              src="https://source.unsplash.com/640x480/?3"
              alt=""
              className="h-80  aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase text-black-400  ">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="my-6 text-black-400  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventMainPage;
