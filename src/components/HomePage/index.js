import { documentToReactComponents } from '@contentful/rich-text-react-renderer';  // Import for rendering RichText
import {
    useContentfulInspectorMode,
    useContentfulLiveUpdates,
  } from '@contentful/live-preview/react';
  import { ContentfulLivePreview } from '@contentful/live-preview';

const Home = ({homePage}) =>{
    const updatedBlog = useContentfulLiveUpdates(homePage);
  const inspectorProps = useContentfulInspectorMode({ entryId: homePage.sys.id });
  return(  
    
        <div>
            <h1 id='homePageTitle' className="title"
                          {...inspectorProps({ fieldId: 'homePageTitle' })}>
                                          {updatedBlog?.fields?.homePageTitle}

                            </h1>
            <div id='homePagedescription' className="description" {...inspectorProps({ fieldId: 'homePagedescription' })}>

                {documentToReactComponents(homePage?.fields?.homePageDescription)}

            </div>
        </div>

        )
};

export default Home;
