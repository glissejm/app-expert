import React from 'react';

export default function CoursesDetail({title,content,windowStyle,contentStyle}) {
  return(
      <article className={`border-2 border-darkPrimary rounded-lg ${windowStyle}`}>
          <div className='bg-darkPrimary px-3 py-2 text-lightSecondary font-bold'>
              <h3>{title}</h3>
          </div>
          <div className={`px-3 py-2 ${contentStyle}`}>
            <p>{content}</p>
          </div>
      </article>
  )
}
