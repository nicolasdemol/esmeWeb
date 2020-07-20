export default class rpgService {
    constructor(db){
        this.db = db
    }

    getActionList = () => this.db.collection("actions").get();

    async getActions(uuid){
        const snapshot = await this.db.collection("points").doc(this.uuid).collection("contributions").get()
        return snapshot;
    }
}