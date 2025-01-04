const PokemonDetails = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/${name}`)
            .then(response => setPokemon(response.data))
            .catch(error => console.error(error));
    }, [name]);

    if (!pokemon) return <p>Loading...</p>;

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3>Abilities:</h3>
            <ul>{pokemon.abilities.map(a => <li key={a.ability.name}>{a.ability.name}</li>)}</ul>
            <h3>Types:</h3>
            <ul>{pokemon.types.map(t => <li key={t.type.name}>{t.type.name}</li>)}</ul>
            <h3>Base Stats:</h3>
            <ul>{pokemon.stats.map(s => <li key={s.stat.name}>{s.stat.name}: {s.base_stat}</li>)}</ul>
        </div>
    );
};