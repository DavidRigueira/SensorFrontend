# Diseño de la Interfaz gráfica

https://wireframepro.mockflow.com/view/ 
M7f6358366c744324d5d0dd67a4198e1b1612424158165


# Ip temporal profesor
privada: 192.168.1.86:4200
publica: 88.21.98.111:4200


# Acceso al API
  - Por ahora no tiene autenticación
  - localhost:3000
  - Rutas:
    - GET '/datos'      // devolver todos los datos guardados
    - GET '/dato/:id'   // Devolver un dato en particular (por id)
    - GET '/ultimoDato'   // Devolver el último dato insertado
    - POST '/dato'      // Inserta un nuevo dato
    - PUT '/dato/:id'   // Modifica un dato existente
    - DELETE '/dato/:id'// Elimina un dato existente

# Proyecto github

  - git remote add origin https://github.com/kant003/SensorCebem.git

# Historias de usuario

- Crear el componente menu
  - [ ] template (cora)
  - [ ] Logica de negocio
- Crear el componente listado de datos guardados
  - [ ] template
  - [ ] Logica de negocio
- Crear el componente listado del dato mas actual
  - [ ] template
  - [ ] Logica de negocio
- Crear el componente añadido de un nuevo dato
  - [ ] template
  - [ ] Logica de negocio
- Crear el componente login
  - [ ] template (Miriam)
  - [ ] Logica de negocio
- Crear el componente registro de un nuevo usuario
  - [ ] template(David)
  - [ ] Logica de negocio

- [ ] Crear el servicio para listar todos los datos
- [ ] Crear el servicio para listar el dato mas actual
- [ ] Crear el servicio para añadir un nuevo dato

- [ ] Crear el modelo de datos
