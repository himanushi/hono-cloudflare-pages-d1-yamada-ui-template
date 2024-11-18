import { Hono } from "hono";
import { renderToString } from "react-dom/server";

const app = new Hono();

app.get("*", (c) => {
  return c.html(
    renderToString(
      <html lang="ja">
        <head>
          <script type="module" src="/src/client.tsx" />
        </head>
        <body>
          <div id="root" />
        </body>
      </html>,
    ),
  );
});

export default app;
