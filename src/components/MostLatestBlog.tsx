import React from 'react'
import BlogDisplay , { BlogContent } from './mini/BlogDisplay'
import Heading from './mini/Heading'

const MostLatestBlogs = () => {
  const blogs: BlogContent[] = [
    {title: "Top essential trends in 2021", content: "More off this less hello samlande lied much over tightly circa horse taped mightly", image: "/blog1stpicture.png", date: "21 august 2020"},
    {title: "Top essential trends in 2021", content: "More off this less hello samlande lied much over tightly circa horse taped mightly", image: "/blog2stpicture.png", date: "21 august 2020"},
    {title: "Top essential trends in 2021", content: "More off this less hello samlande lied much over tightly circa horse taped mightly", image: "/blog3rdpicture.png", date: "21 august 2020"},
  ]
  return (
    <div className='py-10 w-full px-5 lg:px-40'>
    <Heading text='Latest Blogs' />
    <div className='md:gap-4 lg:gap-10 grid md:grid-cols-3'>
        {blogs.map((blog, index) => (<BlogDisplay key={index} data={blog} />))}
    </div>
</div>
  )
}

export default MostLatestBlogs
