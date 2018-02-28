module.exports = {
    read: (req, res, next)=>{
        const db = req.app.get('db');
        console.log('2')
        db.read_shelf()
        .then(shelves=>{
            res.status(200).send(shelves)
        }).catch(()=>{
            res.status(500).send()
        })
    },

   
}