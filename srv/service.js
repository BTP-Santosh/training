const cds = require("@sap/cds");

class CatalogService extends cds.ApplicationService {

    // overide the standard init method with custom logic

    async init() {

        const { trainers, Products, ProductsCopy } = this.entities;
        this.on("READ", trainers, (req) => {
            console.log("I am triggered", res);
        });

        this.after("READ", Products, (res) => {
            for (let i = 0; i < res.lenght; i++) {
                if (res(i).UnitInStock > 20) {
                    res(i).ProductName = res(i).ProductName + 'AVAI';
                }
            }
        });

        this.befor("POST", Products, (res) => {
            console.log(req.data);
            if (req.data.UnitInStock > 10) {
                req.reject(400, "The product with stock less than 10 not allowed to be store in database");
            }
        });
        this.on("purgeDB", async (req) => {
            // Step 1 Create a connection with DB Module
            let dbConn = await cds.connect.to("db");

            // Step 2 Create a transaction db for setting up LUW (logical unit of work)
            let tx = await dbConn.transaction(req);
            let id = req.data.ProductID ;

            // Step 3 Check if the entry exist in bd or not

            let res = await tx.run([SELECT.from(Products).where({
                ProductID : id
            })]);

            if (resp[0].length === 0 ) {
                req.reject(400, "The record to ppurge does not exist in our db");
            }
            try 
            {
            let resp1 = await tx.run([INSERT.into(ProductsCopy).entries(res[0])]);
            } catch(err) {
                return { 
                "msg" : err
                }
            }
        

            return {
                "msg" : "Product ID " + id + "urged successfully"
            }        

            console.log("Action is triggered");
        });

        await super.init();
    }
}

module.export = CatalogService
