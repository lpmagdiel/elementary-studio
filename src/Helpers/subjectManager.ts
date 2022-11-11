import { Subject } from 'rxjs';

export class SubjectManager {
    subject$ = new Subject();
    getSubject(){
        return this.subject$.asObservable();
    }
    setSubject(subject: any){
        this.subject$.next(subject);
    }
}