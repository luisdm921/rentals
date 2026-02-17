# UI Components

## PropertyGallery

Componente de galería modal para mostrar múltiples imágenes de una propiedad.

### Características

- **Modal de pantalla completa** - Se muestra sobre el contenido con fondo oscuro semitransparente
- **Navegación de imágenes** - Flechas para navegar entre fotos (izquierda/derecha)
- **Miniaturas** - Vista previa de todas las imágenes disponibles
- **Navegación por teclado** - Tecla ESC para cerrar
- **Responsive** - Adapta su diseño a diferentes tamaños de pantalla
- **Detalles de la propiedad** - Muestra información completa mientras se navega por las fotos
- **CTAs integrados** - Botones para contacto directo desde la galería

### Uso

```tsx
import { PropertyGallery } from "@/components/ui/PropertyGallery";

// En tu componente
const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
const [isGalleryOpen, setIsGalleryOpen] = useState(false);

<PropertyGallery
  property={selectedProperty}
  isOpen={isGalleryOpen}
  onClose={() => setIsGalleryOpen(false)}
/>
```

### Props

- `property` (Property | null) - Objeto de propiedad con información e imágenes
- `isOpen` (boolean) - Controla la visibilidad del modal
- `onClose` (function) - Callback para cerrar el modal

### Interface Property

```tsx
interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[]; // Array de URLs de imágenes
  featured: boolean;
  description?: string; // Opcional
}
```

### Controles

- **Flechas izquierda/derecha** - Navegar entre imágenes (solo visible en hover)
- **Miniaturas** - Click para ir directamente a una imagen específica
- **Botón X** - Cerrar galería
- **Tecla ESC** - Cerrar galería
- **Click en fondo** - Cerrar galería
- **Contador** - Muestra imagen actual / total de imágenes

### Integración con Properties

El componente `Properties.tsx` ya está configurado para usar la galería:

1. Click en la imagen de la tarjeta → Abre galería
2. Click en botón "Ver Galería" → Abre galería
3. Badge con número de fotos visible en cada tarjeta

### Personalización

Para personalizar el número de WhatsApp en los CTAs, edita la constante en el componente PropertyGallery.tsx:

```tsx
const whatsappNumber = "525512345678"; // Reemplaza con tu número
```
