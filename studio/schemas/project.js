export default
{
    name: "project",
    title: "Project",
    type: "document",
    fields:
    [
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "description",
            type: "string",
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "string",
            options: {
                list: [
                    {value: "personal", title: "Pessoal"},
                    {value: "client", title: "Trabalho"},
                    {value: "school", title: "Escolar"},
                ],
            },
        },
        {
            name: 'projectImage',
            title: 'Project Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: "link",
            type: "url"
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string"
                },
            ],

            options:
            {
                layouts: "tags",
            }
        }
    ]

}