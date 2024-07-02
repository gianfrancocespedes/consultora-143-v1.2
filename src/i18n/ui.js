export const defaultLang = 'es';

export const sidebar = {
    es : {
        home          : "Inicio",
        workspaces    : "Espacio de trabajo",
        users         : "Usuarios",
        students      : "Estudiantes",
        advisors      : "Asesores",
        collaborators : "Colaboradores",
        services      : "Servicios",
        contacts      : "Contactos",
        lists         : "Listas",
        configuration : "Configuración",
    },
    en : {
        home          : "Home",
        workspaces    : "Workspaces",
        users         : "Users",
        students      : "Students",
        advisors      : "Advisors",
        collaborators : "Collaborators",
        services      : "Services",
        contacts      : "Contacts",
        lists         : "Lists",
        configuration : "Configuration",
    }
}

export const routes = {
    es : {
        // Home
        home          : "",
        // Workspaces
        workspaces    : "espacios",
        case          : "espacios/caso",        // Cuando esté el backend será "espacios/caso/:id"
        event         : "espacios/evento",      // Cuando esté el backend será "espacios/evento/:id"
        // Users
        students      : "usuarios/estudiantes",
        student       : "usuarios/estudiantes/estudiante",  // Cuando esté el backend será "usuarios/estudiante/:id"
        advisors      : "usuarios/asesores",
        advisor       : "usuarios/asesores/asesor",      // Cuando esté el backend será "usuarios/asesor/:id"
        disponibility : "usuarios/asesores/disponibilidad",   // Cuando esté el backend será "usuarios/asesor/:id/disponibilidad"
        collaborators : "usuarios/colaboradores",
        collaborator  : "usuarios/colaboradores/colaborador", // Cuando esté el backend será "usuarios/colaborador/:id"
        // Services
        services      : "servicios",
        service       : "servicios/servicio",   // Cuando esté el backend será "servicio/:id"
        newService    : "servicios/nuevo",
        schedule      : "servicios/cronograma", // Cuando esté el backend será "servicios/:id/cronograma"
        progress      : "servicios/avance",     // Cuando esté el backend será "servicios/:id/avance"
        payments      : "servicios/pagos",      // Cuando esté el backend será "servicios/:id/pagos"
        assign        : "servicios/asignar",    // Cuando esté el backend será "servicios/:id/asignar"
        filter        : "servicios/filtro",
        // Contacts
        contacts      : "contactos",
        // Lists
        lists         : "listas",
        // Configuration
        configuration : "configuracion",
        // Others
        notFound      : "no-encontrado",
    },
    en : {
        // Home
        home          : "",
        // Workspaces
        workspaces    : "workspaces",
        case          : "workspaces/case",      // Cuando esté el backend será "workspaces/case/:id"
        event         : "workspaces/event",     // Cuando esté el backend será "workspaces/event/:id"
        // Users
        students      : "users/students",
        student       : "users/students/student",        // Cuando esté el backend será "users/student/:id"
        advisors      : "users/advisors",
        advisor       : "users/advisors/advisor",        // Cuando esté el backend será "users/advisor/:id"
        disponibility : "users/advisors/disponibility",   // Cuando esté el backend será "users/advisor/:id/disponibility"
        collaborators : "users/collaborators",
        collaborator  : "users/collaborators/collaborator",   // Cuando esté el backend será "users/collaborator/:id"
        // Services
        services      : "services",
        service       : "services/service",     // Cuando esté el backend será "service/:id"
        newService    : "services/new",
        schedule      : "services/schedule",    // Cuando esté el backend será "services/:id/schedule"
        progress      : "services/progress",    // Cuando esté el backend será "services/:id/progress"
        payments      : "services/payments",    // Cuando esté el backend será "services/:id/payments"
        assign        : "services/assign",      // Cuando esté el backend será "services/:id/assign"
        filter        : "services/filter",
        // Contacts
        contacts      : "contacts",
        // Lists
        lists         : "lists",
        // Configuration
        configuration : "configuration",
        // Others
        notFound      : "not-found",
    }
}