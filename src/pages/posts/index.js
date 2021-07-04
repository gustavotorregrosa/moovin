import React, { useContext, useEffect, useState } from 'react'
import Table from '../../misc/table'
import PostContext from '../../context/PostContext'
import Pagination from '../../misc/pagination'
import logo from '../../assets/logo.svg'

const PostsPage = props => {

  const postService = useContext(PostContext)

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(1)
  const [pagesQtty, setPagesQtty] = useState(1)
  const [limit, setLimit] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    loadData()
  }, [])

  const loadData = async (newPage) => {
    let response = await postService.getPosts({page: newPage})
    setData(response.data)
    setPagesQtty(response.meta.pagination.pages)
    setPage(response.meta.pagination.page)
    setTotal(response.meta.pagination.total)
  }

  const fields = [
    {
      name: 'title',
      label: 'Título'
    },
    {
      name: 'body',
      label: 'Conteúdo'
    }
  ]

  const changePage = async newPage => {
    await loadData(newPage)
    setPage(newPage)
    
  }


  return (<div>
    <div className="header">
      <img src={logo} alt="Logo" style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        height: '21px',
      }} />
    </div>
    <div className="content-frame">
      <h6 className="title-1">Últimas postagens</h6>
      <Table fields={fields} data={data} />
      <p>Exibindo {data.length} postagens de {total} </p>
      <Pagination {...{page,pagesQtty, changePage }} />

    </div>

  </div>)

}

export default PostsPage