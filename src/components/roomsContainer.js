import React, { Component } from "react";
import RoomsFilter from "./roomsFilter";
import RoomsList from "./roomsList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomsContainer);

// import React, { Component } from "react";
// import RoomsFilter from "./roomsFilter";
// import RoomsList from "./roomsList";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";

// function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             {" "}
//             Hello from room container
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }

// export default RoomsContainer;
