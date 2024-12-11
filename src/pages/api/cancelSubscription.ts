import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { hashId } from '../../../helpers/hash.helper';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { user_id } = req.query;

        if (!user_id) {
            return res.status(400).json({ error_message: 'Missing user ID' });
        }

        const hashedId = hashId(user_id as string);

        await axios.delete(`${process.env.API_DOMAIN}/subscription/cancel/${hashedId}`);

        res.status(200).json({ success: true });
    } catch (err: any) {
        console.error(err);

        if (err.response && err.response.data.error_message) {
            res.status(err.response.status).json({ error_message: err.response.data.error_message });
        } else {
            res.status(500).json({ error_message: 'Error canceling subscription' });
        }
    }
}
