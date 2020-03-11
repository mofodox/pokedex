import Link from 'next/link'

const PokeCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <Link href="/p/:id" as={`/p/${props.id}`}>
                        <a><h3>{props.name}</h3></a>
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .card {
                    margin-bottom: 32px;
                }
            `}</style>
        </div>
    )
}

export default PokeCard