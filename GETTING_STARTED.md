# 🏡 Renta de Casas - Guía de Inicio Rápido

## 📋 Pasos para Iniciar el Proyecto

### 1. Instalar Dependencias

```bash
cd rentals
npm install
```

### 2. Iniciar Servidor de Desarrollo

```bash
npm run dev
```

El sitio estará disponible en: [http://localhost:3004](http://localhost:3004)

### 3. Compilar para Producción

```bash
npm run build
```

### 4. Iniciar Servidor de Producción

```bash
npm start
```

## 📁 Estructura del Proyecto

```
rentals/
├── public/
│   ├── images/          # Imágenes del sitio
│   └── manifest.json    # Configuración PWA
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Layout principal
│   │   ├── page.tsx     # Página de inicio
│   │   ├── globals.css  # Estilos globales
│   │   ├── robots.ts    # Configuración para bots
│   │   └── sitemap.ts   # Mapa del sitio
│   └── components/
│       ├── layout/      # Navbar y Footer
│       │   ├── Navbar.tsx
│       │   └── Footer.tsx
│       ├── sections/    # Secciones de la página
│       │   ├── Hero.tsx
│       │   ├── About.tsx
│       │   ├── Properties.tsx
│       │   ├── Features.tsx
│       │   ├── Process.tsx
│       │   ├── Testimonials.tsx
│       │   └── Contact.tsx
│       └── WhatsAppButton.tsx
├── package.json
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Personalización

### Colores

Edita los colores en [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  primary: "#2563eb",    // Azul principal
  secondary: "#1e40af",  // Azul secundario
  accent: "#f59e0b",     // Color de acento
}
```

### Información de Contacto

#### WhatsApp

Edita el número de WhatsApp en [src/components/WhatsAppButton.tsx](src/components/WhatsAppButton.tsx):

```typescript
const phoneNumber = "525512345678"; // Tu número aquí
```

#### Footer

Edita la información de contacto en [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx)

### Propiedades

Edita las propiedades en [src/components/sections/Properties.tsx](src/components/sections/Properties.tsx)

### Imágenes

1. Agrega tus imágenes en `public/images/`
2. Crea subdirectorios:
   - `properties/` - Fotos de propiedades
   - `testimonials/` - Fotos de clientes (opcional)
   - `icons/` - Iconos de la app

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. Click en "Deploy"

### Otros Servicios

El proyecto genera archivos estáticos que puedes desplegar en:
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

## 📝 Metadata SEO

Edita el SEO en [src/app/layout.tsx](src/app/layout.tsx):

```typescript
export const metadata: Metadata = {
  title: "Tu Título",
  description: "Tu descripción",
  // ... más campos
};
```

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Compila para producción
- `npm start` - Inicia servidor de producción
- `npm run lint` - Ejecuta el linter

## 📱 Características del Proyecto

- ✅ Next.js 15 con App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Responsive Design
- ✅ SEO Optimizado
- ✅ Botón de WhatsApp flotante
- ✅ Formulario de contacto
- ✅ Secciones completas:
  - Hero con estadísticas
  - Sobre Nosotros
  - Catálogo de Propiedades
  - Características
  - Proceso de Renta
  - Testimonios
  - Contacto

## 📧 Configurar Email

El formulario de contacto actualmente muestra una alerta. Para enviar emails reales:

1. Configura un servicio de email (EmailJS, SendGrid, etc.)
2. Edita la función `handleSubmit` en [src/components/sections/Contact.tsx](src/components/sections/Contact.tsx)

## 🎯 Próximos Pasos

1. ✅ Instalar dependencias
2. ⬜ Agregar tus propias imágenes
3. ⬜ Personalizar colores y textos
4. ⬜ Actualizar información de contacto
5. ⬜ Configurar envío de emails
6. ⬜ Agregar tus propiedades reales
7. ⬜ Configurar dominio personalizado
8. ⬜ Desplegar a producción

## 🆘 Ayuda

Si encuentras problemas:
1. Verifica que Node.js esté instalado (v18+)
2. Elimina `node_modules` y ejecuta `npm install` nuevamente
3. Verifica que el puerto 3004 esté disponible

---

**¡Listo para comenzar! 🚀**
