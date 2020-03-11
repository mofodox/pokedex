import Link from 'next/link'
import useSWR from 'swr'

import fetcher from '../lib/fetcher'

const PokeCard = ({name, id}) => {
    const { data } = useSWR(`https://pokeapi.co/api/v2/pokemon/${name}`, fetcher)

    return (
        <Link href="/p/:id" as={`/p/${id}`}>
            <a>
                <div className="card has-text-centered">
                    <div className="card-content">
                        <div className="content">
                            {data ? (
                                <React.Fragment>
                                    <img src={data.sprites.front_default} alt={`${name}`} />
                                    <h4 className="is-capitalized">{name}</h4>
                                </React.Fragment>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                    </div>

                    <style jsx>{`
                        .card {
                            margin-bottom: 32px;
                        }
                    `}</style>
                </div>
            </a>
        </Link>
    )
}

export default PokeCard