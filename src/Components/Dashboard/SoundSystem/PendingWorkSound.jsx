import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { TiTickOutline } from "react-icons/ti";

const PendingWorkSound = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const url = `http://localhost:3001/sound-system`;

  const { data: pendingWork = [], refetch } = useQuery({
    queryKey: ["pendingWork"],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      console.log(pendingWork);
      return data;
    },
  });

  const handleUpdateStatus = (sound_systemID) => {
//    console.log(sound_systemID);
    fetch(`http://localhost:3001/sound-system/${sound_systemID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "completed" }), // Adjust according to your API requirements
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.message === "Status updated to completed") {
            toast.success("Status updated to completed");
            window.location.reload();
          setIsButtonDisabled(true);
          refetch(); 
        } else {
          console.error("Failed to update status");
          toast.error("Failed to update status");
        }
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

  const filteredPendingWork = pendingWork.filter((work) => work.status !== "done");

  return (
    <div className="ml-10 grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 text-justify">
      {filteredPendingWork.map((work) => (
        <div key={work.sound_systemID} className="card mt-5 w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{work.quantity}</h2>
            <div className="card-actions justify-end">
              <button
                className="btn btn-xs text-xl"
                onClick={() => handleUpdateStatus(work.sound_systemID)}
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
