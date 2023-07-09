migrate((db) => {
  const collection = new Collection({
    "id": "4ug30btuhbp7qpb",
    "created": "2023-07-09 10:01:57.249Z",
    "updated": "2023-07-09 10:01:57.249Z",
    "name": "Lesson1",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "tqzycwxk",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4ug30btuhbp7qpb");

  return dao.deleteCollection(collection);
})
