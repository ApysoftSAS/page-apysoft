# 🏢 Core de Negocio — Apysoft SAS

> **Propósito de este documento:** Fuente de verdad única sobre el negocio, la marca y el producto de Apysoft SAS. Todo agente (Full Stack, UX/UI, SEO & Marketing) debe leer este archivo ANTES de trabajar en cualquier tarea relacionada con la página web. Actualizar siempre que haya cambios relevantes en el negocio.

---

## 1. Identidad de la Empresa

| Campo | Valor |
|-------|-------|
| **Razón Social** | Apysoft SAS |
| **Tipo de empresa** | Empresa de desarrollo de software (B2B) |
| **País** | Colombia 🇨🇴 |
| **Idioma principal** | Español (Colombia) |
| **Sitio web** | *(completar con dominio oficial, ej: www.apysoft.com.co)* |
| **Repositorio** | `ApysoftSAS/page-apysoft` |

---

## 2. Misión, Visión y Propuesta de Valor

### 🎯 Misión
> Impulsar la productividad de nuestros clientes a través de soluciones tecnológicas innovadoras, aplicando las mejores prácticas y metodologías ágiles en el desarrollo de software.

### 🔭 Visión
> *(Definir y completar — ejemplo: Ser la empresa de software de referencia para las pymes colombianas en su camino de transformación digital para 2028.)*

### 💡 Propuesta de Valor Principal
> **"Potenciamos tu éxito"** — Somos un equipo tecnológico dedicado a alcanzar las metas comerciales de nuestros clientes. Desde desarrollo web hasta soluciones integradas, adaptadas a cada empresa. Actuamos como catalizador para lograr resultados. **¡Juntos, lograremos más!**

### 🏆 Diferenciadores Clave
- Especialización en **metodologías ágiles**
- Soluciones **completamente a medida** — no plantillas genéricas
- Enfoque en **productividad y resultados** del cliente
- Equipo **comprometido** que actúa como socio tecnológico, no solo proveedor
- Capacidad de **integración** con sistemas existentes del cliente

---

## 3. Portafolio de Servicios

| # | Servicio | Descripción | Imagen referencia |
|---|----------|-------------|-------------------|
| 1 | **Desarrollo de Sitios Web** | Creación de sitios web personalizados y responsivos | `DesarrolloSitiosWeb.jpg` |
| 2 | **Desarrollo de Software a la Medida** | Software personalizado para optimizar las operaciones del cliente | `DesarrolloSoftwareMedida.jpg` |
| 3 | **Consultoría Tecnológica** | Asesoría en estrategia tecnológica y seguridad informática | `ConsultoriaTecnologica.jpg` |
| 4 | **Transformación Tecnológica** | Liderazgo en procesos de transformación digital y capacitación de equipos | `TransformacionTecnologica.jpg` |
| 5 | **Servicios de Nube** | Implementación y gestión de infraestructura en AWS | `ServiciosNube.jpg` |
| 6 | **Integraciones** | Conexión de sistemas y automatización de flujos de trabajo | `Integraciones.jpg` |

### Servicio Estrella / Core
> El servicio principal y de mayor valor es el **Desarrollo de Software a la Medida**, ya que representa la propuesta diferenciadora más sólida frente a la competencia que ofrece soluciones genéricas o "enlatadas".

---

## 4. Cliente Ideal (Buyer Persona)

### Perfil Primario: "El Gerente que quiere digitalizar"
- **Cargo**: Gerente General, Gerente de Operaciones, CEO de pyme
- **Empresa**: Pyme colombiana (10–200 empleados)
- **Sector**: Abierto — manufactura, comercio, servicios, logística
- **Dolor principal**: Procesos manuales o con herramientas genéricas que no se adaptan a su negocio
- **Objetivo**: Optimizar operaciones, reducir errores humanos, crecer sin contratar más personal
- **Canal de llegada**: Referidos, búsqueda orgánica Google, redes sociales LinkedIn
- **Decisión de compra**: Necesita confianza, casos de éxito y claridad en el proceso y precio

### Perfil Secundario: "El técnico que busca partner"
- **Cargo**: CTO, Jefe de Sistemas, Director de IT
- **Objetivo**: Encontrar una empresa confiable para un proyecto específico (integración, módulo, migración)
- **Decisión de compra**: Basada en capacidades técnicas demostradas y metodología clara

---

## 5. Mercado y Competencia

| Item | Detalle |
|------|---------|
| **Mercado objetivo** | Colombia (enfoque principal) |
| **Segmento** | Pymes y medianas empresas |
| **Competencia directa** | Otras fábricas de software y freelancers en Colombia |
| **Ventaja competitiva** | Relación cercana, metodologías ágiles, soluciones realmente a medida |
| **Precio** | *(completar con rango de precios o modelo de cotización)* |

---

## 6. Canales de Contacto y Conversión

| Canal | Detalle | Estado |
|-------|---------|--------|
| **Formulario web** | Nombre, correo, teléfono, propuesta — enviado por microservicio de email | ✅ Activo |
| **WhatsApp** | Botón flotante en la página | *(verificar número actual)* |
| **Email** | *(completar con email comercial oficial)* | — |
| **Teléfono** | *(completar)* | — |
| **LinkedIn** | *(completar URL del perfil empresarial)* | — |

### Proceso de Contacto Actual
1. El usuario llena el formulario en `ContactUs.vue`
2. `processContact.js` valida y gestiona el estado del formulario
3. `sendInformationContact.js` envía al microservicio de email (`MicroservicioEmail`)
4. El equipo de Apysoft recibe la solicitud y responde

---

## 7. Tono y Voz de Marca

| Atributo | Descripción |
|----------|-------------|
| **Tono** | Profesional pero cercano — habla de "tú" al cliente |
| **Voz** | Empoderador, orientado a resultados, con confianza |
| **Idioma** | 100% español — sin anglicismos innecesarios |
| **Estilo** | Directo y claro — sin tecnicismos ante el cliente no técnico |
| **Evitar** | Lenguaje corporativo vacío, promesas sin sustento, tecnicismos sin explicar |

### Frases de Marca Aprobadas
- ✅ *"Potenciamos tu éxito"*
- ✅ *"¡Juntos, lograremos más!"*
- ✅ *"Soluciones tecnológicas innovadoras"*
- ✅ *"Impulsar la productividad de nuestros clientes"*

---

## 8. Estructura del Sitio Web

```
Inicio (Home)
  ├── Hero / Banner (CarouselHeader)
  ├── Nuestros Servicios (ServiceNew)
  ├── ¿Por qué Apysoft? (WhyApysoft)
  ├── ¿Quiénes Somos? (About)
  └── Contáctanos (ContactUs)
  
Blog
  └── (en desarrollo)
  
Footer (global)
  └── Links, redes, info legal
```

---

## 9. Stack Técnico del Producto Web

| Capa | Tecnología |
|------|-----------|
| Framework | Vue 3 (Composition API) |
| Build Tool | Vite |
| Routing | Vue Router |
| Estado | Pinia |
| Estilos | CSS vanilla modular |
| Microservicio Email | Spring Boot / Node (ver `MicroservicioEmail.zip`) |
| Hosting/Deploy | *(completar — Vercel, VPS, cPanel, etc.)* |
| CDN/Assets | *(completar si aplica)* |

---

## 10. Métricas y Objetivos de Negocio

> ⚠️ **Sección por completar con el equipo de Apysoft**

| Métrica | Objetivo | Estado actual |
|---------|----------|---------------|
| Leads mensuales por formulario | *(definir)* | *(medir)* |
| Conversión visitante → lead | *(definir, referencia: 2-5%)* | *(medir)* |
| Posición Google keywords objetivo | Top 5 en Colombia | *(medir)* |
| Tráfico orgánico mensual | *(definir)* | *(medir)* |
| Tiempo de respuesta a leads | < 24 horas | *(verificar)* |

---

## 11. Historial de Cambios

| Fecha | Cambio | Responsable |
|-------|--------|-------------|
| 2026-10-29 | Creación inicial del documento | Agente IA + Equipo Apysoft |
| *(fecha)* | *(descripción del cambio)* | *(nombre)* |

---

> 💡 **Nota para agentes:** Los campos marcados con *(completar)* requieren información real del equipo de Apysoft. Solicitar al usuario que los complete para maximizar la efectividad de las decisiones de desarrollo, diseño y marketing.
