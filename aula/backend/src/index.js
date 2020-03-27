const express = require('express'); 
const routes = require('./routes');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar informação no backend
  * POST: criar uma informação no backend
  * PUT: Alterar uma informação
  * DELETE: Deletar uma informação no backend
  */

  /**
   * Tipos de parâmetros
   * Query: Parâmetros nomeados enviados na rota apos "?" (filtros, paginação) request.query
   * Route Params: Parâmetros utilizados para identificar recursos /:id request.params
   * Request body: Corpo da requisição, utilizado para criar ou alterar recursos  request.body
   */

   /**
    * SQL: MuSQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, ETC
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select(*).where()
     */


app.listen(3333);
