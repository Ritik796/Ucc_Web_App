import axios from "axios";
import * as common from "../../common/commonFunctions";

const success = 'success';
const fail = 'fail';

export const getCityDetails = () => {
    return new Promise(async (resolve) => {
        let path = common.getStoragePath() + `CityDetails%2FCityDetails.json?alt=media`;
        try {
            const response = await axios.get(path);
            let cityData = [];
            if (response.data) {
                cityData = [...response.data];
            }
            resolve(common.setResponse(success, 'City details fetched successfully.', cityData));
        } catch (error) {
            resolve(common.setResponse(fail, 'Error occur while fetching city details!', { error }));
        }
    });
}