import React from 'react';

export default function CoursesDetail({title,content,windowStyle,contentStyle}) {
  return(
      <article className={`border-2 border-third rounded-lg ${windowStyle}`}>
          <div className='bg-third px-3 py-2 text-secondary font-bold'>
              <h3>{title}</h3>
          </div>
          <div className={`px-3 py-2 ${contentStyle}`}>
            <p>{content}</p>
          </div>
      </article>
  )
}
