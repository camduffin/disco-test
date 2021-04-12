import React from 'react';
import Layout from '../components/Layout';
import '../../styles/index.scss';
// import weddingCeremony from '../images/wedding-ceremony.jpg';
// import weddingBouqet from '../images/wedding-bouqet.jpg';
import { StaticImage } from 'gatsby-plugin-image';

const Blog = () => {

    // const weddingCeremony = '../images/wedding-ceremony.jpg';
    // const weddingBouqet = '../images/wedding-bouqet.jpg';

    return (
            <Layout>
                <div className="wrapper">
                    <section className="blog-section">
                        <h2 className="blog-header">Blog</h2>
                        <div className="blog-container1">
                            <div className="blog-text-container1">
                                <h3>Hosting a backyard wedding during Covid </h3>
                                <h4>April 1st, 2021</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam possimus nesciunt commodi quibusdam ex amet minima! Asperiores fuga inventore aut magni quae! Doloremque nam nihil repudiandae quidem temporibus nobis voluptatibus necessitatibus possimus minima officia? Deleniti perferendis sapiente inventore labore, et nisi aut maxime asperiores mollitia id. Vitae facilis laudantium nam perspiciatis. Iure autem ea voluptates maxime hic repellendus excepturi ipsa officia, sequi ab repellat quidem optio dolore dicta magni provident dolor voluptas aperiam nemo, veritatis eligendi quo quasi reiciendis? Et, quibusdam vitae explicabo hic fuga consequuntur inventore labore voluptatum quas, eos, tempore dolore illo ullam amet provident maiores perferendis aut magni quis harum temporibus est molestias? Assumenda facilis obcaecati vitae nam voluptatibus, nihil rem ullam vero dicta incidunt quis eos! Mollitia quam quidem nam saepe. Consequatur iusto non possimus blanditiis tempora et porro quis ullam, temporibus illum, cumque eaque earum a tenetur. Repudiandae iusto quaerat totam fuga officiis? Sequi ipsum cum iste ipsa autem voluptate, quas minima, pariatur molestiae, quisquam amet! Aut harum iste dignissimos perspiciatis quod dolor molestiae, illo culpa reprehenderit eveniet aspernatur commodi quam necessitatibus id ducimus dolorem cupiditate quasi adipisci magni, molestias sequi consectetur fugiat aperiam? Alias impedit velit dolor nulla cum cumque fugiat consectetur, dolorem illo neque beatae.</p> 

                                <div className="blog-image-container1">
                                        {/* <img src={weddingCeremony} alt=""/>  */}
                                        <StaticImage src='../images/wedding-ceremony.jpg' alt="A sign pointing wedding guests to a wedding ceremony" placeholder="blurred" loading="eager"/>
                                </div>   
                    
                                <p>Tempore similique eligendi necessitatibus quos? Incidunt porro dignissimos id! Odio sunt accusamus maxime doloribus doloremque excepturi repellendus cum! Quos odit, beatae quidem culpa quisquam quae modi quam tempore dolore eaque esse? Pariatur quo eius, consequuntur harum nihil asperiores eaque tenetur ratione quidem ducimus iste vero quia, officiis quisquam sed aliquam dicta nesciunt dolores. Enim tempora omnis quisquam, autem hic earum quod fuga reprehenderit aperiam? Hic a veritatis, voluptatem, natus ipsa error sed iure sit rerum exercitationem atque labore voluptate libero fugiat temporibus eum! Quod voluptates officia et illum, excepturi temporibus? Illo numquam delectus nulla pariatur laboriosam iste explicabo maxime ut, voluptate, quia, provident sed doloremque esse rerum.</p> 
                                
                                <p>Laboriosam, maxime sed amet quidem aliquam asperiores, pariatur perspiciatis quos at nisi magni minus temporibus ipsa, praesentium corporis? Delectus sint reiciendis voluptatum deleniti ratione in magnam quis modi labore ipsam dicta, ea sit voluptatibus at veniam harum inventore illum maxime eveniet voluptate reprehenderit doloremque quaerat pariatur. Sit molestias delectus neque nemo? Provident numquam voluptatem possimus repudiandae necessitatibus assumenda nostrum, ex quaerat recusandae quod, porro libero officiis consequuntur pariatur obcaecati, impedit enim laudantium explicabo eaque laboriosam magni veritatis culpa blanditiis. Eos fugiat dicta ad inventore, quam sed quos repudiandae soluta et omnis!</p>
                                <div className="blog-image-container2">
                                        {/* <img src={weddingBouqet} alt=""/> */}
                                        <StaticImage src='../images/wedding-bouqet.jpg' alt="A bride holding pink flowers" placeholder="blurred" loading="eager"/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
    )
}

export default Blog;