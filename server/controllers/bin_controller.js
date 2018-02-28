module.exports = {
    getOne: (req, res, next)=>{
        const db = req.app.get('db');
        const {params} = req

        db.read_bin(params.id)
        .then(item=>res.status(200).send(item))
        .catch(()=>res.status(500).send())
    },
    getAll: (req, res, next)=>{
        const db = req.app.get('db');
        const {params} = req;
        console.log(params);

        db.read_bins(params.id)
        .then(bins=>res.status(200).send(bins))
        .catch(()=>res.status(500).send())
    },
    delete: (req, res, next)=>{
        const db = req.app.get('db');
        const {params} = req;
        console.log("deleting")

        db.delete_bin(params.id)
        .then(item=>res.status(200).send(item))
        .catch(()=>res.status(500).send())
    },
    create: (req, res, next)=>{
        const db = req.app.get('db');
        const{params, query} = req;

        db.create_bin(req.shelf, req.id, query.desc, query.price)
        .then(item=>res.status(200).send(item))
        .catch(()=>res.status(500).send())
    },
    update: (req, res, next)=>{
        const db = req.app.get('db');
        const{params, query} = req;
        console.log(query);
        console.log(params)
        db.update_bin(params.id, query.desc, query.price)
        .then(item=>res.status(200).send(item))
        .catch(()=>res.status(500).send())

    },

}