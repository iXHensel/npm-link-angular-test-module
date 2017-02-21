import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SomeService {
    private url: string;

    constructor(private http: Http, private owner: string, private repo: string) {
        this.url = `https://api.github.com/repos/${this.owner}/${this.repo}`;
    }

    public getDescription(): Observable<string> {
        return this.http.get(this.url).map((result) => {
            return result.json()['description'];
        });
    }
}