## No Gluten!

https://singluten.now.sh

This is a project started by a very, very Jr developer, so all help is welcome!

To-dos:

- [x] Contact form 
- [ ] Move database to AWS
- [ ] Improve database (right now it's a copy of this one: http://www.anmat.gov.ar/Alimentos/libres_gluten/Listado_Integrado_de_ALG.csv)
- [ ] Fastest loading time 
- [ ] Erase useless code
- [ ] Clean up CSS
- [ ] Add pagination in product results 
- [ ] Add A to Z search in category list
- [ ] Improve the search function. Right now, it doesn't show the most relevant results first.
- [x] Last page of results shows weird number of products. 



The server is coded in Node.js, Restler and Express. It reaches a database hosted in my home computer to obtain data from different gluten-free products for sale in Argentina, as checked by ANMAT, and formats them to be displayed in the frontend.

The frontend is coded in React.

If you want access to my server, please mail me at reymalena at gmail.com 

You must download all archives and run the following commands in both the server dir and the client dir:

### `npm install`

### `npm start`

The server runs in port 3001 and the frontend in port 3000.  

## Sin Gluten!

El servidor, hecho en Node.js, Restler y Express, se comunica con una base de datos en mi computadora personal en donde puse el listado de productos sin gluten que difunde la ANMAT, y les da formato para mostrarse en el front end.

El front end esta hecho en React.

No se puede ver la pagina sin acceso a mi servidor, pero podes escribirme a reymalena at gmail.com y si sos bueno, te dare permiso

Para ver los archivos, descargar todo y ejecutar los siguientes comandos tanto en la carpeta client como en la carpeta server:

### `npm install`

### `npm start`

El backend corre en el puerto 3001 y el frontend, en el puerto 3000.  

