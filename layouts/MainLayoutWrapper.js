import Head from 'next/head'
import { PAGE_LAYOUT } from '../appConstant';
import Footer from '../components/Footer';
import SiteHeader from '../components/SiteHeader';
import PageDefaultLayout from './PageDefaultLayout';
import HomePageLayout from './HomePageLayout';
import BlankLayout from './BlankLayout';
import { Container } from 'react-bootstrap';

const layouts = {
    [PAGE_LAYOUT.default]: PageDefaultLayout,
    [PAGE_LAYOUT.home]: HomePageLayout,
    [PAGE_LAYOUT.blank]: BlankLayout
};

const MainLayoutWrapper = (props) => {

    const {children} = props;
    const layoutName = children.type.layout;
    const PageLayout = layouts[layoutName];


    return (
        <>
        <Head>
            <title>My Promotional Website</title>
            <meta name="description" content="This will be a promotional
             website for education purpose" />  
        </Head>
        <SiteHeader/>
        <Container fluid className="layout">
            {PageLayout ? <PageLayout {...props}/> : <PageDefaultLayout {...props}/>}
        </Container>
        <Footer/>
        </>
    );
}

export default MainLayoutWrapper;