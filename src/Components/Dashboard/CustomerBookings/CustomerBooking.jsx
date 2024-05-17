import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Api/Context/AuthProvider";

const CustomerBooking = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:3001/bookings/${user.email}`;

  const { data: booking = [] } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <div className="overflow-x-auto">
        {booking.length === 0 ? (
          <p className="text-2xl text-center text-teal-400 mt-10">
            No bookings found
          </p>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-10 mt-5">Your bookings</h1>
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Event Title</th>
                  <th>Customer Email</th>
                  <th>Price</th>
                  <th>Food</th>
                  <th>people</th>
                  <th>Sound System</th>
                  <th>Decoration</th>
                  <th>Media Support</th>
                </tr>
              </thead>
              <tbody>
                {booking.map((book, i) => (
                  <tr key={book.id}>
                    <th>{i + 1}</th>
                    <td>{book.eventTitle}</td>
                    <td>{book.customerEmail}</td>
                    <td>{book.price}</td>
                    <td>{book.food}</td>
                    <td>{book.people}</td>
                    <td>{book.sound_system}</td>
                    <td>{book.decoration}</td>
                    <td>{book.media}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomerBooking;
