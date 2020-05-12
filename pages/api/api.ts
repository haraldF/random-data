import { NowRequest, NowResponse } from '@now/node'
import https from 'https'

function* randomBytes(amount: number) {
    for (let i = 0; i < amount; ++i) {
        yield Math.floor(Math.random() * 256);
    }
    return amount;
}

export default (req: NowRequest, res: NowResponse) => {
    const size = req.query.size;
    if (typeof size !== "string" || parseInt(size) === NaN || parseInt(size) <= 0) {
        return res.status(500).json("Invalid size");
    }

    const result = Buffer.from(new Uint8Array(randomBytes(parseInt(size))));
    res.send(result);
}