'use strict'

import { Router } from 'express'
import { Https } from 'https'
import { Http } from 'http'

const router = Router()

const request = require('request');

// Mock Assets
const assets = [
    {
        "id":"1",
        "title": "Title 1",
        "thumbnail": "http://jdvault.2adpro.com/asset/get-asset-file-contents?assetId=65884",
        "previewText": "PreviewText 1"

    },
    {
        "id":"2",
        "title": "Title 2",
        "thumbnail": "http://jdvault.2adpro.com/asset/get-asset-file-contents?assetId=65885",
        "previewText": "PreviewText 2"

    }
]

export default () => {

    // Home page.
    router.get('/', (req, res, next) => {
        var output = {
            message: 'Hello World!'
        }
        res.body = output
        next()
    })

    // Get all assets.
    router.get('/assets', (req, res, next) => {
        request.get('http://localhost:8081/generic/getall', (error, response, body) => {
            if(error) {
                var err = new Error('Assets Not Found' + req.params.id)
                err.status = 400
                next(err)
            }
            res.send(JSON.parse(body).response.hits.hits)
            //next()
        });
    })

    // Get the user by id.
    router.get('/assets/:id', (req, res, next) => {
        //const id = parseInt(req.params.id)
        /*if (id >= 0 && id <= assets.length) {
            res.body = assets.find( el => el.id === req.params.id)
            next()
        } else {
            var err = new Error('Assets Not Found' + req.params.id)
            err.status = 400
            next(err)
        }*/
        var myJSONObject = {
            "searchString" : req.params.id
        }
        request({
            url: "http://localhost:8081/generic/search",
            method: "POST",
            json: true,   // <--Very important!!!
            body: myJSONObject
        }, function (error, response, body){
            //console.log(response);
            res.send(response.body.response.hits.hits)
        });
    })

    // Handle routes not found.
    // https://stackoverflow.com/questions/38681318/express-4-middleware-when-route-is-not-found-finalhandler-not-called-how-to-c
    router.use(function(req, res, next) {
        if (!req.route) {
            var err = new Error('Route Not Found')
            err.status = 404
            return next(err)
        }
        next()
    })

    return router
}

// export default router
