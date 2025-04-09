using {test as db} from '../db/src/data-model';

service CatalogService {
       
    entity trainers as projection on db.training;
    entity Products   as projection on db.products;
    entity ProductsCopy as projection on db.products_copy;

    action purgeDB(ProductID : String) returns {
        msg : String
    };

}
