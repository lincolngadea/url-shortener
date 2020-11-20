import {Request, Response} from "express"
import  shortid from 'shortid'
import {config} from '../config/Constant'

export class URLController{
    public async shorten(request:Request, response:Response): Promise<void>{

        const { originURL } = request.body
        const hash = shortid.generate()
        const shortURL = `${config.API_URL}/${hash}`

        response.json({originURL, hash, shortURL})

    }
}