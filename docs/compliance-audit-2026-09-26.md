# Diagnóstico de cumplimiento jurídico: sitio académico personal

**Fecha de corte:** 26 de septiembre de 2026

**Sitio evaluado:** página personal de un académico residente en Chile, publicada mediante GitHub Pages, sin ventas, pagos, cuentas de usuario ni formularios web; el contacto es mediante enlaces `mailto:` y Google Analytics 4 (GA4) sólo se activa después de una aceptación expresa.

> **Alcance y cautela.** Este documento es una evaluación práctica basada en fuentes oficiales vigentes a la fecha indicada. No sustituye asesoría jurídica ni determina de forma definitiva la ley aplicable a cada visitante. Las conclusiones dependen de que los hechos anteriores sigan siendo correctos y de la configuración técnica efectiva del sitio.

## Conclusión ejecutiva

| Materia                           | Conclusión para este sitio                                                                                                                                                                                                                              | Acción proporcionada                                                                                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Privacidad                        | Sí aplica: GA4 trata identificadores y datos de navegación, aunque el sitio no tenga formularios.                                                                                                                                                       | Mantener una política de privacidad accesible, fechada y específica.                                                                                     |
| Cookies/GA4                       | Chile no tiene, a la fecha de corte, una ley autónoma de cookies equivalente a la europea; sin embargo, el tratamiento mediante cookies queda sujeto a la Ley N.º 19.628 y el propio contrato de GA4 exige aviso y, cuando corresponda, consentimiento. | Mantener **opt-in real**: no cargar ni contactar Google antes de “Aceptar”; ofrecer “Rechazar” con igual claridad y permitir cambiar la decisión.        |
| Ley N.º 21.719                    | Todavía no rige el 26-09-2026; entra en vigor el **01-12-2026**.                                                                                                                                                                                        | Adaptar ahora la política al nuevo artículo 14 ter y revisar contratos/transferencias antes de esa fecha.                                                |
| Proveedores extranjeros           | GA4 y GitHub Pages implican tratamiento por proveedores establecidos o con infraestructura fuera de Chile.                                                                                                                                              | Identificar proveedores, datos, fines, retención, ubicación/transferencia y bases contractuales; no afirmar que los datos “nunca salen de Chile”.        |
| Términos comerciales y reembolsos | No son necesarios mientras no haya oferta pagada, contratación ni cobro.                                                                                                                                                                                | Omitir ambas páginas mientras el sitio siga siendo puramente informativo y no comercial.                                                                 |
| Formularios                       | No existen formularios web. Un enlace `mailto:` abre el cliente de correo del visitante.                                                                                                                                                                | No añadir una casilla de consentimiento inexistente. Informar qué ocurre si alguien escribe voluntariamente por correo y aplicar minimización/retención. |
| Datos “del negocio”               | No existe un comercio electrónico en los hechos auditados.                                                                                                                                                                                              | Identificar al responsable por nombre y facilitar un email de privacidad; no publicar RUT o domicilio particular sólo para aparentar ser una empresa.    |
| Imágenes                          | Fotografías e ilustraciones están protegidas salvo autoría propia, licencia, dominio público o excepción legal aplicable.                                                                                                                               | Conservar evidencia de autoría/licencia y atribuir cuando la licencia lo exija; reemplazar todo recurso de procedencia incierta.                         |

## 1. Régimen vigente hasta el 30 de noviembre de 2026: Ley N.º 19.628

La Ley N.º 19.628 vigente a esta fecha regula el tratamiento de datos personales en registros o bancos de datos, exige autorización legal o consentimiento expreso, obliga a informar el propósito del almacenamiento y una posible comunicación, limita el uso a la finalidad de recolección y reconoce derechos de acceso, modificación, eliminación o bloqueo. También impone al responsable el deber de cuidar los datos y responder por daños derivados de un tratamiento indebido. Véanse especialmente los artículos 1, 4, 9, 11 y 12 del [texto oficial vigente de la Ley N.º 19.628](https://www.bcn.cl/leychile/Navegar/imprimir?idNorma=141599&idParte=&idVersion=2023-05-09).

La implementación estándar de GA4 recoge número de usuarios, estadísticas de sesión, geolocalización aproximada e información del navegador/dispositivo; además guarda un identificador de cliente en la cookie `_ga` cuando el almacenamiento analítico está habilitado. Google informa que utiliza la dirección IP durante la recogida para derivar ubicación y luego la descarta antes de registrarla en sus servidores. Por ello, sería imprudente describir Analytics como una medición “sin datos personales” o “completamente anónima”; es más exacto hablar de datos de uso e identificadores seudónimos. Fuentes: [Google Analytics: recogida predeterminada](https://support.google.com/analytics/answer/11593727?hl=es) y [recogida regional/direcciones IP](https://support.google.com/analytics/answer/11598602?hl=es).

### Qué debe informar ahora la política

Como mínimo, la página de privacidad debería explicar en lenguaje directo:

1. quién es el responsable (nombre de la persona titular del sitio) y un email operativo para privacidad;
2. que el sitio se aloja en GitHub Pages y usa GA4 sólo tras aceptación;
3. las categorías de datos: identificador `_ga`, páginas visitadas, eventos de navegación, fecha/hora, referente, información técnica del dispositivo/navegador y ubicación aproximada;
4. la finalidad estricta: medir de forma agregada el uso del sitio y mejorar sus contenidos, sin publicidad personalizada ni perfil comercial;
5. la base utilizada: consentimiento para Analytics; el contacto por email es voluntario y se usa sólo para responder;
6. proveedores/destinatarios (Google y GitHub), posibilidad de tratamiento internacional y enlaces a sus documentos oficiales;
7. plazos de conservación configurados en GA4 y criterio de eliminación del correo recibido;
8. cómo retirar el consentimiento con facilidad y ejercer acceso, rectificación, supresión/bloqueo u oposición;
9. fecha y versión de la política.

Las [Condiciones del Servicio de Google Analytics, sección 7](https://marketingplatform.google.com/about/analytics/terms/es/) obligan además al cliente a publicar una política adecuada, avisar sobre cookies o tecnologías similares, explicar cómo Google recoge y trata datos, enlazar de forma visible a [“Cómo utiliza Google la información…”](https://policies.google.com/technologies/partner-sites?hl=es) y obtener consentimiento cuando la ley lo exija. Es una obligación contractual independiente de cuál sea la interpretación mínima de la ley chilena.

## 2. Cookies y consentimiento

### Resultado jurídico prudente

La Ley N.º 19.628 vigente no contiene un capítulo autónomo denominado “cookies” ni una excepción general que legitime Analytics por el mero hecho de que el sitio sea gratuito. Eso no deja las cookies fuera de la ley: si contienen o permiten asociar identificadores y actividad a una persona identificada o identificable, el tratamiento debe tener una base lícita y respetar finalidad, información y derechos. La [política oficial de cookies del Consejo para la Transparencia](https://www.consejotransparencia.cl/privacidad_cookies/politica-de-cookies/) —orientativa para este sitio privado, no una norma vinculante general— considera el consentimiento la principal base para instalar cookies, acceder a sus datos y tratarlos, y permite aceptar, rechazar y modificar la selección.

La opción de menor riesgo es el **modo de consentimiento básico**: bloquear completamente la etiqueta de Google hasta que el visitante acepte. Google confirma que, en ese modo, no se carga la etiqueta ni se transmite dato alguno a Google antes del consentimiento; en el modo avanzado sí se envían mediciones sin cookies aun cuando el almacenamiento esté denegado. Véase la comparación oficial de [Consent Mode básico y avanzado](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=es).

### Criterios técnicos que deberían verificarse

- Por defecto, `analytics_storage`, `ad_storage`, `ad_user_data` y `ad_personalization` deben estar denegados; si se usa bloqueo total, el script de Google ni siquiera debe descargarse antes de aceptar.
- “Aceptar analíticas” y “Rechazar” deben estar disponibles en la primera capa, con lenguaje y prominencia comparables; el silencio, seguir navegando o cerrar el aviso no deberían interpretarse como aceptación.
- La decisión debe poder modificarse posteriormente mediante un enlace permanente como “Preferencias de privacidad”. Google pide persistir la elección y actualizarla cuando cambie; véase su [guía oficial de implementación](https://developers.google.com/tag-platform/security/guides/consent?hl=es).
- La información pública debe identificar al proveedor, la finalidad y la duración de las cookies analíticas realmente utilizadas. Para un sitio académico pequeño puede integrarse en la política de privacidad sin mostrar identificadores técnicos que no ayuden al visitante.
- La revocación debe impedir futuras mediciones; cuando una persona retire una autorización ya concedida, conviene borrar las cookies propias de GA que pueda eliminar el sitio y documentar qué datos históricos sólo pueden suprimirse mediante las herramientas de Google.
- Debe comprobarse con las herramientas de red del navegador, en una sesión limpia, que no existan solicitudes a `googletagmanager.com`, `google-analytics.com` u otros dominios de medición antes de aceptar.

El clic afirmativo y específico en el banner es una implementación prudente del consentimiento electrónico. Sin embargo, la ley vigente dice que la autorización debe “constar por escrito”, y no existe todavía una autoridad chilena especializada que haya resuelto todos los detalles probatorios para banners privados. Si se necesitara certeza litigiosa, ese punto requiere asesoría local; no parece proporcionado crear un registro individualizado adicional de visitantes sólo para demostrar el consentimiento, porque aumentaría los datos tratados.

## 3. Reforma de la Ley N.º 21.719: preparación obligatoria para diciembre

La Ley N.º 21.719 fue publicada el 13 de diciembre de 2024 y su artículo primero transitorio fija la entrada en vigor el primer día del mes vigésimo cuarto posterior a la publicación: **1 de diciembre de 2026**. Hasta el 30 de noviembre rige el texto anterior; desde el 1 de diciembre rige el texto reformado. Fuentes oficiales: [Ley N.º 21.719](https://www.bcn.cl/leychile/navegar?idNorma=1209272) y [texto consolidado con vigencia diferida al 01-12-2026](https://www.bcn.cl/leychile/Navegar/imprimir?idNorma=141599&idParte=&idVersion=2026-12-01).

Desde esa fecha serán particularmente relevantes para este sitio:

- **Principios (art. 3):** licitud y lealtad, finalidad, proporcionalidad/minimización, calidad, responsabilidad, seguridad, transparencia y confidencialidad. Los datos deben limitarse a lo estrictamente necesario y conservarse sólo mientras lo exija la finalidad.
- **Consentimiento (art. 12):** libre, informado, específico, previo e inequívoco, expresado por declaración o acto afirmativo; retirarlo debe ser tan expedito, gratuito y disponible como otorgarlo.
- **Derechos (arts. 4 a 10):** acceso, rectificación, supresión, oposición, portabilidad y bloqueo, con mecanismos sencillos y eficaces.
- **Transparencia (art. 14 ter):** la política debe permanecer accesible e incluir fecha/versión; responsable y eventual encargado de prevención; un canal de contacto; categorías de datos, personas afectadas, destinatarios, finalidades y base jurídica; medidas de seguridad descritas a nivel de política; derechos y reclamación; transferencias internacionales y garantías; conservación, fuente y retirada del consentimiento.
- **Seguridad (arts. 14 quinquies y 14 sexies):** medidas técnicas/organizativas adecuadas al riesgo, documentación de incidentes y, según el caso, notificación de vulneraciones. El artículo 14 septies exige graduar los estándares según si el responsable es persona natural o jurídica, su tamaño, actividad, volumen, naturaleza y fines; un sitio pequeño no queda exento, pero su programa debe ser proporcional.
- **Encargados (art. 15 bis):** si un proveedor trata datos por cuenta del responsable, la relación debe estar regida por contrato con objeto, duración, fines, datos, categorías de titulares, derechos y obligaciones.

La recomendación es que la política publicada antes del 1 de diciembre ya contenga esos elementos. Para una persona natural, el canal de contacto puede ser un correo de privacidad; no se desprende de estas reglas que deba divulgar públicamente su RUT ni su domicilio residencial cuando no vende y dispone de un medio electrónico idóneo.

## 4. Proveedores extranjeros y transferencias internacionales

GitHub declara que recoge automáticamente datos de uso del servicio como dirección IP, información del dispositivo y sesión, fecha/hora de solicitudes, referente, páginas vistas y enlaces pulsados. Su declaración identifica a GitHub, Inc. en Estados Unidos y GitHub B.V. en Países Bajos. Véase la [Declaración General de Privacidad de GitHub](https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement). Google también informa que GA4 trata cookies propias, datos de dispositivo/navegador, actividad del sitio y la dirección IP durante la recogida, aunque no la registra o almacena como tal. Véase [Google Analytics: cómo protege los datos](https://support.google.com/analytics/answer/6004245?hl=es).

Por tanto, la política debe distinguir dos capas:

- **alojamiento/entrega:** GitHub Pages puede recibir datos técnicos necesarios para servir y proteger el sitio, con independencia de que el visitante acepte Analytics;
- **analítica opcional:** Google sólo debe recibir datos del sitio después de la aceptación si se mantiene el modo básico descrito.

Desde el 1 de diciembre de 2026, los artículos 27 a 29 regularán la transferencia internacional: país con nivel adecuado, garantías contractuales/corporativas u otras hipótesis legales, autorización excepcional y deber del responsable de acreditar la conformidad. Además, el artículo 14 ter exige informar el tercer país u organización, su nivel de protección y las garantías utilizadas. La Subsecretaría de Economía aprobó anticipadamente [cláusulas contractuales modelo para transferencias internacionales](https://www.bcn.cl/leychile/navegar?idNorma=1219636), vigentes hasta que la nueva Agencia ejerza la atribución correspondiente.

No es posible concluir sólo mirando el código si los contratos estándar de Google y GitHub satisfacen cada mecanismo chileno. Antes del 01-12-2026 debe hacerse un registro simple de proveedores que contenga: entidad contratante, rol jurídico (responsable independiente o encargado), categorías de datos, países/infraestructura, subencargados, retención, mecanismo de transferencia y enlace/fecha del contrato de tratamiento. Las condiciones de GA incorporan los [Términos del Tratamiento de Datos de Google Ads](https://business.safety.google/adsprocessorterms/), pero se debe verificar en la cuenta qué entidad y versión fueron aceptadas y si hacen falta las cláusulas modelo chilenas.

## 5. SERNAC, términos y reembolsos

La Ley N.º 19.496 regula relaciones entre proveedores y consumidores y define al consumidor por un **acto jurídico oneroso** mediante el cual adquiere o usa bienes o servicios como destinatario final. Véase el [artículo 1 de la Ley N.º 19.496](https://www.bcn.cl/leychile/navegar?idNorma=61438&idParte=9210455). El Reglamento de Comercio Electrónico se aplica a vendedores que ofrecen bienes o servicios en plataformas electrónicas **a cambio de un precio o tarifa**; sólo en ese contexto exige identificación comercial, términos contractuales, precio total, cambios/devoluciones y demás información. Véanse los artículos 2, 7, 10 y 16 del [Decreto N.º 6 de 2021](https://www.bcn.cl/leychile/navegar?idNorma=1165504).

Con los hechos auditados —currículum, publicaciones, investigación y contacto, sin oferta pagada ni contratación— no se configura esa plataforma de comercio electrónico. En consecuencia:

- no se necesita una política comercial de reembolsos, porque el sitio no recibe pagos ni hay suma que devolver;
- no se necesitan términos y condiciones de venta;
- no corresponde publicar precio, RUT, domicilio legal, despacho, garantía o retracto como si existiera una tienda;
- una declaración ficticia de “no hacemos reembolsos” sería innecesaria y podría confundir al visitante.

Puede publicarse una página corta de **Condiciones de uso** por razones editoriales, no comerciales: propósito informativo/académico, ausencia de asesoría profesional, responsabilidad por enlaces externos, propiedad intelectual, cambios del contenido y contacto. No debería exigir que la simple navegación equivalga a aceptar un contrato; el propio Reglamento de Comercio Electrónico dispone que la mera visita no impone obligaciones sin aceptación inequívoca.

Si en el futuro se cobran cursos, consultorías, libros, suscripciones, donaciones con contraprestación u otros servicios, esta conclusión cambia y habrá que revisar antes del lanzamiento la Ley N.º 19.496, retracto, garantía, información del proveedor, precios, entrega y devoluciones.

## 6. Contacto por correo y eventuales formularios futuros

Un enlace `mailto:` no envía datos al servidor del sitio ni constituye por sí mismo un formulario: sólo solicita al dispositivo del visitante abrir su aplicación de correo. Cuando la persona efectivamente envía el mensaje, el titular del sitio y los proveedores de correo sí tratan su dirección, contenido y metadatos.

La política debe decir que esos datos se usan para leer y responder la consulta, que no se incorporan por defecto a listas de marketing y que se eliminan cuando dejan de ser necesarios, salvo conservación legítima (por ejemplo, seguimiento de una colaboración o defensa de derechos). No hace falta interponer una casilla “Acepto” antes de un `mailto:`; basta un aviso claro junto al enlace o en la política. Pedir un consentimiento adicional que no se necesita añade fricción y no reemplaza las obligaciones de finalidad, seguridad y derechos.

Si se agrega un formulario en el futuro, antes de publicarlo se debe:

1. identificar campos obligatorios y opcionales y pedir sólo lo imprescindible;
2. informar responsable, finalidad, base jurídica, destinatarios, conservación y derechos en el punto de recogida;
3. obtener consentimiento separado y no premarcado sólo para fines opcionales (por ejemplo, boletín), sin mezclarlo con el envío de una consulta;
4. comprobar proveedor, ubicación, contrato, spam/seguridad y transferencias;
5. no solicitar datos sensibles ni de menores sin un análisis específico.

## 7. Derechos de autor de fotografías e imágenes

La Ley N.º 17.336 protege expresamente las fotografías y concede al titular el derecho exclusivo de publicarlas, reproducirlas, adaptarlas y comunicarlas al público; nadie puede usar públicamente una obra protegida sin autorización expresa, salvo una excepción legal. Véanse los artículos 1, 3.7, 18, 19 y 20 de la [Ley N.º 17.336](https://www.bcn.cl/leychile/Navegar?idLey=17336). El Ministerio de las Culturas recalca que encontrar una fotografía en Internet no la vuelve libre: se necesita autoría propia, autorización o licencia previa y deben cumplirse sus condiciones. Véase su [Guía de buenas prácticas en derechos de autor](https://www.cultura.gob.cl/derechodeautor/wp-content/uploads/sites/54/2021/10/guia_buenas_practicas.pdf).

Para cada imagen publicada debe existir una ficha o evidencia verificable con: archivo, autor, fuente original, fecha de obtención, licencia/permiso, atribución exigida y eventuales restricciones de modificación. Son aceptables, según el caso: obra propia; licencia escrita; licencia Creative Commons compatible y correctamente atribuida; banco de imágenes con licencia conservada; dominio público comprobado; o una excepción legal verdaderamente aplicable.

La excepción de cita del artículo 71 B sólo cubre fragmentos breves incorporados como cita, crítica, ilustración, enseñanza o investigación y exige mencionar fuente, título y autor. No debe usarse como autorización genérica para una imagen decorativa, un retrato o una fotografía completa. Las excepciones específicas para obras arquitectónicas y obras situadas permanentemente en espacios públicos tampoco liberan derechos sobre una fotografía ajena de esas obras: es más seguro utilizar una fotografía propia o licenciada. [Texto oficial de las excepciones, arts. 71 B y 71 F](https://www.bcn.cl/leychile/Navegar/imprimir?idNorma=28933&idParte=8917017).

El crédito por sí solo no sustituye una licencia. Si no se puede reconstruir la procedencia y autorización de un recurso, la medida correcta es reemplazarlo, no añadir únicamente “fuente: Internet”. También conviene obtener permiso de las personas reconocibles en retratos no puramente propios, por el riesgo separado ligado a vida privada e imagen, que requiere análisis contextual.

## 8. Riesgos residuales y límites territoriales

1. **Diferencia entre política y funcionamiento.** El mayor riesgo no es que falte texto, sino que la política diga “no se envían datos antes de aceptar” mientras la etiqueta, fuentes, videos, mapas o scripts de terceros se cargan previamente. Se requiere prueba técnica periódica, especialmente después de cambiar la plantilla.
2. **Configuración de GA4.** Desactivar Google Signals, funciones publicitarias, User-ID, granularidad innecesaria de ubicación/dispositivo y cualquier vinculación con Google Ads reduce datos y hace coherente la finalidad académica. Google permite revisar retención y eliminación; véanse sus [controles de retención](https://support.google.com/analytics/answer/7667196?hl=es) y [controles de privacidad](https://support.google.com/analytics/answer/6004245?hl=es).
3. **Contenido incrustado.** Un enlace normal a ORCID, Google Scholar, LinkedIn u otro sitio no transmite lo mismo que un iframe, video, mapa o widget cargado automáticamente. Cada recurso incrustado nuevo debe revisarse como integración de terceros y, si rastrea, quedar bloqueado hasta la elección pertinente.
4. **Correos y repositorio.** Evitar publicar direcciones personales innecesarias, credenciales, claves de Analytics con capacidad administrativa, documentos con metadatos sensibles o bases de datos de investigación en el repositorio público. El ID público de medición de GA no es una contraseña, pero las credenciales de cuenta/API sí deben mantenerse fuera del repositorio.
5. **Visitantes extranjeros.** La mera accesibilidad de un sitio desde la Unión Europea no prueba por sí sola que se ofrezcan servicios dirigidos allí, pero el artículo 3.2 del RGPD puede alcanzar a un responsable no establecido en la UE cuando el tratamiento se relaciona con ofrecer bienes/servicios a personas en la UE o monitorizar allí su comportamiento. La [guía oficial del Comité Europeo de Protección de Datos](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-32018-territorial-scope-gdpr-article-3-version_es) confirma que la mera accesibilidad no basta para la primera hipótesis; el uso de analítica sobre visitantes de la UE deja, no obstante, una cuestión contextual sobre “monitorización”. Si el sitio empieza a dirigirse deliberadamente a públicos europeos o realiza seguimiento más rico, hace falta revisión específica del RGPD y de reglas nacionales de cookies.
6. **Cambio de finalidad.** Cualquier futura newsletter, formulario, venta, publicidad, remarketing, video incrustado, agenda de reservas o descarga con registro modifica este diagnóstico. Debe revisarse antes de activarse, no después.

## 9. Lista de decisiones recomendadas

### Implementar o mantener ahora

- Política de privacidad con los elementos de las secciones 1, 3 y 4, preparada para el 01-12-2026.
- Una sección breve y exacta sobre cookies y Analytics dentro de la política de privacidad; no hace falta una página separada.
- Banner opt-in de modo básico, botones equivalentes “Aceptar analíticas”/“Rechazar” y enlace permanente para cambiar la elección.
- Omitir condiciones de uso mientras el sitio siga siendo puramente informativo y no comercial.
- Inventario de GitHub, Google Analytics, proveedor de correo y cualquier CDN/fuente/script externo.
- Registro de procedencia/licencias de todas las imágenes.
- Revisión semestral y cada vez que cambien integraciones, finalidades o términos de proveedores.

### No implementar bajo los hechos actuales

- Política comercial de reembolsos que sugiera ventas, pagos o condiciones inexistentes.
- Términos de compra, despacho, garantía o retracto.
- Casillas de consentimiento para formularios inexistentes o para abrir un enlace `mailto:`.
- Datos empresariales ficticios, RUT o domicilio residencial publicados sin necesidad.
- Consentimiento “todo o nada” que bloquee el contenido académico si se rechaza Analytics.

## Incertidumbres que deben quedar abiertas

- La clasificación exacta de cada flujo Google/GitHub como encargo, cesión o transferencia internacional depende de contratos, configuración y arquitectura no visibles sólo en el HTML.
- La suficiencia probatoria del consentimiento electrónico bajo el texto antiguo de la Ley N.º 19.628 no está completamente resuelta para este caso; el estándar expreso de la Ley N.º 21.719 será más claro desde diciembre.
- La nueva Agencia podrá dictar instrucciones que concreten transparencia, seguridad, cookies, transferencias y contratos después de entrar en funciones; este diagnóstico deberá actualizarse cuando eso ocurra.
- La aplicación de leyes extranjeras depende de ubicación de visitantes, intención de dirigirse a ellos y naturaleza del seguimiento; no puede determinarse sólo por el dominio `.github.io`.
