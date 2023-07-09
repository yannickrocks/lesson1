migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ug30btuhbp7qpb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wfblcjil",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ug30btuhbp7qpb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wfblcjil",
    "name": "Title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
