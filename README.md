## Rest-api
## Para iniciarla
¡Para que la rest-api funcione solo hay que rellenar los datos de conexión con la base de datos en el archivo de databases!

Primero eliminar en /database/database.js:
```env
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;
```
Luego en el código del mismo archivo rellenar:
```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
projectsdb=nombre de la base de datos
```
