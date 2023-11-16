import { openDatabase } from "expo-sqlite";
import { Place } from "../models/place";

const database = openDatabase("places.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL
          )`,
        [],
        () => {
          console.log("Resolving");
          resolve();
        },
        (_, error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  });
  return promise;
};

// export function insertPlace(place) {
//   const promise = new Promise((resolve, reject) => {
//     database.transaction((tx) => {
//       tx.executeSql(
//         `INSERT INTO places (title, imageUri, lat, lng) VALUES (?, ?, ?, ?)`,
//         [place.title, place.imageUri, place.location.lat, place.location.long],
//         (_, result) => {
//           console.log(result);
//           resolve(result);
//         },
//         (_, error) => {
//           console.log(error);
//           reject(error);
//         }
//       );
//     });
//   });
//   return promise;
// }

// export const fetchPlaces = () => {
//   const promise = new Promise((resolve, reject) => {
//     database.transaction((tx) => {
//       tx.executeSql(
//         "SELECT * FROM places",
//         [],
//         (_, result) => {
//           resolve(result.rows._array);
//           const places = [];
//           result.rows._array.map((item) => {
//             places.push(
//               new Place(
//                 item.title,
//                 item.imageUri,
//                 {
//                   lat: item.lat,
//                   lng: item.lng,
//                 },
//                 item.id
//               )
//             );
//             resolve(places);
//           });
//         },
//         (_, error) => {
//           console.log(error);
//           reject(error);
//         }
//       );
//     });
//   });

//   return promise;
// };
