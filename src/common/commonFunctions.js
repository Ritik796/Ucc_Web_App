import { toast } from "react-toastify";
import axios from "axios";
export function setResponse(status, message, data) {
  const obj = {
    status: status,
    message: message,
    data: data
  }
  return obj;
}
export const getStoragePath = () => {
  return "https://firebasestorage.googleapis.com/v0/b/dtdnavigator.appspot.com/o/";
}
export const getStorageCity =()=>{
  let city = localStorage.getItem("city");
  return city;
}
export const showAlert = (type, message) => {
  return toast[type](message,{
    position:"top-right",
    autoClose:2000,
    
  });
}

export const getWardLines = (zone, date) => {
  return new Promise((resolve) => {
    if (zone && date) {
      const url = `https://firebasestorage.googleapis.com/v0/b/dtdnavigator.appspot.com/o/${getStorageCity()}%2FWardLinesHouseJson%2F${zone}%2FmapUpdateHistoryJson.json?alt=media`;

      axios.get(url).then((dataDate) => {
        if (dataDate) {
          let dat1 = new Date(date);
          let list = JSON.parse(JSON.stringify(dataDate.data));

          let jsonDate = "";
          if (list.length === 1) {
            jsonDate = list[0].toString().trim();
          }
          else {
            for (let i = list.length - 1; i >= 0; i--) {
              let dat2 = new Date(list[i]);
              if (dat1 >= dat2) {
                jsonDate = list[i].toString().trim();
                i = -1;
              }
            }
          }
          const pathUrl = `https://firebasestorage.googleapis.com/v0/b/dtdnavigator.appspot.com/o/${getStorageCity()}%2FWardLinesHouseJson%2F${zone}%2F${jsonDate}.json?alt=media`;

          axios.get(pathUrl).then((data) => {
            if (data != null) {
              resolve(JSON.stringify(data.data));
            }
          }).catch((err) => {
            resolve(setResponse('fail', 'Data not found', { err }))
          })
        }
      }).catch(error => {
        resolve(setResponse('fail', 'Data not found', { error }))
      })
    }
    else {
      resolve(setResponse('Fail', 'Invalid Params !!', { service: 'getWardLines', params: { zone, date } }))
    }
  })
}

