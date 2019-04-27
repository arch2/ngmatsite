import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  private configFile: string = 'assets/jDB.txt';

  constructor(private http: HttpClient) { }

  getUserNames(): Observable<any> {
    return this.http.get(this.configFile);
  }
  getViolationsConfig(): Observable<any> {
    //return of(VIOLATION_DATA);
    return this.http.get('assets/violation_config.json');
  }
  submitOpvForm(SPName: string, form: any): Observable<any> {
    // const url = "http://localhost:64578/Test";
    const url = "/Test/Tester";
    //  environment.api_endpoint +
    // AppSettings.API_CONTROLLER_ENDPOINT +
    // AppSettings.REGISTER_CONTROLLER,
    return this.http.post<any>(
      url,
      { "SPName": SPName, "values": JSON.stringify(form) },
      this.httpOptions);
  }
}
