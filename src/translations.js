export const translations = {
  es: {
    nav: {
      trips: 'Salidas',
      anglers: 'Pescadores',
      guides: 'Guías',
      packages: 'Paquetes Completos',
      login: 'Ingresar',
      register: 'Registrarse'
    },
    hero: {
      title: 'CastNet',
      subtitle1: 'Conectá con pescadores y guías, compartí flotadas y conocé nuevos ríos y lagos.',
      subtitle2: 'Casteá en red.',
      planButton: 'Plan your next Cast',
      searchLocation: 'Ubicación',
      searchButton: 'Buscar'
    },
    searchModal: {
      title: 'Buscar Salida de Pesca',
      location: 'Ubicación',
      startDate: 'Fecha de inicio',
      endDate: 'Fecha de fin',
      startTime: 'Hora de inicio',
      endTime: 'Hora de fin',
      search: 'Buscar'
    },
    sections: {
      recommended: 'Opciones recomendadas para ti',
      published: 'Salidas Publicadas',
      packages: 'Paquetes Completos de Fly Fishing',
      testimonials: 'Testimonios'
    },
    packages: {
      allCountries: 'Todos los Países',
      argentina: 'Argentina',
      chile: 'Chile',
      days: 'días',
      guests: 'huéspedes máx.',
      season: 'Temporada',
      difficulty: 'Nivel',
      species: 'Especies',
      includes: 'Incluye',
      accommodation: 'Alojamiento',
      guide: 'Guía',
      fishing: 'Permisos',
      meals: 'Comidas',
      transport: 'Traslados',
      beginner: 'Principiante',
      intermediate: 'Intermedio',
      advanced: 'Avanzado'
    },
    modal: {
      login: 'Ingresar',
      register: 'Registrarse',
      email: 'Email',
      password: 'Contraseña',
      confirmPassword: 'Confirmar Contraseña',
      firstName: 'Nombre',
      lastName: 'Apellido',
      continueGoogle: 'Continuar con Google',
      continueFacebook: 'Continuar con Facebook'
    },
    publishTrip: {
      title: 'Publicar Salida de Pesca',
      location: 'Ubicación',
      startDate: 'Día de comienzo',
      endDate: 'Día de finalización',
      startTime: 'Horario de salida',
      endTime: 'Horario de finalización',
      activity: 'Actividad',
      vadeo: 'Vadeo',
      deriva: 'Deriva: Bote/Balsa/Catarraft',
      lancha: 'Lancha',
      otro: 'Otro',
      otherActivity: 'Especificar otra actividad',
      availableSpots: 'Lugares disponibles',
      publish: 'Publicar Salida'
    },
    profile: {
      myProfile: 'Mi Perfil',
      settings: 'Ajustes de Perfil',
      publishTrip: 'Publica Salida de Pesca',
      searchTrip: 'Buscar Salida de Pesca',
      logout: 'Cerrar Sesión'
    },
    footer: {
      copyright: '© 2025 CastNet. Hecho en Patagonia. Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      trips: 'Trips',
      anglers: 'Anglers',
      guides: 'Guides',
      packages: 'Complete Packages',
      login: 'Log in',
      register: 'Register'
    },
    hero: {
      title: 'CastNet',
      subtitle1: 'Connect with anglers and guides, share float trips and discover new rivers and lakes.',
      subtitle2: 'Cast your net.',
      planButton: 'Plan your next Cast',
      searchLocation: 'Location',
      searchButton: 'Search'
    },
    searchModal: {
      title: 'Search Fishing Trip',
      location: 'Location',
      startDate: 'Start Date',
      endDate: 'End Date',
      startTime: 'Start Time',
      endTime: 'End Time',
      search: 'Search'
    },
    sections: {
      recommended: 'Recommended options for you',
      published: 'Published Trips',
      packages: 'Complete Fly Fishing Packages',
      testimonials: 'Testimonials'
    },
    packages: {
      allCountries: 'All Countries',
      argentina: 'Argentina',
      chile: 'Chile',
      days: 'days',
      guests: 'max guests',
      season: 'Season',
      difficulty: 'Level',
      species: 'Species',
      includes: 'Includes',
      accommodation: 'Accommodation',
      guide: 'Guide',
      fishing: 'Permits',
      meals: 'Meals',
      transport: 'Transfers',
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced'
    },
    modal: {
      login: 'Log in',
      register: 'Register',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      firstName: 'First Name',
      lastName: 'Last Name',
      continueGoogle: 'Continue with Google',
      continueFacebook: 'Continue with Facebook'
    },
    publishTrip: {
      title: 'Publish Fishing Trip',
      location: 'Location',
      startDate: 'Start Date',
      endDate: 'End Date',
      startTime: 'Start Time',
      endTime: 'End Time',
      activity: 'Activity',
      vadeo: 'Wading',
      deriva: 'Drift: Boat/Raft/Cataraft',
      lancha: 'Motorboat',
      otro: 'Other',
      otherActivity: 'Specify other activity',
      availableSpots: 'Available spots',
      publish: 'Publish Trip'
    },
    profile: {
      myProfile: 'My Profile',
      settings: 'Profile Settings',
      publishTrip: 'Publish Fishing Trip',
      searchTrip: 'Search Fishing Trip',
      logout: 'Log out'
    },
    footer: {
      copyright: '© 2025 CastNet. Made in Patagonia. All rights reserved.'
    }
  }
};

export function getTranslation(lang, key) {
  const keys = key.split('.');
  let value = translations[lang];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}
