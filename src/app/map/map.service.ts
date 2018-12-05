import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import {catchError, tap} from 'rxjs/operators';


@Injectable({
    providedIn:'root'
})


export class MapService{
    private sensorUrl="http://mintsdata.utdallas.edu:8081/latest";
    constructor(private http:HttpClient){

    }


    getData():Observable<any>{
        return this.http.get(this.sensorUrl)
        /*.pipe(
            tap(data=>console.log("ALL: " + JSON.stringify(data.post)))
        );*/

      
    }
}