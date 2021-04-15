import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Example = () => {

    return (
        <>
            <SEO />
            <Layout>
                <main className="wrapper" data-sal="slide-right" data-sal-duration="1000">
                    <section className="examples">
                            <h1>Examples</h1>
                    </section>
                </main>
            </Layout>
        </>
    )
}

export default Example;