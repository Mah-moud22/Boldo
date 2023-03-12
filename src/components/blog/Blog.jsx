import React from 'react'
import SectionHeader from '../shared/SectionHeader'
import SectionDescription from '../shared/SectionDescription'
import BlogCard from './BlogCard'
import blog1 from '../../assets/imgs/blog1.png'
import blog2 from '../../assets/imgs/blog2.png'
import blog3 from '../../assets/imgs/blog3.png'
import blogAuthor1 from '../../assets/imgs/blogAuthor1.png'
import blogAuthor2 from '../../assets/imgs/blogAuthor2.png'
import blogAuthor3 from '../../assets/imgs/blogAuthor3.png'
import Subscribe from './Subscribe'
function Blog() {
    return (
        <div id='Blog'>
            <div className="container">
                <SectionHeader title="our Blog" />
                <SectionDescription description="Value proposition accelerator product management venture" />
                <div className="d-flex justify-content-evenly text-start py-5">
                    <BlogCard image={blog1} title="Category" date="November 22, 2021" desc="Pitch termsheet backing validation focus release." authorImage={blogAuthor1} />
                    <BlogCard image={blog2} title="Category" date="November 22, 2021" desc="Pitch termsheet backing validation focus release." authorImage={blogAuthor2} />
                    <BlogCard image={blog3} title="Category" date="November 22, 2021" desc="Pitch termsheet backing validation focus release." authorImage={blogAuthor3} />
                </div>
                <button className='btn btn-outline-primary rounded-5 mb-5' type='button'>Load more</button>
                <Subscribe />
            </div>
        </div>
    )
}

export default Blog
