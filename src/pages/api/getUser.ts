import { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosResponse } from 'axios';
import { hashId } from '../../../helpers/hash.helper';
import { UserInterface } from '../../../interfaces/user.interface';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { user_id } = req.query;

        const hashedId = hashId(user_id as string);

        const { data: response }: AxiosResponse<UserInterface> = await axios.get(process.env.API_DOMAIN +
            '/user/' + hashedId,
        );
        
        res.status(200).json(response);
    } catch (err: any) {
        if (err.response && err.response.data.error_message === 'User not found') {
            res.status(404).json({ error_message: 'User not found' });
        } else {
            res.status(500).json({ error_message: 'Error fetching user data' });
        }
    }
}
