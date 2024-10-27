import express from 'express'

import { getPokemons, getPokemonsByName } from '../api/pokemonService'

const router = express.Router()

async function pokemons(req: any, res: any) {
    try {
        const pokemons = await getPokemons()
        res.json(pokemons)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message })
        } else {
            res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}

async function pokemonsByName(req: any, res: any) {
    const name = req.params.name
    try {
        const pokemon = await getPokemonsByName(name)
        res.json(pokemon)
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message })
        } else {
            res.status(404).json({ message: 'Not Found' })
        }
    }
}

router.get("/pokemons", pokemons)
router.get("/pokemons/:name", pokemonsByName)
export default router