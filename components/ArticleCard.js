import Link from 'next/link';

function ArticleCard({ article, index }) {
    return (
        <div className="border my-4 w-80 shadow hover:shadow-xl bg-slate-300">
            <li key={index}>
                <div className="p-2 bg-slate-300">
                    <h2 className="text-lg font-bold">
                        {article.title}
                    </h2>
                </div> 
                <div className="p-2 bg-slate-50">
                {(article.description).slice(0, 300)}...
                </div>
                
                <div className="p-2 flex justify-between items-baseline">
                    <Link  className="text-md font-bold bg-slate-300" href={article.url}>Read More</Link>
                </div>
                
             </li>
        </div>
    )
}

export default ArticleCard;