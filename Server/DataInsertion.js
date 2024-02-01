const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://Fergusonba:VjWrRkCiSqWjeQnA@todocluster.prnolrl.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(url);
 
 // Reference the database to use
 const dbName = "gettingStarted";
                      
 async function run() {
    try {
        // Connect to the Atlas cluster
         await client.connect();
         const db = client.db(dbName);

         // Reference the "people" collection in the specified database
         const col = db.collection("users");

         // Create a new document                                                                                                                                           
         let personDocument = {
             "name": { "first": "Braeden", "last": "Ferguson" },
             "birth": new Date(2001, 12, 30), // May 23, 1912                                                                                                                                 
             "death": new Date(),  // May 7, 1954                                                                                                                                  
             "account-info": { "username": "Fergusonba", "password": "testpassword123" },
             "ScheduleData": {
                //learn how to make a monthly schedule
             }, 
             "TaskList": { 
                "Task1":  {
                    "dueDate": new Date(2024, 2, 4)},
                "Task2": {
                    "dueDate": new Date(2024, 2, 5)}
                }
         }

         // Insert the document into the specified collection        
         const p = await col.insertOne(personDocument);

         // Find and return the document
         const filter = { "account-info.username": "Fergusonba" };
         const document = await col.findOne(filter);
         console.log("Document found:\n" + JSON.stringify(document));

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);
