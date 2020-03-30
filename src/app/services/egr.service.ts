import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EgrService {
  // baseUrl = 'http://egr.gov.by/egrn/API.jsp';
  baseUrl = '//egr.gov.by/egrn/API.jsp';

  constructor(
    private _http: HttpClient,
  ) { }

  getCompanyInfo(params: HttpParams) {
    return this._http.get(
      this.baseUrl,
      {
        params
      });
  }
}
