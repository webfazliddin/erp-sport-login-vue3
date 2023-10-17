import type { IGetOblast } from "@/types";
import ApiService from "./api.services";
    const OblastServices = {
        GetList() {
            return ApiService.get(`/Helper/GetOblastList`)
        }
    }

export default OblastServices