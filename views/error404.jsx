const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="http://placekitten.com/300/300" alt="cat" />
                </div>
            </main>
        </Def>
    )
}

module.exports = error404