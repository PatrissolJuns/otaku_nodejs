const Video = require('../models/Video');

exports.getAllVideo = (req, res, next) => {
    Video.find().then(
        (videos) => {
            console.log('videos = ',videos);
            res.status(200).json(videos);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.getOneVideo = (req, res, next) => {
    Video.findOne({
        _id: req.params.id
    }).then(
        (video) => {
            res.status(200).json(video);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
}

exports.getFromDBOneVideo = (_id) => {
    return Video.findOne({
        _id: "" + _id
    }).then( (video) => {
        return video;
    })
    .catch(
        (error) => {return null;}
    );
}

exports.getFromDBVideos = () => {
    return Video.find()
        .then( (videos) => {return videos;})
        .catch( (error) => {return null;});
}

/**
 * This function adds a new video to the database
 * It require that the video params should be a JSON stringify
 *
 * @param req
 * @param res
 * @param next
 */
exports.addVideo = (req, res, next) => {
    // Get the video form the params
    let videoFormReq = JSON.parse(req.body.video);

    // Create a new Video item
    const video = new Video({
        duration: videoFormReq.duration,
        description: videoFormReq.description,
        image: {
            height: videoFormReq.image.height,
            url: videoFormReq.image.url,
            width: videoFormReq.image.width
        },
        isBookmarked: videoFormReq.isBookmarked,
        publishedAt: videoFormReq.publishedAt,
        statistics: {
            commentCount: videoFormReq.statistics.commentCount,
            dislikeCount: videoFormReq.statistics.dislikeCount,
            favoriteCount: videoFormReq.statistics.favoriteCount,
            likeCount: videoFormReq.statistics.likeCount,
            viewCount: videoFormReq.statistics.viewCount,
        },
        tags: videoFormReq.tags,
        title: videoFormReq.title,
        youtubeId: videoFormReq.youtubeId
    });

    // Save the video to the database
    video.save().then(
        (video) => {
            res.status(201).json(video);
        }
    ).catch(
        (error) => {
            console.log('error = ', error);
            res.status(400).json({
                error: error
            });
        }
    );
};

/**
 * Toggle the isBookmarked attribute
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
exports.toggleIsBookmarked = async (req, res, next) => {
    let video = await this.getFromDBOneVideo(req.body.id);

    Video.updateOne({_id: req.body.id}, {isBookmarked: !video.isBookmarked}).then(
        async () => {
            res.status(200).json({
                message: 'video updated successfully!',
                isBookmarked: (await this.getFromDBOneVideo(req.body.id)).isBookmarked,
            });
        }
    )
}

/*exports.updateVideo = async (req, res, next) => {
    let response = await this.updateFromDBOneVideo(req.params.id, req.body.name,
        req.body.audioList, req.body.isAdd);
    let video = await this.getFromDBOneVideo(req.params.id);
    console.log("video = ",video);
    // let response = true;
    console.log("response = ",response);
    if(response) res.status(200).json(video);
    else {
        res.status(400).json({
            error: 'An error occur while trying to update the video'
        });
    }
}*/


exports.deleteVideo = async (req, res, next) => {
    let video = await this.getFromDBOneVideo(req.params.id);
    Video.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: 'Video deleted successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};


/*let VideoJuns = {};
const t = async () => {
    VideoJuns = await this.getFromDBOneVideo("5d951e1bf5d45107c3be9e8d");
    console.log('VideoJuns = ',VideoJuns);

    let response = null;
    const r = async () =>{
        console.log('debut ');
        response = await this.updateFromDBOneVideo(
            VideoJuns._id, VideoJuns.name, ["5d959e072351295af4757fb7"], false
        );
        console.log('response = ',response);
    }
    r();
}
t();*/


/*let response = this.updateFromDBOneVideo(
    VideoJuns._id, VideoJuns.name, [audioId], false
);
console.log("response = ",response);*/

console.log("************************************* start action *************************************  ");

const a = async () => {
    /*let res = await this.updateFromDBOneVideo("5d9ca5a25837a208e50c63f6",
        "dqsdqs", ["5da238792f0e9f1ae7eb4f6e"], false);*/


}

// a();

console.log("************************************* end action *************************************  ");





