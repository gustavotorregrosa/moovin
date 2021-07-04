import React from 'react'
import '../assets/materialize.css'


const Table = props => {

    const {fields, data} = props
    const generateTableHeader = () => {
        let list = fields.map(field => (<th>{field.label}</th>))
        return (
            <thead className="table-header">
                <tr>
                    {list}
                </tr>
            </thead>
        )
    }

    const generateItems = () => {
        let items = data.map(row => {
            let item = fields.map(field => {
                return (<td>{row[field.name]}</td>)

            })
            return (<tr>{item}</tr>)
        })
        return (<tbody>{items}</tbody>)
    }

    return(<div>
        <table className="highlight responsive-table">
            {generateTableHeader()}
            {generateItems()}
           
        </table>
    </div>)


}

export default Table