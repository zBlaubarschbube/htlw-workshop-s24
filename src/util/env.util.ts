import { object, string, number, coerce } from "zod";

/*import dotenv from 'dotenv';
dotenv.config();*/
//ODER
import { config } from "dotenv";
config();

//dotenv.config();

//const validated = envSchema.parse(process.env)

//console.log(typeof process.env.PORT);      //process.env: Zugriff auf Umgebungsvariablen

const envSchema = object({
    /*PORT: string({              //von number auf string, weil er immer String bekommt
        message: "PORT must be a number!"
    }).transform(portStr => {
        try{
            const port = parseInt(portStr);     //sucht sich die nummer im String

            if ((port < 1) || (port > 65535)) {
                throw "PORT not in valid range";
            }

            return port;
        }catch (e) {
            console.error(e);
        }
    }),*/

    
    //Die drei Zeilen machen alles das, was oben ist
    PORT_OPT: coerce.number({               //coerce ist eine Methode von zod, die probiert, den String in die richtige Form zu parsen. In alle 
        message: "Port must be a number"    
    }).min(0).max(65535)        //min, max ist inklusiv
});

export default envSchema.parse(process.env);