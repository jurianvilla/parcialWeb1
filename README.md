## Descripción general

El proyecto implementa una aplicación Angular estructurada en componentes y servicios, siguiendo las buenas prácticas de separación de responsabilidades y uso de tipado TypeScript.
Se trabaja con un archivo JSON como fuente de datos simulada, el cual se carga desde el servicio correspondiente.

El desarrollo y las pruebas fueron realizados para la evaluación práctica angular, demostrando la comprensión de los conceptos básicos de ingeniería de software web y el uso del framework.


### Pasos para ejecutar el proyecto

Clonar el repositorio o descargar el código fuente:
```bash
git clone https://github.com/jurianvilla/parcialWeb1.git
```

Ingresar a la carpeta del proyecto:
```bashcd ..
cd parcialWeb1
```

Instalar las dependencias:
```bash
npm install
```

Ejecutar la aplicación en modo desarrollo:
```bash
ng serve
```

Luego, abre tu navegador en http://localhost:4200
.

### Estructura de recursos (assets)

Dentro de la carpeta src/assets/ se encuentran los recursos estáticos utilizados por la aplicación:
```bash
src/
 └── assets/
      ├── data/
      │    └── cars.json     ← Fuente de datos principal
      └── img/
           └── frame.jpg         ← Imagen utilizada como banner del sitio
```

data/: contiene el archivo .json que funciona como fuente de datos para la aplicación.

img/: almacena imágenes estáticas, incluyendo el banner principal mostrado en la interfaz.

### Ejecución de pruebas

Para ejecutar las pruebas unitarias y validar el comportamiento de los componentes y servicios:

▶️ Ejecutar pruebas con navegador visible
```bash
ng test
```
⚙️ Ejecutar pruebas en modo headless (sin abrir navegador)
```bash
ng test --browsers=ChromeHeadless --watch=false
```

Los resultados se mostrarán directamente en la terminal.

