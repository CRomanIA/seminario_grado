require('dotenv').config();
import "@babel/polyfill"
import app from "./server/server";

const main = async () => {
    let port = process.env.PORT;
    await app.listen(port);
    console.info('Server on port', port);
};

main();
