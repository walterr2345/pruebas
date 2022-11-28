import app from "./app.js";
import { sequelize } from "../src/database/database.js"


async function main() {
    try {
        await sequelize.sync({ force: false })
        await sequelize.authenticate();
        console.log(`Connection has been established successsfuly`);
        app.listen(3000)
        console.log(`Server is listen port 3000`);
    } catch (error) {
        console.error(`Unable to connect to the dataBase ${error}`);
    }
}
main()

