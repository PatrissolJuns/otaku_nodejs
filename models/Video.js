const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    duration: String,
    description: String,
    image: {
        height: Number,
        url: String,
        width: Number
    },
    isBookmarked: Boolean,
    publishedAt: String,
    statistics: {
        commentCount: Number,
        dislikeCount: Number,
        favoriteCount: Number,
        likeCount: Number,
        viewCount: Number,
    },
    tags: [{type:String}],
    title: String
    /*thumbnails: {
        high: {
            height: Number,
            url: String,
            width: Number,
        },
        medium: {
            height: Number,
            url: String,
            width: Number,
        },
        standard: {
            height: Number,
            url: String,
            width: Number,
        },
    }*/
}, { versionKey: false });

mongoose.model('Video', VideoSchema);

module.exports = mongoose.model('Video');


// Virtual property

/*
personSchema.virtual('fullName').get(function () {
    return this.name.first + ' ' + this.name.last;
});*/
