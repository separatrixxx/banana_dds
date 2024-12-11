import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { hashId } from '../../../helpers/hash.helper';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { user_id, hardware_info } = req.body;

        if (!user_id || !hardware_info) {
            return res.status(400).json({ error_message: 'Missing required parameters' });
        }

        const hashedId = hashId(user_id);

        await axios.post(
            `${process.env.API_DOMAIN}/user/${hashedId}/device`,
            { hardware_info }
        );

        res.status(200).json({ success: true });
    } catch (err: any) {
        console.error(err);

        if (err.response && err.response.data.error_message) {
            res.status(err.response.status).json({ error_message: err.response.data.error_message });
        } else {
            res.status(500).json({ error_message: 'Error adding device' });
        }
    }
}
