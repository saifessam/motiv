import expess, { Application } from 'express';

const app: Application = expess();

app.listen(4000, () => console.log("Server is running on http://localhost:4000"));