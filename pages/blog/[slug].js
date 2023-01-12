import { useRouter } from 'next/router'
import Head from 'next/head'
import { createClient } from "next-sanity";
import PortableText from "react-portable-text"
import { Footer, Navbar, TitleText, TypingText } from '../../components';
import imageUrlBuilder from '@sanity/image-url';
import moment from "moment";
import { client } from '../../client';
const urlBuilder = imageUrlBuilder(client)

const Post = ({ blog }) => {
  const router = useRouter()
  const { slug } = router.query
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
    <div className=''>
      <Navbar />
      <TitleText title={<>{blog.title}</>} textStyles="text-center" />
      <img src={urlBuilder.image(blog.mainImage).toString()} className='blog w-[50%] m-auto rounded-3xl' alt={blog.title} />
      <div className="content w-full m-auto">
        <p className="sm-text  text-white m-auto ">{moment(blog.publishedAt).utc().fromNow()} </p>
      </div>
      <PortableText
      // Pass in block content straight from Sanity.io
      content={blog.body}
      className='text-white flex items-center justify-center body m-auto'
      // Optionally override marks, decorators, blocks, etc. in a flat
      // structure without doing any gymnastics
      serializers={{
        h1: (props) => <h1 style={{ color: "red" }} {...props} />,
        li: ({ children }) => <li className="special-list-item">{children}</li>,
      }}
    />
      <Footer />
    </div>

  </> </>
}

export default Post

export const getServerSideProps = async (context) => {
  const { slug } = context.query
  console.log(slug)
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;
  const blog = await client.fetch(query);
  return {
    props: {
      blog
    }
  }
}