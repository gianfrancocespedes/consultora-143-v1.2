export const sidebarData = [
    {
        itemName: "Inicio",
        svgName: "home",
        href:"/"
    },
    {
        itemName: "Espacio de trabajo",
        svgName: "workspaces",
        href:"/espacios",
        info:"3"
    },
    {
        itemName: "Usuarios",
        svgName: "users",
        children: [
            {
                childrenName: "Estudiantes",
                href: "/usuarios/estudiantes",
            },
            {
                childrenName: "Asesores",
                href: "/usuarios/asesores",
            },
            {
                childrenName: "Colaboradores",
                href: "/usuarios/colaboradores",
            },
        ],
    },
    {
        itemName: "Servicios",
        svgName: "services",
        href:"/servicios"
    },
    {
        itemName: "Contactos",
        svgName: "contacts",
        href:"/prueba"
    },
    {
        itemName: "Listas",
        svgName: "list",
        href:"/prueba"
    },
    {
        itemName: "Configuración",
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