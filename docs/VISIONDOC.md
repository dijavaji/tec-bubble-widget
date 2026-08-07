Sistema Smart de Chatbot

Documento de Visión

Preparado por Diego Vásquez J.

Para Reto 

Versión 1.0

Fecha: 16-05-2023


Historial de Revisiones.
Fecha	Version	Autor	Descripción
12-12-2018	1.0	Diego Vásquez Jibaja	Versión inicial para el prototipo.
16-05-2023	1.0	Diego Vásquez Jibaja	Actualización de documento reto Praxthon
01-02-2024	1.0	Diego Vásquez Jibaja	Actualización de documento Praxis
			


Fecha	Versión	Aprobado por	Información de aprobación.
19-02-2018	1.0	Ing. Jefferson Beltran	
16-05-2023	1.0	Daniela Díaz	
07-03-2024	1.0	Horacio Licona	
			
Historial de Aprobaciones.




Contenido.

1.	Introducción	3
1.1	 Propósito.	3
1.2	Postulado del problema.	3
2.	Oportunidades de negocio	4
3.	Solución Propuesta	4
3.1	Requerimientos funcionales.	5
3.2	Requerimientos no funcionales.	5
4.	RestriccioneS	5
5.	Riesgos.	5

1.	Introducción.
1.1	 Propósito.

Este documento define la visión general y el alcance del Sistema Smart de chatbot para empresa.
En la actualidad la mayoría de las organizaciones y marcas están utilizando chatbot en el ámbito del marketing digital para poder alcanzar los objetivos que se han planteado para su negocio,  con el fin de promover sus productos a través de redes sociales como Facebook, Twitter, Instagram, Whatsapp entre otras, las cuales se encuentran en su mayor apogeo entre los usuarios de internet, y facilitan que los usuarios encuentren la información que necesitan respondiendo a sus preguntas y solicitudes, a través de texto, audio o ambas, sin necesidad de intervención humana, a un nivel mucho más personalizado y dinámico.
Sin importar tu giro o etapa del ciclo de vida de tu empresa un chatbot representa una ventaja competitiva. Los vendedores utilizan los chatbots de IA para personalizar las experiencias de los clientes, los equipos de TI los utilizan para habilitar el autoservicio y los centros de contacto del cliente confían en los chatbots para optimizar las comunicaciones entrantes y dirigir los clientes a los recursos.
Existe la necesidad de desarrollar un sistema informático basado en la inteligencia artificial para generar respuestas automáticas a las preguntas más frecuentes realizadas por los clientes, el cual permite simular la conversación con una persona y obtener así una manera de gestionar la atención al cliente, y una aplicación móvil para smartphones o tablet que incluya funcionalidades que potencien sus usos y ventajas.
Al ser un sistema smart de chatbot basado en la utilización de la Internet para su comunicación y además al usar el Navegador como interfaz de usuario permite a las organizaciones crear nuevos puntos de acceso a la información implícita, previamente desconocida y potencialmente útil donde ella estime conveniente, solo cuidando que ese punto posea conexión a Internet mediante algún medio ya sea por medios guiados o no guiados. 
Un sistema vía Internet no tiene nada de especial salvo por las interfaces que se asemejan a las de un sistema con algoritmos complejos para proporcionar respuestas mas detalladas, permitiendo dinamismo en la interacción entre  los modelos de inteligencia artificial entrenados y desarrollado en R y  micro-servicio de mensajería Java compilado con framework SpringBoot, cada uno integrado en un contenedor Docker. Pero si a este sistema agregamos toda la operación de registro, administración  y mantención del mismo ya estamos hablando de una plataforma completa dedicada a la gestión y administración de minería de textos.


1.2	Postulado del problema.

Las compañías, industrias o segmentos de negocios necesitan proporcionar a los clientes un canal de conversación sensible y receptivo que ayude a la empresa a satisfacer las expectativas de interacciones inmediatas y disponibles, al mismo tiempo de reducir los costos. Los clientes quieren un servicio rápido y sin complicaciones, quieren respuestas directas a sus preguntas, sin esperas, herramientas complicadas o formularios que rellenar. Los chatbots proporcionan este canal de soporte directo.




2.	Oportunidades de negocio.

El chatbot desarrollado durante el reto representa un hito significativo en la integración de tecnologías avanzadas para ofrecer una experiencia de usuario excepcionalmente natural y segura. Utilizando una combinación de redes neuronales para el entrenamiento, modelos preentrenados y medidas de ciberseguridad, este chatbot no solo proporciona respuestas contextualmente relevantes, sino que también garantiza la protección de los datos sensibles de la empresa.
Nos complace compartir el progreso en el desarrollo del chatbot, una solución innovadora diseñada para ofrecer una experiencia de usuario excepcional. Con el fin de desarrollar la mejor solución, establecer el plan de trabajo, implementar dicha solución en los servidores, realizar el plan de pruebas y puesta en marcha así como entregar soporte al sistema, y continuar su desarrollo en el tiempo hemos puesto el enfoque en la arquitectura modular y escalable, implementando con éxito tres componentes clave que impulsan el funcionamiento del chatbot:
1. Inteligencia Artificial (IA):
La inteligencia artificial forma el núcleo del chatbot, permitiendo su capacidad para comprender y generar respuestas contextualmente relevantes. Para lograr esto, hemos empleado redes neuronales en el entrenamiento del chatbot, junto con modelos preentrenados basados en la arquitectura de transformers. Estos modelos preentrenados proporcionan una base sólida de conocimientos previos sobre una amplia gama de temas, permitiendo que el chatbot responda de manera precisa y natural durante las conversaciones.
Hemos utilizado librerías y frameworks líderes en la industria, como TensorFlow y PyTorch, para la implementación de redes neuronales, así como Hugging Face Transformers para la integración de modelos preentrenados. Estas herramientas han demostrado ser altamente efectivas en el entrenamiento y la inferencia de los modelos de lenguaje natural utilizados por nuestro chatbot.
2. Backend Java:
El backend del chatbot se ha desarrollado en Java, aprovechando las características robustas y flexibles de este lenguaje de programación. Java se utiliza para la implementación de la lógica de negocio del chatbot y la gestión de la comunicación con otros componentes del sistema, como la base de datos SQL. Esta elección ha proporcionado una estructura sólida y escalable, capaz de manejar eficientemente las operaciones del chatbot y adaptarse a las necesidades cambiantes del entorno.
Para la implementación del backend Java, hemos utilizado frameworks reconocidos como Spring Framework para la gestión de la lógica de negocio y la integración con otros sistemas, y Hibernate para el mapeo objeto-relacional, lo que nos ha permitido desarrollar una solución altamente flexible y fácil de mantener.
3. Base de Datos SQL:
La base de datos SQL se ha utilizado para almacenar y gestionar los datos necesarios para el funcionamiento del chatbot, como el historial de conversaciones, la información del usuario y otros datos relevantes. Esta base de datos proporciona un almacenamiento estructurado y confiable, facilitando el acceso rápido y seguro a la información requerida por el chatbot durante las interacciones con los usuarios.
En la gestión de la base de datos SQL, hemos empleado tecnologías y herramientas comprobadas como Hibernate para el mapeo objeto-relacional y JDBC para la conexión y ejecución de consultas SQL, lo que nos ha permitido garantizar la integridad y la disponibilidad de los datos almacenados.




3.	Solución Propuesta.

En esta sección se describen los requerimientos tanto funcionales como no funcionales del sistema.

3.1	Requerimientos funcionales.

Tras estudiar las necesidades de las pymes, organizaciones o segmentos de negocios hemos concretado que la plataforma inteligente para proporcionar una interfaz conversacional (también conocido como asistente virtual) se divide en:

Interacción de los internautas que entran a la página de la compañía en búsqueda de información de quienes son, que hacen y bolsa de trabajo.
Responder directamente ante patrón encontrado.
El chatbot debe incluir inteligencia artificial, es decir el entrenamiento neuronal para mejorar las respuestas.
Las preguntas complicadas que requiera de una respuesta humana el sistema debe contar con la capacidad de transferencia a un humano. Así, la  transición del  chatbot a un humano se hará sin problemas.
La plataforma contara con funciones inteligentes, aprendizaje automático e integración analítica.
La plataforma debe poder realizar un entrenamiento continuo y periódico. 
Todos los mensajes recibidos del cliente frontend deberán pasar por un modelo de NLP.
Cada cierto periodo de tiempo vamos a tener que revisar la clasificación de las frases. Y comprobar que no hemos cometido fallos en la definición de la conversación o que nuestro chatbot confunda frases.
Es necesario monitorizar tanto el funcionamiento del sistema de procesamiento del lenguaje natural como la conversación.
El chatbot responderá amigablemente al usuario.
Integración con aplicaciones de terceros para conectar a sus clientes a través de redes sociales.
El chatbot realizara preguntas, captura los datos, y notificara inmediatamente ademas los guarda para continuar el proceso de retención de clientes.
Diseño de interfaz de usuario (frontend) mensajería web realtime.
Se puede integrar fácilmente con sitio web empresarial.
Se detectará una despedida por parte del usuario, para cerrar la ventana del chatbot pasados unos segundos.
Creación y Registro de chatbots y asignación de usuario.
Cancelación de chatbots y usuarios asignados.
Sincronizar con sitios web y fuentes de datos para obtener respuestas siempre actualizadas
Visualización de métricas clave de los algoritmos de machine learning.
- se integra en minutos como un widget de chat publico en cualquier página web o CMS

3.2	Requerimientos no funcionales.

En nuestro proyecto es importante cumplir con ciertos requerimientos no funcionales que son fundamentales en el desarrollo de cualquier aplicativo y que el cliente valorará. Los requerimientos no funcionales definidos en nuestro proyecto son los siguientes:

Rendimiento (en tiempo y espacio)
El sistema deberá tener la capacidad para procesar altos volúmenes de datos con un mínimo de tiempo posible, gran precisión y consistencia y bajo coste ante las solicitudes de información por parte de la aplicación móvil y en el procesamiento de la información. La eficiencia de la aplicación estará determinada en gran medida por el aprovechamiento de los recursos que se disponen en el modelo de n capas, y la velocidad de las consultas a la base de datos.

Disponibilidad
El sistema debe soportar una operación en alta disponibilidad, de acuerdo con la  arquitectura planteada, no debe presentar ningún punto  de fallo, es decir, debe estar provisto de mecanismos o componentes que aseguren la continuidad del servicio disponible 24(horas)/7(días) siempre   que   los   servidores   donde se alberga estén funcionando  correctamente.

Portabilidad
El proyecto de software será “independiente” de la plataforma y puede ejecutarse en plataformas diversas sin necesidad de ser compilado específicamente para cada una de ellas. Esta característica es importante para el desarrollo de reducción costos. A mayor portabilidad menor es la dependencia del software con respecto a la plataforma.

Mantenimiento
Se hace referencia a la facilidad con la que el nuevo sistema o componente de software  puede ser modificado para corregir fallos, mejorar su funcionamiento u otros atributos o adaptarse a cambios en el entorno. El mantenimiento del  sitio  queda  en  manos  del  administrador del  sistema,  para  lo  cual  se capacitará   a   esta   persona.   Si   el mantenimiento va más allá de las funcionalidades del administrador la  empresa  deberá  contactar  al  equipo  de  desarrollo.

Seguridad
Para garantizar la seguridad de los datos y prevenir posibles ataques, se implementan diversas medidas de ciberseguridad:
Pruebas de Penetración (Pentesting): Se realizan pruebas exhaustivas para identificar y remediar posibles vulnerabilidades en el sistema.
Llaves Públicas y Privadas: Se utilizan para cifrar y proteger la comunicación entre los diferentes componentes del sistema, garantizando la confidencialidad de los datos.
Web Token: Se emplea para generar tokens de acceso seguros, que se utilizan para autenticar y autorizar las solicitudes al API Rest.
Autenticación de usuarios: El sistema garantiza la seguridad de los datos asignando a los usuarios de   la   aplicación   un nombre de usuario   y   contraseña. El acceso a la información también puede controlarse a través de la función o  rol del usuario que requiere dicho acceso de acuerdo con los usuarios identificados, los cuales se pueden agrupar en: 
Rol administrador (Administrador del Sistema) 
Rol usuario


Estandares
El sistema debe cumplir con la sensación de que están hablando con una persona y no solo se les proporcionan respuestas robotizadas o la información que se les da no es la que el cliente requieren.
 4.	Restricciones.
El software utilizado para el desarrollo del proyecto debe ser open source con licencia Apache 2.0.
El chatbot debe incluir inteligencia artificial, es decir el entrenamiento neuronal utilizando machine learning junto con modelos preentrenados basados en la arquitectura de transformers para mejorar las respuestas, IA.
Las herramientas de aprendizaje automático requeridas para generar los modelos es lenguaje Python, TensorFlow, Keras, Hugging Face Transformers para la integración de modelos preentrenados e IA.
La tecnología que se requiere para el Backend de este proyecto es Spring Boot 2.7.11 para la gestión de la lógica de negocio y la integración con otros sistemas. 
El sistema Backend sera desarrollado en Java 11 o superior.
Se utilizara Hibernate como implementacion JPA para el mapeo objeto-relacional.
El sistema debe utilizar como motor de base de datos Mysql 8.0.
El acceso al sistema deberá ser vía Web y funcionar en cualquier navegador de Internet.
El Sistema móvil será para smartphones o tablet con simcard.
La Accesibilidad web limitada, puede ser un problema para personas con alguna discapacidad (física, intelectual o técnica).
El sistema deberá estar funcionando a partir de julio del 2024.
 5.	Riesgos.
Posibles frustraciones de los clientes, al trabajar con una base de datos limitada, los chatbots no pueden improvisar.
Limitación en las respuestas, un chatbot no es un humano por lo tanto no es 100% seguro que de una respuesta satisfactoria.
Existe el riesgo que en ocasiones, lo usuarios hacen preguntas muy específicas que requieren que sea una persona la que dé respuesta.
Existe el riesgo de que la compañía cuente con un reducido centro de datos o estén restringidos esto se traduce en un obstáculo al no disponer suficientes cantidades de datos para entrenar los algoritmos de inteligencia artificial.
El Sistema puede no funcionar en algún navegador de Internet especial. Es prácticamente imposible probar un sistema en todos los navegadores existentes.
Existe el riesgo que la aplicación (la información) no sea clara para todas las personas, por el concepto de accesibilidad.
Existe el riesgo de accesos no autorizados por personas ajenas al Sistema.


**Lean Canvas convertido en un Pitch Deck profesional**

---

## **Slide 1 – Portada**

**Technoloqie**
*Transformamos la atención al cliente con inteligencia artificial*

* Sistema Smart de Chatbot
* Nombre del fundador
* Contacto

---

## **Slide 2 – Problema**

**La atención al cliente está rota**

* Empresas no pueden responder 24/7 sin altos costos
* Clientes exigen inmediatez y simplicidad
* Canales fragmentados generan mala experiencia
* Se pierden oportunidades por tiempos de respuesta

---

## **Slide 3 – Oportunidad**

**Un mercado en crecimiento con alta demanda**

* Crecimiento acelerado de canales digitales
* Adopción creciente de IA en atención al cliente
* Pymes necesitan soluciones accesibles y escalables
* Latinoamérica = mercado subatendido

---

## **Slide 4 – Solución**

**Sistema Smart de Chatbot con IA**

* Automatización inteligente con NLP
* Atención 24/7 en múltiples canales
* Aprendizaje continuo y personalización
* Escalamiento a humanos sin fricción
* Dashboard analítico en tiempo real

---

## **Slide 5 – Propuesta de Valor**

**Atención inteligente, escalable y rentable**
“Reducimos costos operativos y mejoramos la experiencia del cliente mediante automatización conversacional impulsada por inteligencia artificial.”

---

## **Slide 6 – Producto**

**Plataforma SaaS integral**

* Web app de administración y entrenamiento
* Integración con WhatsApp, web y Telegram
* IA entrenable por empresa
* Analítica y monitoreo continuo
* Arquitectura escalable (Cloud + Microservicios)

---

## **Slide 7 – Modelo de Negocio**

**Ingresos recurrentes y escalables (SaaS)**

* Suscripción mensual por niveles
* Servicios premium de IA
* Implementación y personalización
* Upselling por volumen y funcionalidades

---

## **Slide 8 – Tracción (KPI)**

**Crecimiento validado y rentable**

* Crecimiento MRR: ~12% mensual
* Crecimiento clientes: ~11% mensual
* Margen bruto: 83%
* Margen neto: 12%
* Retención sólida + uso creciente

---

## **Slide 9 – Ventaja Competitiva**

**Por qué ganamos**

* IA propia (no dependemos de terceros)
* Alta escalabilidad con bajos costos
* Experiencia híbrida (IA + humano)
* Integración multicanal real
* Enfoque en mercados emergentes

---

## **Slide 10 – Equipo**

**Equipo completo para escalar**

* CEO/CTO: +13 años en IA, software y arquitectura
* CMO: crecimiento, marketing digital y SaaS
* COO: operaciones, eficiencia y escalabilidad
* Capacidades: tecnología + negocio + ejecución

---

## **Slide 11 – Roadmap**

**Próximos 12 meses**

* Escalar infraestructura cloud
* Mejorar algoritmos de IA
* Expandir base de clientes
* Lanzar app móvil
* Activar laboratorio de innovación

---

## **Slide 12 – Ask (Inversión)**

**Buscamos capital para escalar**

* Desarrollo tecnológico
* Infraestructura cloud
* Marketing y adquisición
* Innovación (Research Labs)

**Objetivo:** convertirnos en líder regional en atención inteligente

---

## **Slide 13 – Cierre**

**Technoloqie**
“No solo automatizamos conversaciones, transformamos la relación entre empresas y clientes.”

---

Technoloqie responde a este problema con el Sistema Smart de Chatbot basado en Inteligencia Artificial, una solución que transforma la atención al cliente en un proceso instantáneo, automatizado y centrado en la experiencia del usuario, sin sacrificar calidad ni control. Nuestro chatbot ofrece respuestas claras y amigables en tiempo real, elimina formularios complejos y permite a los clientes interactuar de forma natural a través de los canales que ya utilizan, como WhatsApp, Facebook, Telegram y mensajería web integrada en sitios empresariales.
