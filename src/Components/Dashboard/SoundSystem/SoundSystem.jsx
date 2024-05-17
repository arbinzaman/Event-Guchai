import { useContext } from "react";
import { AuthContext } from "../../../Api/Context/AuthProvider";
import useUserRoles from "../../../Hooks/UseUserRole";
import { useQuery } from "@tanstack/react-query";
import SingleSoundSystem from "./SingleSoundSystem";

const SoundSystem = () => {
  const { user } = useContext(AuthContext);
  //   const [isAdmin] = useAdmin(user?.email);
  const vendorRole = useUserRoles(user?.email);

  const url = `http://localhost:3001/bookings`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      {vendorRole.vendorRoles =="sound_system" && (
        <>
          <div className=" ml-10 grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 text-justify">
            {bookings.map((booking) => (
              <SingleSoundSystem
                key={booking.bookingsID}
                booking={booking}
              ></SingleSoundSystem>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SoundSystem;
