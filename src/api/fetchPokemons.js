import axios from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2'


export const fetchPokemons = async() => {
    try {
        const { data } = await axios.get(BASE_URL + '/pokemon?limit=10&offset=0');
        return data;
    }catch(e) {
        console.log(e);
    }
};  



export const fetchPokemon =  (url) => {
    
};