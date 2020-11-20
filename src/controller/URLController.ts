import {Request, Response} from "express"
import  shortid from 'shortid'
import { URLModel } from "../database/model/URL"
import {config} from '../config/Constant'

export class URLController{
    public async shorten(request:Request, response:Response): Promise<void>{

        const { originURL } = request.body
        const url = await URLModel.findOne({ originURL })
        if (url){
            response.json(url)
            return
        }
        const hash = shortid.generate()
        const shortURL = `${config.API_URL}/${hash}`
        const newURL = await URLModel.create({ hash, shortURL, originURL})

        response.json(newURL)

    }

    public async redirect(request:Request, response:Response):Promise<void>{
        
        const { hash } = request.params

        const url = {
            originURL: "https://lincolngadea.com.br",
            hash: 'Yn52qxaf9',
            shortURL: "http://localhost:5000/Yn52qxaf9"
        }

        response.redirect(url.originURL)
    }
}