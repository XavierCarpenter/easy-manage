module.exports = {
    //get all Projects
    getProjects: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const { params } = req;
        
        dbInstance
            .get_projects([params.id])
            .then(projects => res.status(200).json(projects))
            .catch(() => res.status(500).json());
    },
    // //get Specific Project
    // getProject: (req, res, next) => {
    //     const dbInstance = req.app.get("db");
    //     const { params } = req;

    //     dbInstance
    //         .get_business([params.id])
    //         .then(project => res.status(200).json(project))
    //         .catch(() => res.status(500).json());
    // },
    // //get the hours of operation
    // getHours: (req, res, next) => {
    //     const dbInstance = req.app.get("db");
    //     const { params } = req;

    //     dbInstance
    //         .get_hours([params.id])
    //         .then(hours => res.status(200).json(hours))
    //         .catch(() => res.status(500).json());
    // },
    // //get business profile pic
    // profilePic: (req, res, next) => {
    //     const dbInstance = req.app.get("db");
    //     const { params } = req;

    //     dbInstance
    //         .get_buspic([params.id])
    //         .then(pic => res.status(200).json(pic))
    //         .catch(() => res.status(500).json());
    // },
    // //update info
    // updateBus: (req, res, next) => {
    //     const dbInstance = req.app.get("db");
    //     const { params, body } = req;
    //     // console.log(params, body);

    //     dbInstance
    //         .update_bus([
    //             params.id,
    //             body.jobtype,
    //             body.email,
    //             body.phone,
    //             body.address,
    //             body.bio
    //         ])
    //         .then(() => res.status(200).json())
    //         .catch(() => res.status(500).json());
    // },
    // //create new business
    // createBus: (req, res, next) => {
    //     // console.log("hit controller");
    //     const dbInstance = req.app.get("db");
    //     const { busid, bustype, email, phone, bio, address } = req.body;
    //     // console.log(req.body);

    //     dbInstance
    //         .create_bus([busid, bustype, email, phone, bio, address])
    //         .then(() => res.status(200).json())
    //         .catch(() => res.status(500).json());
    // }
};
