migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ug30btuhbp7qpb")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ug30btuhbp7qpb")

  collection.name = "Lesson1"

  return dao.saveCollection(collection)
})
