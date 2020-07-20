export async function getCollection(db,collection){
  const qs = await db.collection(collection).get();
  return mapData(qs)
}

export function mapData(qs){
  return qs.docs.map(doc => doc.data())
}

export function mapId(qs){
  return qs.docs.map(doc => doc.id)
}