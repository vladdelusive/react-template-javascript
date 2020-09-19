import { endpoints } from "./endpoints";
import { http } from "services/http";

export const API = {
    FETCH_SMTH: (smth) => {
        return http.get(endpoints.FETCH_SMTH(smth))
    },
}
