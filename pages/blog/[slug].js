import { useRouter } from 'next/router'
import Head from 'next/head'
import { createClient } from "next-sanity";
import PortableText from "react-portable-text"
import { Footer, Navbar, TitleText, TypingText } from '../../components';
import imageUrlBuilder from '@sanity/image-url';
import moment from "moment";
import { client } from '../../client';
const urlBuilder = imageUrlBuilder(client)

const Post = ({ blog,user }) => {
  const router = useRouter()
  const { slug } = router.query
  console.log(user)
  return <><>
    <Head>
      <meta charset="utf-8" />

      <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

      <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />

      <title>{blog.title}</title>

      <meta property="og:title" content="How to become a frontend developer | Atom Template" />

      <meta property="og:locale" content="en_US" />

      <link rel="canonical" href="//post" />

      <meta property="og:url" content="//post" />

      <meta name="description"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

      <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

      <meta name="theme-color" content="#5540af" />

      <meta property="og:site_name" content="Atom Template" />

      <meta property="og:image" content="//assets/img/social.jpg" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:site" content="@tailwindmade" />

      <link crossorigin="crossorigin" href="https://fonts.gstatic.com" rel="preconnect" />


    </Head>
      <Navbar />
    <div className='bg-[#161b22] '>
      <div className=' w-full flex items-center justify-center flex-col '>
      {/* {user.name} */}
      <div className='flex gap-5'>
        <p className='text-gradient text-lg font-extrabold'>{blog.category1}</p>
        <p className='orange_text-gradient text-lg font-extrabold'>{blog.category2}</p>
      </div>
      {/* {category.map((item, index) => (
        <div>{item.name}</div>
      ))} */}
      <p className='mt-20 text-white font-bold big'>{blog.title}</p>
      <p className='text-white text-lg small'>{blog.intro}</p>
      <img src={urlBuilder.image(blog.mainImage).toString()} className='blog-img relative'  alt={blog.title} />
      </div>
    </div>
    <div className=' w-full sec-2'>

    </div>
      <div className='sec-main  flex items-center '>
        <div className='flex flex-col items-center'>
          <p className='author'>Author</p>
          <div className='flex items-center gap-3 user'>

          <img src={urlBuilder.image(user.authorImage).maxHeight(100).width(100).toString()} className='user-image'/>
          <p className='font-bold text-white'>{user.name}</p>
          </div>
        </div>
        <p className="sm-text publishDate text-white m-auto ">{moment(blog.publishedAt).utc().format('MMMM Do YYYY')} </p>
        
      </div>
      <hr className='w-[50%] m-auto border'/>
      <div className='w-[50%] m-auto content'>
      <PortableText
      content={blog.body}
      className='text-white main_content body p-10'
      serializers={{
        h1: (props) => <h1 style={{ color: "red" }} {...props} />,
        h4: (props) => <h4 style={{ fontSize:'1.5rem',marginBottom:'10px',marginTop:'10px' }} {...props} />,
        li: ({ children }) => <ul><li className="list-item text-lg discs">{children}</li></ul>,
      }}
    />
      </div>
      
    <Footer/>
  </> </>
}

export default Post

export const getServerSideProps = async (context) => {
  const { slug } = context.query
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;
  const userquery = `*[_type == "post" && slug.current == '${slug}']{
    "name": author->name,
    "authorImage": author->image
  }[0]`;
  const blog = await client.fetch(query);
  const user = await client.fetch(userquery);
  return {
    props: {
      blog,user
    }
  }
}