# Blog de Finanzas

Un blog profesional sobre finanzas, inversión y análisis de mercado, construido con Jekyll y GitHub Pages.

## Características

✅ **Diseño Responsivo**: Se adapta perfectamente a todos los dispositivos
✅ **Optimizado para SEO**: Meta tags, schema.org, sitemap y robots.txt
✅ **Rápido**: Sitio estático con excelente performance
✅ **Fácil de Actualizar**: Solo escribe en Markdown
✅ **RSS Feed**: Los lectores pueden suscribirse fácilmente
✅ **Dark Mode**: Soporte automático para tema oscuro
✅ **Análitica**: Listo para Google Analytics

## Estructura del Proyecto

```
├── _posts/              # Artículos del blog
├── _pages/              # Páginas estáticas (About, Contact, etc)
├── _layouts/            # Templates de Jekyll
├── _includes/           # Componentes reutilizables
├── assets/
│   ├── css/            # Estilos
│   ├── js/             # JavaScript
│   └── images/         # Imágenes
├── .github/workflows/   # GitHub Actions para CI/CD
├── _config.yml         # Configuración de Jekyll
├── Gemfile             # Dependencias Ruby
└── robots.txt          # SEO robots
```

## Instalación

### Requisitos
- Ruby 3.0+
- Bundler

### Setup

1. **Clonar el repositorio**
```bash
git clone https://github.com/renemoya/blog-finanzas.git
cd blog-finanzas
```

2. **Instalar dependencias**
```bash
bundle install
```

3. **Ejecutar localmente**
```bash
bundle exec jekyll serve
```

El sitio estará disponible en `http://localhost:4000`

## Cómo Escribir Artículos

### Crear un nuevo artículo

1. Crea un archivo en `_posts/` con el nombre: `YYYY-MM-DD-titulo-del-articulo.md`

2. Agrega el frontmatter:
```yaml
---
layout: post
title: "Título del Artículo"
date: 2024-02-23
author: René Moya
categories: [Educación, Finanzas]
tags: [finanzas, inversión, ahorro]
description: "Descripción breve para SEO (160 caracteres)"
excerpt: "Extracto mostrado en listados (200 caracteres)"
image: /assets/images/posts/imagen.jpg
---
```

3. Escribe el contenido en Markdown

### Estructura recomendada del artículo
- H1: Título principal
- Párrafo introductorio
- Secciones con H2/H3
- Listas y tablas cuando sea relevante
- Conclusión

## Configuración

Edita `_config.yml` para personalizar:
- Título y descripción del blog
- Tu nombre y redes sociales
- URL del sitio
- Configuración de análitica

## Personalización

### Cambiar colores
Abre `assets/css/style.css` y modifica las CSS variables en la sección `:root`

### Agregar nuevas páginas
1. Crea archivo en `_pages/nombre.md`
2. Agrega al frontmatter: `permalink: /nombre/`
3. Se agregará automáticamente a la navegación

### Cambiar tema
Por defecto usa Minima theme. Para personalizar completamente, crea `_layouts/custom.html`

## Publicación en GitHub Pages

### Pasos iniciales (una sola vez)

1. **En GitHub**: Ve a Settings → Pages
2. **Build and deployment**:
   - Source: Deploy from a branch
   - Branch: master (o main)
   - Folder: / (root)
3. **Habilitar GitHub Actions**: Ve a Actions y autoriza workflows

### Publicación automática
Una vez configurado, cada push a `master`/`main` desplegará automáticamente el sitio.

## Dominio Personalizado (Opcional)

1. **En GitHub Pages Settings**:
   - Ve a Custom domain
   - Ingresa: `tudominio.com`

2. **En tu registrador DNS**:
   - Crea registro CNAME: `tudominio.com` → `renemoya.github.io`
   - O registros A señalando a IPs de GitHub

3. **Espera confirmar en GitHub** (puede tomar minutos)

## SEO & Analytics

### Google Search Console
1. Ve a Google Search Console
2. Agrega propiedad: `https://renemoya.github.io`
3. Carga sitemap.xml (se genera automáticamente en `/sitemap.xml`)
4. Verifica con archivo HTML

### Google Analytics
1. Crea propiedad en Google Analytics 4
2. Obtén tu Measurement ID
3. Edita `_includes/head.html` y agrega GA script

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Optimizaciones SEO

✅ Meta descriptions (160 caracteres)
✅ Open Graph tags
✅ Twitter Cards
✅ Canonical URLs
✅ Schema.org BlogPosting
✅ Sitemap automático
✅ RSS Feed
✅ robots.txt
✅ Headings semánticos
✅ URLs amigables

## Performance

El sitio alcanza Lighthouse scores de 90+:
- Lighthouse Performance
- Lighthouse SEO
- Lighthouse Accessibility

## Troubleshooting

### El sitio no se ve bien localmente
```bash
bundle install --redownload
bundle exec jekyll clean
bundle exec jekyll serve
```

### Cambios no se reflejan
- Jekyll regenera automáticamente, pero a veces hay que pararlo y reiniciar
- En macOS/Linux: `Ctrl+C` para detener y luego reiniciar

### Errores de gema
```bash
bundle update
bundle exec jekyll serve
```

## Mantenimiento

- **Diariamente**: Responder comentarios
- **Semanalmente**: Revisar analytics
- **Mensualmente**: Crear nuevo contenido
- **Trimestralmente**: Revisar y actualizar artículos antiguos
- **Anualmente**: Auditoría completa de SEO

## Contribuciones

¿Encontraste un error? ¿Sugerencias?
- Abre un Issue
- Manda un Pull Request
- Contáctame directamente

## Licencia

Contenido: CC BY 4.0 (atribución requerida)
Código: MIT

## Autor

René Moya
- Blog: [https://renemoya.github.io](https://renemoya.github.io)
- Twitter: [@renemoya](https://twitter.com)
- LinkedIn: [René Moya](https://linkedin.com)

---

**Última actualización**: Febrero 2024

Para más información sobre Jekyll, visita [jekyllrb.com](https://jekyllrb.com)
