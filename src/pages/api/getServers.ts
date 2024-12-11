import { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosResponse } from 'axios';
import { ServerInterface } from '../../../interfaces/servers.interface';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { data: response }: AxiosResponse<ServerInterface> = await axios.get(process.env.API_DOMAIN +
            '/zones',
        );

        res.status(200).json(response);
    } catch (err: any) {
        console.error(err);

        if (err.response && err.response.data.error_message) {
            res.status(err.response.status).json({ error_message: err.response.data.error_message });
        } else {
            res.status(500).json({ error_message: 'Error fetching server data' });
        }
    }
}
