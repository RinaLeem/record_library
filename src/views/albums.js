export let db;

const request = indexedDB.open("myDatabase", 1);

request.onerror = function (event) {
  console.error("Database error: " + event.target.errorCode);
};

request.onsuccess = function (event) {
  db = event.target.result;
  console.log("Database opened successfully");
  getAllAlbums();
};

request.onupgradeneeded = function (event) {
  db = event.target.result;
  const objectStore = db.createObjectStore("albums", {
    keyPath: "id",
    autoIncrement: true,
  });
  console.log("Object store created successfully");
};

export function openDB() {
  console.log("openDB");
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("myDatabase", 1);

    request.onerror = function (event) {
      console.error("Database error: " + event.target.errorCode);
      reject(event.target.errorCode);
    };

    request.onsuccess = function (event) {
      db = event.target.result;
      console.log("Database opened successfully");
      resolve();
    };

    request.onupgradeneeded = function (event) {
      db = event.target.result;
      const objectStore = db.createObjectStore("albums", {
        keyPath: "id",
        autoIncrement: true,
      });
      console.log("Object store created successfully");
    };
  });
}

export function addAlbum(album) {
  const transaction = db.transaction(["albums"], "readwrite");
  const objectStore = transaction.objectStore("albums");
  objectStore.add(album);
}

export function deleteAlbum(album) {
  const transaction = db.transaction(["albums"], "readwrite");
  const objectStore = transaction.objectStore("albums");
  const request = objectStore.delete(album.id); // Удаление по уникальному id
  request.onsuccess = function (event) {
    console.log(
      "Album with id " + album.id + " has been deleted from the database"
    );
  };
}

// export function getAllAlbums() {
//   const transaction = db.transaction(["albums"], "readonly");
//   const objectStore = transaction.objectStore("albums");
//   const request = objectStore.getAll();

//   request.onsuccess = function (event) {
//     console.log("All albums:", request.result);
//   };
// }

export function getAllAlbums(callback) {
  const transaction = db.transaction(["albums"], "readonly");
  const objectStore = transaction.objectStore("albums");
  const request = objectStore.getAll();

  request.onsuccess = function (event) {
    console.log("All albums:", request.result);
    const albums = request.result;
    console.log(albums);
    if (callback) {
      callback(albums);
    }
  };
  request.onerror = function (event) {
    console.error("Error fetching albums:", event.target.error);
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
