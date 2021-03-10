import React, {useEffect, useState} from 'react';
import sanityClient from '../client';

export default function Project()
{
    const [projectData, setProjectData] = useState(null);
        useEffect(() => {
            sanityClient
                .fetch(`*[_type == "project"]
                {
                    title,
                    date,
                    description,
                    projectType,
                    projectImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    },
                    link,
                    tags
                }`)
                .then((data) => setProjectData(data))
                .catch(console.error)    
        }, []);







    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Os Meus Projectos</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Bem vindos aos meus projectos pessoais</h2>
                <section className="grid grid-cols-2 gap-8"> 
                {projectData ? (
                    projectData.map((project, index) =>  (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            >{project.title}</a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Acabado no dia</strong>:{" "}
                                {new Date(project.date).toLocaleString()}
                                <br></br>
                            </span>
                            <span></span>
                            <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400" >
                                
                                <img 
                                    src={project.projectImage.asset.url}
                                    alt={project.projectImage.alt}
                                    className="w-full h-full rounded-r object-cover"
                                    />
                                    
                            </span>
                            <span>
                                <br></br>
                                <strong className="font-bold">Tipo de Projecto</strong>: {" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                {project.description}
                            </p>
                            <a href={project.link} 
                            target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                                Ver o Projecto{" "}
                                <span aria-label="right pointer">👉</span>
                            </a>

                            
                        </div>
                    </article>
                    
                    ))
      ) : (
        <p className="flex justify-center cursive">Não há Posts. Crie Primeiro</p>
      )}
      
                </section>
            </section>
        </main>

    );
}