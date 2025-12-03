/*
  # Agregar Servicios Completos de Fly Fishing con Soporte Multipaís
  
  1. Nueva Tabla: complete_packages
    - `id` (uuid, primary key)
    - `package_name` (text) - Nombre del paquete
    - `country` (text) - País: Argentina o Chile
    - `region` (text) - Región específica (ej: Patagonia Norte, Patagonia Sur)
    - `location` (text) - Ubicación exacta
    - `duration_days` (integer) - Duración en días
    - `max_guests` (integer) - Máximo de huéspedes
    - `includes_accommodation` (boolean) - Incluye alojamiento
    - `includes_guide` (boolean) - Incluye guía
    - `includes_fishing` (boolean) - Incluye permisos de pesca
    - `includes_meals` (boolean) - Incluye comidas
    - `includes_transport` (boolean) - Incluye traslados
    - `description_es` (text) - Descripción en español
    - `description_en` (text) - Descripción en inglés
    - `price_usd` (decimal) - Precio en USD
    - `season_start` (text) - Inicio de temporada (ej: "Noviembre")
    - `season_end` (text) - Fin de temporada (ej: "Abril")
    - `difficulty_level` (text) - Nivel: beginner, intermediate, advanced
    - `target_species` (text[]) - Especies objetivo
    - `image_url` (text) - URL de imagen del paquete
    - `created_by` (text) - Usuario creador
    - `created_at` (timestamptz)
    - `updated_at` (timestamptz)
  
  2. Seguridad
    - Habilitar RLS en complete_packages
    - Políticas para lectura pública
    - Políticas para creación por usuarios autenticados
*/

CREATE TABLE IF NOT EXISTS complete_packages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  package_name text NOT NULL,
  country text NOT NULL CHECK (country IN ('Argentina', 'Chile')),
  region text NOT NULL,
  location text NOT NULL,
  duration_days integer NOT NULL DEFAULT 3,
  max_guests integer NOT NULL DEFAULT 4,
  includes_accommodation boolean DEFAULT true,
  includes_guide boolean DEFAULT true,
  includes_fishing boolean DEFAULT true,
  includes_meals boolean DEFAULT true,
  includes_transport boolean DEFAULT true,
  description_es text NOT NULL,
  description_en text NOT NULL,
  price_usd decimal(10,2) NOT NULL,
  season_start text NOT NULL,
  season_end text NOT NULL,
  difficulty_level text CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')) DEFAULT 'intermediate',
  target_species text[] NOT NULL,
  image_url text,
  created_by text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE complete_packages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Los paquetes son visibles públicamente"
  ON complete_packages FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Usuarios autenticados pueden crear paquetes"
  ON complete_packages FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Usuarios pueden actualizar sus propios paquetes"
  ON complete_packages FOR UPDATE
  TO authenticated
  USING (created_by = current_user)
  WITH CHECK (created_by = current_user);

CREATE POLICY "Usuarios pueden eliminar sus propios paquetes"
  ON complete_packages FOR DELETE
  TO authenticated
  USING (created_by = current_user);

-- Insertar datos de ejemplo
INSERT INTO complete_packages (
  package_name, 
  country, 
  region, 
  location, 
  duration_days, 
  max_guests,
  description_es,
  description_en,
  price_usd,
  season_start,
  season_end,
  difficulty_level,
  target_species,
  created_by
) VALUES 
(
  'Aventura Chimehuin Premium',
  'Argentina',
  'Patagonia Norte',
  'Junín de los Andes, Neuquén',
  5,
  6,
  'Experimenta la pesca con mosca en el legendario río Chimehuin. Incluye alojamiento boutique, guía experto bilingüe, todas las comidas gourmet y traslados desde el aeropuerto de Chapelco.',
  'Experience fly fishing in the legendary Chimehuin River. Includes boutique accommodation, expert bilingual guide, all gourmet meals and airport transfers from Chapelco.',
  2800.00,
  'Noviembre',
  'Abril',
  'intermediate',
  ARRAY['Trucha Arcoíris', 'Trucha Marrón', 'Trucha de Arroyo'],
  'system'
),
(
  'Patagonia Sur Expedition',
  'Argentina',
  'Patagonia Sur',
  'Río Grande, Tierra del Fuego',
  7,
  4,
  'La experiencia definitiva para truchas de mar. Lodge exclusivo a orillas del río, guías especializados, comidas regionales y transporte 4x4 a los mejores spots.',
  'The ultimate sea-run trout experience. Exclusive riverside lodge, specialized guides, regional cuisine and 4x4 transport to the best spots.',
  4500.00,
  'Enero',
  'Marzo',
  'advanced',
  ARRAY['Trucha de Mar', 'Trucha Marrón'],
  'system'
),
(
  'Valle del Futaleufú Explorer',
  'Chile',
  'Patagonia Chilena',
  'Futaleufú, Región de Los Lagos',
  4,
  8,
  'Descubre las aguas turquesa del Futaleufú. Alojamiento cómodo, guías locales experimentados, asado patagónico y traslados desde Chaitén o Palena.',
  'Discover the turquoise waters of Futaleufú. Comfortable accommodation, experienced local guides, Patagonian BBQ and transfers from Chaitén or Palena.',
  1900.00,
  'Octubre',
  'Abril',
  'beginner',
  ARRAY['Trucha Arcoíris', 'Trucha Café'],
  'system'
),
(
  'Aysén Wilderness Package',
  'Chile',
  'Región de Aysén',
  'Coyhaique y alrededores',
  6,
  6,
  'Pesca remota en los ríos prístinos de Aysén. Lodge confortable, guías certificados, cocina casera patagónica y vuelos chárter opcionales a sectores remotos.',
  'Remote fishing in pristine Aysén rivers. Comfortable lodge, certified guides, homemade Patagonian cuisine and optional charter flights to remote sections.',
  3200.00,
  'Noviembre',
  'Abril',
  'intermediate',
  ARRAY['Trucha Arcoíris', 'Trucha Marrón', 'Salmón Coho'],
  'system'
);
