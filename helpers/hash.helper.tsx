import crypto from 'crypto';


export const hashId = (id: string): string => {
    // return crypto.createHash('sha256').update(id).digest('hex');
    return id;
};
