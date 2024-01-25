import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root", // Direkte Bereitstellung im Root, ohne Module
})
export class DataService {
  constructor(private http: HttpClient) {}

  fetchData(): Observable<Data> {
    return this.http.get<Data>("/api/data");
  }
}
