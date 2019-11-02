const Video = require('../models/Video');

exports.getAllVideo = (req, res, next) => {
    console.log('indie');
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

exports.addVideo = (req, res, next) => {
    const video = new Video({
        name: req.body.name,
        description: req.body.description,
        isBookmarked: req.body.isBookmarked,
        publishAt: req.body.publishAt,
        statistic: {
            commentCount: req.body.statistic.commentCount,
            dislikeCount: req.body.statistic.dislikeCount,
            favoriteCount: req.body.statistic.favoriteCount,
            likeCount: req.body.statistic.likeCount,
            viewCount: req.body.statistic.viewCount,
        },
        tags: req.body.tags,
        title: req.body.tags,
        image: {
            height: req.body.image.height,
            url: req.body.image.url,
            width: req.body.image.width
        }
    });
    video.save().then(
        (video) => {
            console.log("video = ",video);
            res.status(201).json(video);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
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





