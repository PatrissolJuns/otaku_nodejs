const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    duration: String,
    description: String,
    isBookmarked: Boolean,
    publishAt: String,
    statistic: {
        commentCount: Number,
        dislikeCount: Number,
        favoriteCount: Number,
        likeCount: Number,
        viewCount: Number,
    },
    tags: [String],
    title: String,
    image: {
        height: Number,
        url: String,
        width: Number
    }
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
