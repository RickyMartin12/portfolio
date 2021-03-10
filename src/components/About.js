import React, {useEffect, useState} from 'react';
import sanityClient from '../client';
import Perfil_Ricardo from '../image.gif';
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source)
{
    return builder.image(source);
}



export default function About()
{
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "author"]
            {
                name,
                bio,
                "authorImage": image.asset->url
            }`)
            .then((data) => setAuthor(data))
            .catch(console.error)    
    }, []);



    return (
        
        <main className="relative">
            <img src={Perfil_Ricardo} alt={Perfil_Ricardo} className="absolute w-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">

            {author ? (author.map((aut, index) => (
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(aut.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt={aut.name}/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4">
                            Ola sou o {" "}
                            <span className="text-green-100">{aut.name}</span>
                        </h1>
                        <div className="prose lg: prose-xl text-white">
                            <BlockContent blocks={aut.bio} projectId="1nod04nz" dataset="production" />
                        </div>
                    </div>
                </section>
            ))
            ) : (
            <p className="flex justify-center cursive text-white">Não tem Perfil</p>
            )}



            </div>
        </main>
    )
}