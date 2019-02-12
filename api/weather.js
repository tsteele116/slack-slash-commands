import { Router } from 'express';

const router = Router();

router.get('/', function(req, res) {
    const data = getPayLoad(req);
    const response = {
        "text": "(:point_up: ՞ਊ ՞):point_up:",
        "attachments": [{
            "text": `Dummy GET response. Only you can see this ${data.user_name}`
        }]
    };
    res.send(response);
});

router.post('/', function(req, res) {
    const data = getPayLoad(req);
    const response = {
        "response_type": "in_channel",
        "text": "(:point_up: ՞ਊ ՞):point_up:",
    };
    res.send(response);
});

/*
    The following data is available (see https://api.slack.com/slash-commands)
    token, team_id, team_domain, channel_id, channel_name, user_id, user_name,
    command, text, response_url
*/
const getPayLoad = req => {
    return req.method === 'GET' ? req.query : req.body;
}

module.exports = router;
