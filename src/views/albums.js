let db;

const request = indexedDB.open("myDatabase", 1);

request.onerror = function (event) {
  console.error("Database error: " + event.target.errorCode);
};

request.onsuccess = function (event) {
  db = event.target.result;
  console.log("Database opened successfully");
};

request.onupgradeneeded = function (event) {
  db = event.target.result;
  const objectStore = db.createObjectStore("albums", {
    keyPath: "id",
    autoIncrement: true,
  });
  console.log("Object store created successfully");
};

export function addAlbum(album) {
  const transaction = db.transaction(["albums"], "readwrite");
  const objectStore = transaction.objectStore("albums");
  objectStore.add(album);
}

export function deleteAlbum(id) {
  const transaction = db.transaction(["albums"], "readwrite");
  const objectStore = transaction.objectStore("albums");
  objectStore.delete(id);
}

export function getAllAlbums() {
  const transaction = db.transaction(["albums"], "readonly");
  const objectStore = transaction.objectStore("albums");
  const request = objectStore.getAll();

  request.onsuccess = function (event) {
    console.log("All albums:", request.result);
  };
}

// export function getAllAlbums() {
//   return new Promise((resolve, reject) => {
//     const transaction = db.transaction(["albums"], "readonly");
//     const objectStore = transaction.objectStore("albums");
//     const request = objectStore.getAll();

//     request.onsuccess = function (event) {
//       resolve(request.result);
//     };

//     request.onerror = function (event) {
//       reject(request.error);
//     };
//   });
// }
