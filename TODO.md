- [ ] Controllers should be replaced with low level database functions that react to webscokets
- [ ] Probably need to re-write client logic as caching layers doesn't make much sense in real time
- [ ] Replace routers with socket subscriptions, can you abstract the logic easily (same pattern?)
- [ ] Clone front end masters course repo before you get on the plane!
- [ ] Auth is obviously the same pattern server side, how do you stop websocket running if user isn't signed in
- [ ] Can you just replace the fetch abstractions and get rid of the cache?
- [ ] Can you put constants in root and use them in both server and client (item:get)

Socket item routes

item:get
item:post
item:put
item:delete

Using the session in a websocket

```
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import session from "express-session";

const app = express();
const httpServer = createServer(app);

const sessionMiddleware = session({
  secret: "changeit",
  resave: false,
  saveUninitialized: false
});

app.use(sessionMiddleware);

app.post("/login", (req, res) => {
  req.session.authenticated = true;
  res.status(204).end();
});

const io = new Server(httpServer);

// convert a connect middleware to a Socket.IO middleware
const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);

io.use(wrap(sessionMiddleware));

// only allow authenticated users
io.use((socket, next) => {
  const session = socket.request.session;
  if (session && session.authenticated) {
    next();
  } else {
    next(new Error("unauthorized"));
  }
});

io.on("connection", (socket) => {
  console.log(socket.request.session);
});
```

Example of a middleware

```
io.on("connection", (socket) => {
  const req = socket.request;

  socket.use((__, next) => {
    req.session.reload((err) => {
      if (err) {
        socket.disconnect();
      } else {
        next();
      }
    });
  });

  // and then simply
  socket.on("my event", () => {
    req.session.count++;
    req.session.save();
  });
});
```

Modifying the session

```
io.on("connection", (socket) => {
  const req = socket.request;

  socket.on("my event", () => {
    req.session.reload((err) => {
      if (err) {
        return socket.disconnect();
      }
      req.session.count++;
      req.session.save();
    });
  });
});
```

Typescript http extension

```
import { Request, Response, NextFunction } from "express";
import { Session } from "express-session";

declare module "http" {
    interface IncomingMessage {
        session: Session & {
            authenticated: boolean
        }
    }
}

io.use((socket, next) => {
    sessionMiddleware(socket.request as Request, {} as Response, next as NextFunction);
});
```
