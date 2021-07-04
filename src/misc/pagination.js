import React, { useEffect } from 'react'
import '../assets/materialize.css'
import '../assets/icons.css'

const Pagination = props => {

    const generateNumbers = ({ page, pagesQtty }) => {
        console.log(page, pagesQtty)
        let arrayPages = []

        if (pagesQtty <= 3) {
            for (let index = 1; index < pagesQtty; index++) {
                arrayPages.push(index)

            }
        } else {
            if (page == 1) {
                arrayPages.push(1)
                arrayPages.push(2)
                arrayPages.push(3)
            } else if (page == pagesQtty) {
                arrayPages.push(pagesQtty - 2)
                arrayPages.push(pagesQtty - 1)
                arrayPages.push(pagesQtty)
            } else {
                arrayPages.push(page - 1)
                arrayPages.push(page)
                arrayPages.push(page + 1)
            }
        }

        return arrayPages

    }

    const generateLinks = ({ page, pagesQtty, changePage }) => {
        let arrayLinks = []

        //generate left arrow
        if (page == 1) {
            arrayLinks.push(<li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>)
        } else {
            arrayLinks.push(<li onClick={e => {
                e.preventDefault()
                changePage(page -1)
            }} className="waves-effect"><a href="#!"><i className="material-icons">chevron_left</i></a></li>)
        }

        //generate links
        let nums = generateNumbers({ page, pagesQtty })
        nums.map(n => {
            if (n == page) {
                arrayLinks.push(<li className="active black"><a href="#!">{n}</a></li>)
            } else {
                arrayLinks.push(<li onClick={e => {
                    e.preventDefault()
                    changePage(n)
                }} className="waves-effect"><a href="#!">{n}</a></li>)
            }
        })

        //generate right arrow
        if (page == pagesQtty) {
            arrayLinks.push(<li className="disabled"><a href="#!"><i className="material-icons">chevron_right</i></a></li>)
        } else {
            arrayLinks.push(<li onClick={e => {
                e.preventDefault()
                changePage(page + 1)
            }}  className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>)
        }

        return arrayLinks

    }

    return (<div>
        <ul className="pagination" style={{
            float: 'right'
        }}>
           {generateLinks({...props})}
        </ul>
    </div>)


}

export default Pagination