namespace test;

using {managed} from '@sap/cds/common';

entity training : managed {

  key trainers_id : String(20);
      name        : String(100);
      skill       : String(100);
      trainer     : String(100);
      location    : String(100);
      room        : String(20);
      duration    : String(20);

}

entity products : managed {

  key ProductID       : String(80);
      ProductName     : String(80);
      SupplierID      : String(80);
      CategoryID      : String(80);
      QuantityPerUnit : String(80);
      UnitPrice       : String(80);
      UnitsInStock    : String(80);
      UnitsOnOrder    : String(80);
      ReorderLevel    : String(80);
      Discontinued    : String(80);

}

entity products_copy : managed {

  key ProductID       : String(80);
      ProductName     : String(80);
      SuppplierID     : String(80);
      CategoryID      : String(80);
      QuantityPerUnit : String(80);
      UnitPrice       : String(80);
      UnitsInStock    : String(80);
      UnitsOnOrder    : String(80);
      ReorderLevel    : String(80);
      Discontinued    : String(80);

}
