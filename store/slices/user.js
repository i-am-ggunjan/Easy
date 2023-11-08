import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const setToken = createAsyncThunk(
//     "appState/setToken",
//     async (payload, getState) => {
//         return new Promise(async (resolve, reject) => {
//             try {
//                 const decoded = jwt.verify(payload, LoginSecreatKey);
//                 console.log("decoded : ", decoded);
//                 //   const user = await getUserByEmail(decoded?.email);
//                 // resolve({ token: payload, user })
//             } catch (error) {
//                 removeUserToken();
//                 if (payload == null) { // user want to logout
//                     reject("logout")
//                 } else {
//                     reject("Error : ", error)
//                 }
//             }
//         })
//     }
// )

// const _studentData = {
//   "_id": "64cdf684be39b288b17e37e7",
//   "StudentId": "",
//   "full_name": "Rahul 2",
//   "username": "",
//   "phoneno": "919310964293",
//   "email": "rahulkashyap2870@gmail.com",
//   "profile": "-1",
//   "isPremiumAccount": false,
//   "transactionID": "-1",
//   "streamID": "-1",
//   "programeID": "-1",
//   "role": "1",
//   "otpCode": 990006,
//   "isVerified": true,
//   "isLeads": false,
//   "createdAt": {
//     "$date": "2023-08-05T07:13:08.896Z"
//   },
//   "updatedAt": {
//     "$date": "2023-09-18T08:19:42.697Z"
//   },
//   "__v": 1,
//   "password": "root",
//   "address": {
//     "address": "address",
//     "city": "West Delhi",
//     "state": "Delhi",
//     "zip": "110087",
//     "country": "India",
//     "mobile": "8448443891"
//   },
//   "batch": [
//     {
//       "code": "BI-HRho8F",
//       "program": "IIT-JEE DROPPER"
//     }
//   ],
//   "gender": "male",
//   "isBlocked": false,
//   "miniCourses": [
//     [
//       {
//         "index": 2,
//         "url": "https://easyhaionline.nyc3.digitaloceanspaces.com/videos/659fdad0-d416-4eeb-a5c8-2af9242b3964/output_playlist.m3u8",
//         "name": "Class 12th_EM_PHYSICS_Electric Charges and Fields.mp4",
//         "video_price": "11",
//         "videoPlaylistId": "64d1e4efb1fc0d425f81bf27"
//       },
//       {
//         "index": 3,
//         "url": "https://easyhaionline.nyc3.digitaloceanspaces.com/videos/7012ebe9-9a9a-4296-8f09-00f346fa3879/output_playlist.m3u8",
//         "name": "Class 12th_EM_PHYSICS_Electrostatic potential and capacitance-II.mp4",
//         "video_price": "11",
//         "videoPlaylistId": "64d1e548b1fc0d425f81bf2b"
//       },
//       {
//         "index": 2,
//         "url": "https://easyhaionline.nyc3.digitaloceanspaces.com/videos/782aba0e-4fc0-4ef9-a271-8f40e8816e6a/output_playlist.m3u8",
//         "name": "Class 12th_EM_PHYSICS_Electrostatic potential and capacitance-I.mp4",
//         "video_price": "11",
//         "videoPlaylistId": "64d1e548b1fc0d425f81bf2b"
//       },
//       {
//         "index": 2,
//         "url": "https://easyhaionline.nyc3.digitaloceanspaces.com/videos/9cd4e2af-8a32-4607-9fba-087d020714a7/output_playlist.m3u8",
//         "name": "pexels_videos_4409 (1080p).mp4",
//         "video_price": "11",
//         "videoPlaylistId": "64d32ec857bcdd43473bd2ed"
//       }
//     ]
//   ],
//   "name": {
//     "alias": "",
//     "firstName": "Rahul",
//     "lastName": ""
//   },
//   "profileImage": "",
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2RmNjg0YmUzOWIyODhiMTdlMzdlNyIsImVtYWlsIjoiIiwicGhvbmVOdW1iZXIiOiI5MTkzMTA5NjQyOTMiLCJpYXQiOjE2OTE1NjQ4MzEsImV4cCI6MTY5Mjg2MDgzMX0.A-VKidQ1pC3OWOpvy2LTaaaofQ_2LuZDnS9ciOrSvFY",
//   "wallet": 99739026,
//   "isDoubtAvailPerDay": 5,
//   "additionalProducts": [
//     [],
//     []
//   ],
//   "purchasedCourse": [
//     {
//       "orderNumber": "EHO-23/08-93400133822",
//       "id": "64ddf21323bd849ae41121fa",
//       "accessibleStreams": [
//         {
//           "id": "1-3-1-5-1",
//           "nodeID": "gvjFXagUxm04riKwEkifU",
//           "name": "PHYSICS ",
//           "showStreams": "BOARD/CBSE/XII SCIENCE /PHYSICS "
//         }
//       ],
//       "parentStreams": [
//         "NCERT"
//       ],
//       "programName": "1 YEAR PHYSICS 12TH CLASS",
//       "validity": "6",
//       "coupon": null,
//       "programPrice": 1500
//     },
//     {
//       "id": "64c9f9dda00f6eed532d7765",
//       "accessibleStreams": [
//         {
//           "id": "1-2-1",
//           "nodeID": "RLu0mAKgQ5uobxz9-tt5G",
//           "name": "XI",
//           "showStreams": "NEET/XI"
//         },
//         {
//           "id": "1-2-2",
//           "nodeID": "tAJHUdO-FUcCNfCXvVilt",
//           "name": "XII",
//           "showStreams": "NEET/XII"
//         },
//         {
//           "id": "1-3-1-4",
//           "nodeID": "uI_-X7sn42nGtizcwo-ml",
//           "name": "11 CLASS",
//           "showStreams": "BOARD/CBSE/11 CLASS"
//         },
//         {
//           "id": "1-3-1-5",
//           "nodeID": "uhH-EFPZEZD_GBd03jHKS",
//           "name": "12 CLASS",
//           "showStreams": "BOARD/CBSE/12 CLASS"
//         },
//         {
//           "id": "1-5",
//           "nodeID": "8SORFNQfJU-y643k6-IOg",
//           "name": "KVPY",
//           "showStreams": "KVPY"
//         }
//       ],
//       "parentStreams": [
//         "NEET"
//       ],
//       "programName": "NEET FOUNDATION",
//       "validity": "24",
//       "coupon": {
//         "textInput": "BHU11acc",
//         "_id": "64e2eec5e73629602b6beb84",
//         "token": "BHU11acc",
//         "amount": "1",
//         "tokenMode": "exact_amount",
//         "createdAt": "2023-08-21T04:57:41.984Z",
//         "__v": 0
//       },
//       "programPrice": 50975,
//       "orderNumber": "EHO-23/08-93499931302"
//     },
//     {
//       "id": "64c9ee45a00f6eed532d773a",
//       "accessibleStreams": [
//         {
//           "id": "1-3-1-1",
//           "nodeID": "ckQWps6Hhf-0EPvCrEAKX",
//           "name": "8 CLASS",
//           "showStreams": "BOARD/CBSE/8 CLASS"
//         },
//         {
//           "id": "1-6",
//           "nodeID": "STIqgUD3TJq4iJMc4B9Bg",
//           "name": "OLYMPIAD",
//           "showStreams": "OLYMPIAD"
//         }
//       ],
//       "parentStreams": [
//         "NCERT"
//       ],
//       "programName": "8 CLASS",
//       "validity": "12",
//       "coupon": {
//         "textInput": "BHU11acc",
//         "_id": "64e2eec5e73629602b6beb84",
//         "token": "BHU11acc",
//         "amount": "1",
//         "tokenMode": "exact_amount",
//         "createdAt": "2023-08-21T04:57:41.984Z",
//         "__v": 0
//       },
//       "programPrice": 21599,
//       "orderNumber": "EHO-23/08-93499938944"
//     }
//   ],
//   "doubtAvailPerDay": 2
// }

const initialState = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
    },
  },

  extraReducers: {
    // [setToken.pending]: (state, action) => {
    //     state.modal = {
    //         isOpen: true,
    //         content: "loading",
    //         isClosable: false,
    //         width: 0
    //     };
    // },
    // [setToken.fulfilled]: (state, action) => {
    //     state.token = action.payload?.token;
    //     state.user = action.payload?.user;
    //     state.modal = {
    //         isOpen: false,
    //         content: null,
    //         isClosable: true,
    //         width: 0,
    //         data: null
    //     }
    // },
    // [setToken.rejected]: (state, action) => {
    //     state.token = null;
    //     state.user = null;
    //     state.modal = {
    //         isOpen: false,
    //         content: null,
    //         isClosable: true,
    //         width: 0,
    //         data: null
    //     };
    //     if (action.error?.message === "logout") {
    //         state.message = {
    //             messageType: "message",
    //             message: "Successfully Logged Out"
    //         };
    //     } else {
    //         state.message = {
    //             messageType: "alert",
    //             message: "Please Try To Login"
    //         };
    //     }
    // },
  },
});

export const { setUser,setToken } = userSlice.actions;

export default userSlice.reducer;
