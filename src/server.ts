import express from 'express'

function activateServer() {
    const port = process.env.PORT || 3000
    const hostname = process.env.HOSTNAME || 'http://localhost'

    const app = express()
    app.use(express.json())

    app.listen(port, () => {
        console.log(`Servidor ativo na porta ${hostname}:${port} ...`)
    })
}

activateServer()