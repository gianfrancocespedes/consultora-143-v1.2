export const sidebarData = [
    {
        itemName: "home",
        svgName: "home",
        href:"/"
    },
    {
        itemName: "workspaces",
        svgName: "workspaces",
        href:"/espacios",
        info:"3"
    },
    {
        itemName: "users",
        svgName: "users",
        children: [
            {
                childrenName: "students",
                href: "/usuarios/estudiantes",
            },
            {
                childrenName: "advisors",
                href: "/usuarios/asesores",
            },
            {
                childrenName: "collaborators",
                href: "/usuarios/colaboradores",
            },
        ],
    },
    {
        itemName: "services",
        svgName: "services",
        href:"/servicios"
    },
    {
        itemName: "contacts",
        svgName: "contacts",
        href:"/prueba"
    },
    {
        itemName: "lists",
        svgName: "list",
        href:"/prueba"
    },
    {
        itemName: "configuration",
        svgName: "configuration",
        href:"/configuracion"
    },
];

/*
    Menú:
    Inicio - Home (I)
    Espacio de trabajo - Workspaces (I)
    Usuarios (I)
        Colaboradores
        Estudiantes
        Asesores
    Servicios (I)
    Contactos (I)
    Listas (I)
    Configuración (I)
 */