/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:
 * localhost:
 *   mongo inventory scripts/init.mongo.js
 * Atlas:
 *   mongo mongodb+srv://admin:admin@fullstack-mongo-cluster-j0wnh.mongodb.net/inventory scripts/init.mongo.js
 * MLab:
 *   mongo mongodb://user:pwd@xxx.mlab.com:33533/inventory scripts/init.mongo.js
 */

/* eslint linebreak-style: ["error", "windows"] */
let db;
db.products.remove({});
db.deleted_products.remove({});

const productsDB = [
    {
        id: 1,
        productName: 'ZORO',
        price: 30,
        category: 'Shirts',
        imageUrl: 'https://www.kohls.com/product/prd-4261946/mens-arrow-fitted-athletic-stretch-dress-shirt.jsp?skuid=31103260&ci_mcc=ci&utm_campaign=MENS%20DRESS%20SHIRTS&utm_medium=CSE&utm_source=google&utm_product=31103260&CID=shopping15&utm_campaignid=6718756450&pid=googleadwords_int&af_channel=CSE&gclid=Cj0KCQjw-Mr0BRDyARIsAKEFbedMgVySAO1q43D8oPWYBXRYjMZhXYqy9kpv2vJtqiJHe9wMp7PVWTsaAijpEALw_wcB&gclsrc=aw.ds',
    },
    {
        id: 1,
        productName: 'Nike',
        price: 30,
        category: 'Jackets',
        imageUrl: 'https://www.kohls.com/product/prd-3523459/mens-nike-dri-fit-full-zip-fleece-hoodie.jsp?skuid=30996566&ci_mcc=ci&utm_campaign=MENS%20ACTIVE%20APPAREL&utm_medium=CSE&utm_source=google&utm_product=30996566&CID=shopping15&utm_campaignid=6718756450&pid=googleadwords_int&af_channel=CSE&gclid=Cj0KCQjw-Mr0BRDyARIsAKEFbecD9yaVSIUgUOXJVSadKge4UMsUKjy4fl4-BbJxMpKtjlQjZKXoOZoaAqOnEALw_wcB&gclsrc=aw.ds',
    },
];

db.products.insertMany(productsDB);
const count = db.products.count();

db.counters.remove({ _id: 'products' });
db.counters.insert({ _id: 'products', current: count });

db.products.createIndex({ id: 1 }, { unique: true });
db.products.createIndex({ status: 1 });
db.products.createIndex({ owner: 1 });
db.products.createIndex({ created: 1 });

db.deleted_products.createIndex({ id: 1 }, { unique: true });
