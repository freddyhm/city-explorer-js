function activityController(Activity) {
    async function get(req, res) {
        try {

            const activities = await Activity.find();

            if (!activities){
                return res.status(404).send();
            }

            res.status(200).send(activities);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    return { get };
}

module.exports = activityController;