# 📸 Galería de Imágenes para Propiedades

## ✨ Nuevas Características

Se ha implementado un sistema completo de galería de imágenes para cada propiedad, permitiendo a los usuarios ver múltiples fotos de las casas antes de tomar decisiones.

## 🎯 Funcionalidad Implementada

### 1. **Galería Modal Interactiva**
- Modal de pantalla completa con fondo oscuro semitransparente
- Diseño responsive que se adapta a móvil, tablet y desktop
- Navegación fluida entre imágenes

### 2. **Controles Intuitivos**
- **Flechas de navegación**: Izquierda/Derecha para cambiar de imagen
- **Miniaturas clickeables**: Vista rápida de todas las fotos disponibles
- **Contador de imágenes**: Muestra posición actual (ej: "3 / 7")
- **Teclado**: Presiona ESC para cerrar la galería
- **Click en fondo**: Cerrar al hacer click fuera del contenido

### 3. **Información Completa**
Mientras navegas por las fotos, puedes ver:
- Título y ubicación de la propiedad
- Precio mensual destacado
- Especificaciones (recámaras, baños, área)
- Descripción detallada
- Badges (Destacada, etc.)

### 4. **Acciones Rápidas**
Desde la galería puedes:
- **Agendar Visita**: Botón que lleva a la sección de contacto
- **WhatsApp**: Contacto directo con mensaje pre-configurado

### 5. **Tarjetas de Propiedad Mejoradas**
- Badge con contador de fotos (ej: "🖼️ 5 fotos")
- Toda la imagen es clickeable para abrir galería
- Botón "Ver Galería" en lugar de "Ver Más"
- Texto "Ver Galería" aparece al hacer hover sobre la imagen

## 📂 Archivos Creados/Modificados

### Nuevos Componentes
```
src/components/ui/
├── PropertyGallery.tsx    # Componente de galería modal
├── index.ts              # Exportaciones
└── README.md             # Documentación del componente
```

### Archivos Modificados
```
src/components/sections/
└── Properties.tsx        # Actualizado con galería y múltiples imágenes
```

## 🎨 Datos de las Propiedades

Cada propiedad ahora incluye:

```typescript
{
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];        // ⭐ Array de imágenes (4-7 fotos)
  featured: boolean;
  description: string;     // ⭐ Descripción detallada
}
```

### Ejemplo de Propiedad:

```typescript
{
  id: 1,
  title: "Casa Moderna en Residencial Premium",
  location: "Polanco, CDMX",
  price: "$25,000",
  bedrooms: 3,
  bathrooms: 2.5,
  area: 180,
  images: [
    "/images/properties/property-1-1.jpg",
    "/images/properties/property-1-2.jpg",
    "/images/properties/property-1-3.jpg",
    "/images/properties/property-1-4.jpg",
    "/images/properties/property-1-5.jpg",
  ],
  featured: true,
  description: "Hermosa casa moderna ubicada en uno de los residenciales más exclusivos..."
}
```

## 🖼️ Agregar Imágenes Reales

Actualmente el proyecto usa placeholders. Para agregar imágenes reales:

1. **Ubicación de las imágenes**:
   ```
   public/images/properties/
   ├── property-1-1.jpg
   ├── property-1-2.jpg
   ├── property-1-3.jpg
   └── ...
   ```

2. **Formato recomendado**:
   - Formato: JPEG o WebP (mejor compresión)
   - Resolución: 1920x1080px (16:9) o 1600x900px
   - Peso: < 500KB por imagen (optimizadas)
   - Nombres: `property-[id]-[número].jpg`

3. **Optimizar imágenes**:
   ```bash
   # Puedes usar herramientas como:
   - ImageOptim (Mac)
   - TinyPNG (Web)
   - Sharp (Node.js)
   ```

## 🎯 Próximos Pasos

### Opcional - Mejoras Adicionales:

1. **Zoom de Imágenes**
   - Permitir hacer zoom en las fotos
   - Funcionalidad de pinch-to-zoom en móviles

2. **Lazy Loading**
   - Cargar imágenes solo cuando se necesitan
   - Mejora el rendimiento inicial

3. **Compartir Propiedad**
   - Botón para compartir en redes sociales
   - Generar URL única para cada propiedad

4. **Favoritos**
   - Sistema para guardar propiedades favoritas
   - LocalStorage para persistencia

5. **Comparador**
   - Comparar múltiples propiedades lado a lado

## 🔧 Personalización

### Cambiar número de WhatsApp

Edita en [PropertyGallery.tsx](../src/components/ui/PropertyGallery.tsx):

```typescript
// Línea ~260
href={`https://wa.me/525512345678?text=...`}
//                  ^^^^^^^^^ Tu número aquí
```

### Modificar propiedades

Edita el array `properties` en [Properties.tsx](../src/components/sections/Properties.tsx):

```typescript
const properties: Property[] = [
  {
    // Tus datos aquí
  }
];
```

### Colores del modal

Los colores heredan de tu configuración de Tailwind. Para personalizar específicamente la galería, edita las clases en `PropertyGallery.tsx`.

## 🚀 Uso en Producción

El componente está listo para producción. Solo necesitas:

1. ✅ Agregar imágenes reales en `public/images/properties/`
2. ✅ Actualizar el número de WhatsApp
3. ✅ Verificar que todas las descripciones sean correctas
4. ✅ (Opcional) Agregar más propiedades al array

## 📱 Responsive

La galería es completamente responsive:

- **Desktop**: Galería en 2/3 del espacio, detalles en 1/3
- **Tablet**: Similar a desktop con ajustes de padding
- **Móvil**: Stack vertical, galería arriba, detalles abajo (scroll)

## ⌨️ Atajos de Teclado

| Tecla | Acción |
|-------|--------|
| ESC | Cerrar galería |
| ← | Imagen anterior |
| → | Imagen siguiente |

_(Nota: Las flechas están planificadas para implementación futura)_

---

**¡La galería de imágenes está lista para usar! 🎉**

Visita http://localhost:3004 y haz click en cualquier propiedad para probarla.
