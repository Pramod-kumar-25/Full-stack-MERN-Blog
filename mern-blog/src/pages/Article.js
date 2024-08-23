import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import articleContent from './article-content'

//pages
import NotFound from './NotFound'

//components
import Articles from '../components/Articles'
import CommentsList from '../components/CommentsList'
import ADDCommentForm from '../components/ADDCommentForm'

const Article = () => {
  const { name } = useParams()
  const article = articleContent.find((article) => article.name === name);
  const [articleInfo, setArticleInfo] = useState({comments: []})

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`)
      const body = await result.json()
      console.log(body)
      setArticleInfo(body)
    }
    fetchData()
  }, [name])

  if(!article) return <NotFound />
  const otherArticles = articleContent.filter(article => article.name !== name)
  return (
    <>
        <h1 className="sm:text-4xl text-2xl font-bold my-12 pt-10 text-gray-900">
            {article.title}
        </h1>
        {article.content.map((paragraph, index) => (
          <p className="mx-auto leading-relaxed text-base mb-4" key={paragraph.slice(0, 20) + index}>
            {paragraph}
          </p>
))}
        <CommentsList comments={articleInfo.comments}/>
        <ADDCommentForm articleName={name} setArticleInfo={setArticleInfo} />
        <h1 className='sm:text-2xl text-xl font-bold my-4 pt-12 text-gray-900'>Other Articles
        </h1>
        <div className='flex flex-wrap -m-4'>
          <Articles articles={otherArticles}/>
        </div>
    </>
  )
}

export default Article