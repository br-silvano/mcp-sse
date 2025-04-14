import app from "./app";
import { env } from './config/env';

const PORT = Number(env.PORT)

app.listen(PORT, () => {
  console.log(`MCP Server rodando na porta ${PORT}`);
});
