// import React, { useState, useEffect } from "react";

// function Api() {
//     const url = "https://api.quicksell.co/v1/internal/frontend-assignment";
//     const [tickets, setTickets] = useState([]);
//     const [users, setUsers] = useState([]);
//     const [userGrouped, setUserGrouped] = useState([]);
//     const [show, setShow] = useState(false);
//     const [status, setStatus] = useState(true);
//     const [usered, setUsered] = useState(false);

//     const fetchInfo = async () => {
//         try {
//             let res = await fetch(url);
//             res = await res.json();
//             console.log(res)
//             setTickets(res.tickets);
//             setUsers(res.users);
//             setter(res.tickets, res.users);
//         } catch (err) {
//             console.log("Error: ", err);
//         }
//         console.log("fetck")

//     };

//     useEffect(() => {
//         fetchInfo();

//     }, []);

//     const groupTicketsByStatus = () => {
//         const groupedTickets = {};
//         tickets.forEach((ticket) => {
//             const status = ticket.status;
//             if (!groupedTickets[status]) {
//                 groupedTickets[status] = [];
//             }
//             groupedTickets[status].push(ticket);
//         });
//         return groupedTickets;
//     };

//     const groupedTickets = groupTicketsByStatus();


//     const groupTicketsByUser = () => {
//         const groupedTicketsUser = {};
//         tickets.forEach((ticket) => {
//             const status = ticket.userId;
//             if (!groupedTicketsUser[status]) {
//                 groupedTicketsUser[status] = [];
//             }
//             groupedTicketsUser[status].push(ticket);
//         });
//         return groupedTicketsUser;
//     };

//     const groupedTicketsUser = groupTicketsByUser();



//     // console.log("groupUser",setUserGrouped(groupUser))
//     // groupUser.map(e=>{
//     //         {e.map(item=>{
//     //             console.log(users[item.userId.split("-")[1]-1].name)
//     //         })
//     //     }
//     // })

//     // console.log("users",users)




//     //   console.log("combinedArray",combinedArray);


//     function setter(tickets, users) {
//         const combinedArray = tickets.map((user) => {
//             const userNameObject = users.find((name) => name.id === user.userId);
//             return { ...user, name: userNameObject ? userNameObject.name : null };
//         });
//         console.log("combinedArray", combinedArray)
//         let myArr = []
//         let groupUser = []
//         users.forEach((elem) => {
//             myArr = combinedArray.filter((e) => {
//                 return elem.name === e.name;
//             })
//             groupUser.push(myArr)
//         })
//         console.log("groupUser", groupUser)
//         setUserGrouped(groupUser)
//     }


//     console.log("userGrouped", userGrouped)


//     return (
//         <div>
//             {/* <div>
//         <button onClick={() => setShow(!show)}>
//           <svg
//             stroke="currentColor"
//             fill="currentColor"
//             stroke-width="0"
//             viewBox="0 0 16 16"
//             height="1em"
//             width="1em"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
//             ></path>
//           </svg>
//           Display
//           <svg
//             stroke="currentColor"
//             fill="currentColor"
//             stroke-width="0"
//             viewBox="0 0 16 16"
//             height="1em"
//             width="1em"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
//             ></path>
//           </svg>
//         </button>
//         <div>
//           {show && (
//             <div>
//               <div>
//                 <span>Grouping</span>
//                 <select
//                   name="Display"
//                   id="Display"
//                   onChange={(e) => {
//                     setUsered(e.target.value === "User");
//                     setStatus(e.target.value === "Status");
//                   }}
//                 >
//                   <option value="Status">Status</option>
//                   <option value="User">User</option>
//                   <option value="Priority">Priority</option>
//                 </select>
//               </div>
//               <div>
//                 <span>Ordering</span>
//                 <select name="Display" id="Display">
//                   <option value="Priority">Priority</option>
//                   <option value="Title">Title</option>
//                 </select>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <div>
//         {status &&
//           Object.keys(groupedTickets).map((ticketStatus, index) => (
//             <div key={index}>
//               <h2>{ticketStatus}</h2>
//               {groupedTickets[ticketStatus].map((ticket) => (
//                 <div key={ticket.id}>
//                   <h6>{ticket.id}</h6>
//                   {/* Add other ticket details as needed */}
//             {/* </div>
//               ))}
//             </div>
//           ))}
//       </div> */}
//             {/* <div>
//         {usered &&
//           Object.keys(groupedTicketsUser).map((userName, index) => (
//             <div key={index}>
//               <h2>{userName}</h2>
//               {groupedTicketsUser[userName].map((user) => (
//                 <div key={user.id}>
//                   <h6>{user.id}</h6>
//                 </div>
//               ))}
//             </div>
//           ))}
//       </div> */
//             }
//             <h1>hii</h1>
//             <div>'
//                 <h1>hii</h1>
//                 {
                    
//                     Object.keys(userGrouped).map((userName) => (
                        
//                         <div >
//                             <h3>{userName}</h3>
//                             <h1>{userGrouped[userName][0]?.name}</h1>
//                             {userGrouped[userName].map((user) => (
//                                 <div key={user.id}>
//                                     <h6>{user.title}</h6>
//                                 </div>
//                             ))}
//                         </div>
//                     ))

//                 }
//             </div>

//         </div>
//     );
// }

// export default Api;