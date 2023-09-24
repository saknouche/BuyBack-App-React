import moment from "moment";

class Utils {

    static sleep = (ms: number | undefined) => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    static getDate = () => {
        return moment().format("YYYY-MM-DD");
    }

}

export default Utils;