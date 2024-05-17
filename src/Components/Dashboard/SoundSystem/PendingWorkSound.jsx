import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { TiTickOutline } from "react-icons/ti";

const PendingWorkSound = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const url = `http://localhost:3001/sound-system`;

  const { data: pendingWork = [] } = useQuery({
    queryKey: ["pendingWork"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
    //   console.log(data);
      return data;
    },
  });
  const handleUpdateStatus = (sound_systemID ) => {
    fetch(`http://localhost:3001/sound-system/${sound_systemID }`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Status updated to completed") {
            // toast.success("Make Admin Successfully");
            setIsButtonDisabled(true);
        }
      });
  };
  const filteredPendingWork = pendingWork.filter(work => work.status !== "done");

  return (
    <div className=" ml-10 grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 text-justify">
      {filteredPendingWork.map((work, sound_systemID) => (
        <div key={sound_systemID} className="card mt-5 w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{work.quantity}</h2>
            <div className="card-actions justify-end">
              <button
                className="btn text-3xl"
                onClick={() => handleUpdateStatus(work)}
                disabled={isButtonDisabled}
              >
                <TiTickOutline />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PendingWorkSound;
