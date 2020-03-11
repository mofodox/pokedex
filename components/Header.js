import Link from 'next/link'

const Header = () => {
    return (
        <nav className="navbar level is-fixed-top is-white has-shadow">
            <div className="navbar-brand level-item has-text-centered">
                <Link href="/">
                    <a><img src="/pokemon-logo.png" alt="pokemon logo" width="160" /></a>
                </Link>
            </div>
        </nav>
    )
}

export default Header
