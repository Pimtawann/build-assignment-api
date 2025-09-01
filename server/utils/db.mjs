// Create PostgreSQL Connection Pool here !
import * as pg from "pg";
const { Pool } = pg.default;

const connectionPool = new Pool({
  connectionString:
    "postgresql://postgres:punch2313@localhost:5432/build-creating-data-API-assignment",
});

export default connectionPool;
