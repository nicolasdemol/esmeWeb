import react from "react"



export default class rpgService {
    constructor(uuid){
        this.uuid = uuid
        
    }

    static async getActionList(){
        const snapshot = await this.db.collection("actions").get();
        return snapshot;
    }

    async getActions(){
        const snapshot = await this.db.collection("points").doc(this.uuid).collection("contributions").get()
        return snapshot;
    }
}