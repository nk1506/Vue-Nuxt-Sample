'use strict'

import { Router } from 'express'

const router = Router()

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
        res.body = assets
        next()
    })

    // Get the user by id.
    router.get('/assets/:id', (req, res, next) => {
        const id = parseInt(req.params.id)
        if (id >= 0 && id <= assets.length) {
            res.body = assets.find( el => el.id === req.params.id)
            next()
        } else {
            var err = new Error('Assets Not Found' + req.params.id)
            err.status = 400
            next(err)
        }
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
