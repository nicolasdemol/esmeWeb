import { getCollection, mapData, mapId } from "./utils";

export default class rpgService {
    constructor(db){
        this.db = db
    }

    getActions = () => getCollection(this.db,"actions")
    getCategories = () => getCollection(this.db,"categories")
    
    async getPointsRegistries(){
        const qs = await this.db.collection("points_registry").get()
        return mapId(qs);
    }

    async getContributions(uuid){
        const qs = await this.db.collection("points_registry").doc(uuid).collection("contributions").get()
        return mapData(qs);
    }
}