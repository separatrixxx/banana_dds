import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { deviceHash } = req.query;

        if (!deviceHash) {
            return res.status(400).json({ error_message: 'Missing device hash' });
        }

        await axios.delete(`${process.env.API_DOMAIN}/device/remove/${deviceHash}`);

        res.status(200).json({ success: true });
    } catch (err: any) {
        console.error(err);

        if (err.response && err.response.data.error_message) {
            res.status(err.response.status).json({ error_message: err.response.data.error_message });
        } else {
            res.status(500).json({ error_message: 'Error removing device' });
        }
    }
}
