import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class MessagesService {
    
    constructor(private http: Http) { 

    }

    getMessageOfTheMoment(): Promise<string> {
        return this.http.get('api/get-message-of-the-moment')
        .toPromise()
        .then(response => response.json().message)
        .catch(this.handleError);
    }

    postMessage (message: string): Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('api/post-message', { message }, options)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Oh noooo! An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}