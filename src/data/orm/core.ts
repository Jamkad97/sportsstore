import { Sequelize } from "sequelize";
import { getConfig } from "../../config";
<<<<<<< HEAD
import { initializeModels, CategoryModel, ProductModel, SupplierModel } 
    from "./models";
import { readFileSync } from "fs";

const config = getConfig("catalog:orm_repo");
const logging = config.logging 
        ? { logging: console.log, logQueryParameters: true}
        : { logging: false };

export class BaseRepo {
    sequelize: Sequelize; 
    
=======
import { initializeModels, CategoryModel, ProductModel, SupplierModel }
    from "./models";
import { readFileSync } from "fs";
const config = getConfig("catalog:orm_repo");
const logging = config.logging
        ? { logging: console.log, logQueryParameters: true}
        : { logging: false };
export class BaseRepo {
    sequelize: Sequelize;
   
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
    constructor() {
        this.sequelize = new Sequelize({ ...config.settings, ...logging })
        this.initModelsAndDatabase();
    }
<<<<<<< HEAD

=======
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
    async initModelsAndDatabase() : Promise<void> {
        initializeModels(this.sequelize);
        if (config.reset_db) {
            await this.sequelize.drop();
            await this.sequelize.sync();
            await this.addSeedData();
        } else {
<<<<<<< HEAD
            await this.sequelize.sync();            
        }
    }    

=======
            await this.sequelize.sync();           
        }
    }   
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
    async addSeedData() {
        const data = JSON.parse(readFileSync(config.seed_file).toString());
        await this.sequelize.transaction(async (transaction) => {
            await SupplierModel.bulkCreate(data.suppliers, { transaction });
            await CategoryModel.bulkCreate(data.categories, { transaction });
            await ProductModel.bulkCreate(data.products, { transaction });
        });
<<<<<<< HEAD
    }    
}

=======
    }   
}
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
export type Constructor<T = {}> = new (...args: any[]) => T;
