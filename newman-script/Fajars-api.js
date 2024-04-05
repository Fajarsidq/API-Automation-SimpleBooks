const newman = require("newman")

newman.run({
    collection: "json-collection/fajar.postman_collection.json",
    environment: "json-env/fajar_env.json",
    reporters: ["cli", "htmlextra"]
})
