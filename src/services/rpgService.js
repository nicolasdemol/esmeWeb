import { getCollection, mapData } from './utils';
import { firestore } from 'firebase';

export default class rpgService {
  constructor(db) {
    this.db = db;
  }

  getActions = () => getCollection(this.db, 'actions');
  getCategories = () => getCollection(this.db, 'categories');
  getPointsRegistries = () => getCollection(this.db, 'points_registry');

  async getContributions(uuid) {
    const qs = await this.db
      .collection('points_registry')
      .doc(uuid)
      .collection('contributions')
      .get();
    return mapData(qs);
  }

  async postContributions({ uuid, actionId, justification }) {
    const res = this.db
      .collection('points_registry')
      .doc(uuid)
      .collection('contributions')
      .add({
        action: this.db.doc(`actions/${actionId}`),
        date: firestore.FieldValue.serverTimestamp(),
        justification: justification
      });
    console.log(res);
    return res;
  }
}
