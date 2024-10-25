import express from 'express'

const router = express.Router()

async function pokemons(req, res) {
    
}

async function pokemonsByName(req, res) {
    
}

router.get("/pokemons", pokemons)
router.get("/pokemons/:name", pokemonsByName)