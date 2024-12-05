import { documentToReactComponents } from '@contentful/rich-text-react-renderer';  // Import for rendering RichText
import ContentfulPreviewProvider from '../components/PreviewClient'

const Home = ({homePage}) =>{
  return(  
    <ContentfulPreviewProvider
      locale="en-US" // This is required and allows you to set the locale once and have it reused throughout the preview
      enableInspectorMode // This allows you to toggle the inspector mode which is on by default
      enableLiveUpdates // This allows you to toggle the live updates which is on by default
      debugMode // This allows you to toggle the debug mode which is off by default
      targetOrigin="https://app.contentful.com" // This allows you to configure the allowed host of the live preview (default: ['https://app.contentful.com', 'https://app.eu.contentful.com'])
    > 
        <div>
            <h1 id='homePageTitle' className="title">{homePage?.fields?.homePageTitle}</h1>
            <div id='homePagedescription' className="description">
                {documentToReactComponents(homePage?.fields?.homePageDescription)}
            </div>
        </div>
        </ContentfulPreviewProvider>

        )
};

export default Home;
