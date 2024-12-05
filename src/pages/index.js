import Home from '@/components/HomePage';
import Hero from '../components/HeroBanner'; 
import client from '@/lib/contentful'; 
import ContentfulPreviewProvider from '../components/PreviewClient'

const Main = ({ homePage, heroBanner }) => {
  return (
    <ContentfulPreviewProvider
      locale="en-US" // This is required and allows you to set the locale once and have it reused throughout the preview
      enableInspectorMode // This allows you to toggle the inspector mode which is on by default
      enableLiveUpdates // This allows you to toggle the live updates which is on by default
      debugMode // This allows you to toggle the debug mode which is off by default
      targetOrigin="https://app.contentful.com" // This allows you to configure the allowed host of the live preview (default: ['https://app.contentful.com', 'https://app.eu.contentful.com'])
    > 
    <div className="container">
      <Home homePage={homePage} />
      <Hero heroBanner={heroBanner} />
    </div>
    </ContentfulPreviewProvider>
  );
};

export async function getStaticProps() {
  try {

    const resHome = await client.getEntries({
      content_type: 'homePage',  
    });

    const res = await client.getEntries({
      content_type: 'heroBanner',
    });

    const homePage = resHome.items[0];
    const heroBanner = res.items[0]; 
    return {
      props: {
        homePage,
        heroBanner,
      },
    };
  } catch (error) {
    console.error('Error fetching content from Contentful:', error);
    return {
      props: {
        homePage: null,
        heroBanner: null, 
      },
    };
  }
}

export default Main;
