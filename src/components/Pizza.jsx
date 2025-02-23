import { useEffect, useState } from 'react';

const Pizza = ({ setPizza }) => {  
    const ENV_URL = 'http://localhost:5000/api/pizzas/p001'
    
    const fetchPizzasFromApi = async () => {
        try {
            const response = await fetch(ENV_URL)
            const data = await response.json()
            setPizza(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchPizzasFromApi()
    }, [])

    return null
}

export default Pizza;
