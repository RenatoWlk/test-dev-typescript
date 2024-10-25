import axios from 'axios'

interface Pokemon {
    name: string
    height: number
    weight: number
    bmi: number
    category: string
}

function calculateBmi(weight: number, height: number): number {
    return weight / (height * height);
}

function convertHectogramToKilogram(weight: number): number {
    return weight / 10
}

function convertDecimeterToMeter(height: number): number {
    return height / 10
}

function categorizeBmi(bmi: number): string {
    if (bmi < 10) return "Leve"
    if (bmi >= 10 && bmi <= 20) return "Médio"
    else return "Pesado"
}

function processPokemon(name: string, heightDm: number, weightHg: number): Pokemon {
    const height = convertDecimeterToMeter(heightDm)
    const weight = convertHectogramToKilogram(weightHg)
    const bmi = calculateBmi(weight, height)
    const category = categorizeBmi(bmi)

    return {
        name: name,
        height: height,
        weight: weight,
        bmi: bmi,
        category: category,
    }
}

export async function getPokemons(): Promise<Pokemon[]> {
    const url = `https://pokeapi.co/api/v2/pokemon`

    try {
        const response = await axios.get(url)
    } catch (error) {
        console.log(`Erro na requisição dos Pokémons: ${error}`)
        throw new Error("Erro na requisição dos Pokémons")
    }
}

export async function getPokemonsByName(name: string): Promise<Pokemon> {
    const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`

    try {
        const response = await axios.get(url)
        return processPokemon(response.data.name, response.data.height, response.data.weight)
    } catch (error) {
        console.log(`Erro na requisição do Pokémon ${name}: ${error}`)
        throw new Error(`Erro na requisição do Pokémon ${name}`)
    }
}