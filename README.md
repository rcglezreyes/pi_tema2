# Plataforma de E-Commerce

¡Bienvenido a la Plataforma de E-Commerce! Este proyecto está construido utilizando HTML, CSS, Bootstrap y JavaScript para el frontend, y está contenedorizado utilizando Docker y Docker Compose.

## Tabla de Contenidos

- [Instalación](#instalación)
  - [Instalando Docker Compose](#instalando-docker-compose)
    - [Windows](#windows)
    - [macOS](#macos)
    - [Linux](#linux)
- [Ejecutar los Servicios](#ejecutar-los-servicios)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Instalación

### Instalando Docker Compose

#### Windows

1. **Instalar Docker Desktop**:
   - Descarga e instala Docker Desktop desde [Docker Hub](https://www.docker.com/products/docker-desktop).
   - Sigue las instrucciones de instalación y asegúrate de que Docker Desktop esté ejecutándose.

2. **Verificar la Instalación**:
   - Abre el Símbolo del sistema (cmd) o PowerShell.
   - Ejecuta el siguiente comando para verificar la instalación:
     ```sh
     docker-compose --version
     ```

#### macOS

1. **Instalar Docker Desktop**:
   - Descarga e instala Docker Desktop desde [Docker Hub](https://www.docker.com/products/docker-desktop).
   - Sigue las instrucciones de instalación y asegúrate de que Docker Desktop esté ejecutándose.

2. **Verificar la Instalación**:
   - Abre la Terminal.
   - Ejecuta el siguiente comando para verificar la instalación:
     ```sh
     docker-compose --version
     ```

#### Linux

1. **Instalar Docker**:
   - Sigue las instrucciones para instalar Docker desde [la documentación oficial de Docker](https://docs.docker.com/engine/install/).

2. **Instalar Docker Compose**:
   - Ejecuta los siguientes comandos para descargar e instalar Docker Compose:
     ```sh
     sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
     sudo chmod +x /usr/local/bin/docker-compose
     ```

3. **Verificar la Instalación**:
   - Ejecuta el siguiente comando para verificar la instalación:
     ```sh
     docker-compose --version
     ```

## Ejecutar los Servicios

Una vez que Docker Compose esté instalado, sigue estos pasos para iniciar los servicios:

1. **Clonar el Repositorio**:
   ```sh
   git clone https://github.com/rcglezreyes/pi_tema2.git
   cd pi_tema2
   ```
2. **Ejecución del sistema**:

Para levantar el sistema en ambiente docker solo tiene que ejecutar este comando desde la carpeta de la aplicación:
   ```sh
   docker-compose up -d --build
   ```
Para detener el servicio:
   ```sh
   docker-compose down
   ```

3. **Descripción del sistema**


