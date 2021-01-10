var mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

var StandardSchema = new mongoose.Schema({
    uuid: { type: String, default: uuidv4 },
    urlName: String,
    tags: [{ type: String }],
    info: {
        authors: [{ type: String }],
        name: String,
        shortName: String,
        description: String,
        category: {
            name: String,
            subcategory: String
        }
    },
    license: {
        name: String,
        url: String
    },
    versions: [{
        uuid: { type: String, default: uuidv4 },
        version: { type: String, default: "v0.0.1" },
        isDraft: { type: Boolean, default: true },
        isPublished: { type: Boolean, default: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        docJson: Object,
        protoUrl: String,
        sampleData: {
            json: Object
        }
    }]
})

module.exports = mongoose.model('Standard', StandardSchema);
