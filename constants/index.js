import { createClient } from "next-sanity";

const client = createClient({
  projectId: 'dkckmb33',
  dataset: 'production',
  useCdn: false
});

export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/html.png',
  },
  {
    id: 'world-2',
    imgUrl: '/js.png',
  },
  {
    id: 'world-3',
    imgUrl: '/java.png',
  },
  {
    id: 'world-4',
    imgUrl: '/cpp.png',
  },
  {
    id: 'world-5',
    imgUrl: '/react.png',
  },
];

const Index = (props) => {
  console.log(props.posts)
  return (
    <div>
      {/* render data fetched from Sanity here */}
    </div>
  );
};

export async function getStaticProps() {
  try {
    const posts = await client.fetch(`*[_type == "Post"]`)
    const updatedExploreWorlds = exploreWorlds.map((world, index) => {
      return {
        ...world,
        title: posts[index].name
      }
    });
    return {
      props: {
        exploreWorlds: updatedExploreWorlds
      }
    }
  } catch (err) {
    console.log(err)
  }
}

export default Index;


export const startingFeatures = [
  'Find a world that suits you and you want to enter',
  'Enter the world by reading basmalah to be safe',
  'No need to beat around the bush, just stay on the gas and have fun',
];

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: 'A new world',
    subtitle:
        'we have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: '/headset.svg',
    title: 'More realistic',
    subtitle:
        'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
];

export const insights = [
  {
    imgUrl: '/planet-06.png',
    title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
    subtitle:
        'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    imgUrl: '/planet-07.png',
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle:
        'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    imgUrl: '/planet-08.png',
    title: 'With one platform you can explore the whole world virtually',
    subtitle:
        'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
];

export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
  },
];
