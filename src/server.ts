import express from 'express'

import pokemonRoutes from './routes/pokemonRoutes'

function activateServer() {
    const port = process.env.PORT || 3000
    const hostname = process.env.HOSTNAME || 'http://localhost'

    const app = express()
    app.use(express.json())
    app.use('/api', pokemonRoutes)

    app.listen(port, () => {
        console.log(`\nServidor ativo na porta ${hostname}:${port}\n`)
    })
}

activateServer()