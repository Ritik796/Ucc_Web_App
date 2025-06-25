import { ref, get, update, set, remove } from "firebase/database";
import { storage } from "./firebaseConfig";
import { ref as ref_storage, uploadBytes } from "firebase/storage";
import * as common from "../common/commonFunctions";
import * as firebaseService from "./firebaseCityMap";

export const uploadImageToStorage = async (image, filePath) => {
  return new Promise(async (resolve) => {
    try {
      let storageRef = ref_storage(storage, filePath);
      await uploadBytes(storageRef, image);
      resolve(`success`);
    } catch (error) {
      console.warn(error);
      resolve(error);
    }
  });
};
export const getData = (path) => {
  return new Promise((resolve) => {
    firebaseService.getCityWiseDatabase().then((resp) => {
      get(ref(resp.db, path)).then((snapshot) => {
        let data = snapshot.val();
        resolve(data);
      });
    });
  });
};

export const saveData = (path, data) => {
  return new Promise((resolve) => {
    firebaseService.getCityWiseDatabase().then((resp) => {
      update(ref(resp.db, path), data);
      resolve("success");
    });
  });
};

export const setData = (path, value) => {
  return new Promise((resolve) => {
    firebaseService.getCityWiseDatabase().then((resp) => {
      set(ref(resp.db, path), value);
      resolve("success");
    });
  });
};

export const RemoveData = (path) => {
  return new Promise((resolve) => {
    firebaseService.getCityWiseDatabase().then((resp) => {
      remove(ref(resp.db, path));
      resolve("success");
    });
  });
};

/*
    Function name : getLastKey
    Description   : This function is working for get  value from given path and update lastkey.
    Written by : Anil
    Written date  : 24 Jun 2025
*/
export const getLastKey = (path, val) => {
  return new Promise((resolve) => {
    if (path) {
      if (val === "") {
        let lastKey = 1;
        getData(path).then((res) => {
          if (res) {
            lastKey += Number(res);
          }
          resolve(lastKey);
        });
      } else {
        resolve(val);
      }
    } else {
      resolve(
        common.setResponse("Fail", "Invalid Params !!", {
          service: "getLastKey",
          params: { path },
        })
      );
    }
  });
};
/*
    Function name : setLastkey
    Description   : This function is working for update value to database at the given path.
    Written by : Anil
    Written date  : 24 Jun 2025
*/
export const setLastkey = (path, val) => {
  return new Promise((resolve) => {
    if (path && val) {
      saveData(path, val).then((res) => resolve(res));
    } else {
      resolve(
        common.setResponse("Fail", "Invalid Params !!", {
          service: "setLastkey",
          params: { path, val },
        })
      );
    }
  });
};
