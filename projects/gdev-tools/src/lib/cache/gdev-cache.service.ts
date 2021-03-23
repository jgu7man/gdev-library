import {Injectable} from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';
import { pluck,  distinctUntilKeyChanged,  startWith, take, skipWhile, map, } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class GdevCache {

    cacheTagName: string = 'gdev-data'
    storage: 'local' | 'session' = 'session'
    updateChanges$: Subject<any> = new Subject()
  storageData: any
  localStorage: string | null
  sessionStorage: string | null

  constructor() {
    this.localStorage = localStorage.getItem(this.cacheTagName)
    this.sessionStorage = sessionStorage.getItem(this.cacheTagName)
  }

    updateData<T>( key:string, value: any) {



        this.storageData = JSON.parse(
            this.storage == 'local'
                ? this.localStorage ? this.localStorage : ''
                : this.sessionStorage ? this.sessionStorage : ''
        )


        if (this.storageData) {
            this.storageData[key] = value
            this.storage == 'local'
                ? localStorage.setItem(this.cacheTagName, JSON.stringify(this.storageData))
                : sessionStorage.setItem(this.cacheTagName, JSON.stringify(this.storageData))
        } else {
            this.storageData = {[key]: value}
            this.storage == 'local'
                ? localStorage.setItem(this.cacheTagName, JSON.stringify(this.storageData))
                : sessionStorage.setItem(this.cacheTagName, JSON.stringify(this.storageData))
        }

        this.updateChanges$.next(this.storageData)
        return this.updateChanges$.pipe(
            distinctUntilKeyChanged(key),
            pluck<any, T>(key),
            // tap(result => console.log('keyChange: ',result))
        )

    }


    listenForChanges<T>(key: string): Observable<T> {
        let data = this.getDataKey<T>(key)
        return this.updateChanges$.pipe(
            // key ? (
            // mergeMap(res => iif(() => data != null, of({[key]:data}), of(res))),
            startWith({[key]:data}),
            distinctUntilKeyChanged( key, (x, y) =>  x == y ),
            pluck<any, T>(key),
                // )
                // : null,
        )
    }



    async getFullData() {
        var storageData =
            this.storage == 'local'
                ? JSON.parse(this.localStorage ? this.localStorage : '')
                : JSON.parse(this.sessionStorage ? this.sessionStorage : '')
        return storageData ? storageData : null
    }



    getDataKey<T>(key: string) {
        var storageData =
            this.storage == 'local'
            ? JSON.parse(this.localStorage ? this.localStorage : '')
            : JSON.parse(this.sessionStorage ? this.sessionStorage : '')
        if (storageData) {
            return storageData[key] ? storageData[key] as T : null
        } else {
            return null
        }
    }




    async getAsyncKey<T>(keyExpected: string, intervalsToWaitFor?: number, iterateSpeed?: number) {
        const timeToWait = interval(iterateSpeed ? iterateSpeed : 1000)
        const intervals =  intervalsToWaitFor ? intervalsToWaitFor : 5

        var result = this.getDataKey<T>(keyExpected)
        // console.log(keyExpected, result);
        if (!result) {
            return new Promise<T | null>((resolve) => {


					timeToWait.pipe(

                        map( (intent) => {
                            let result = this.getDataKey<T>(keyExpected)
                            // console.log(keyExpected, result)
					        return result ? result : intent
                        }),
                        skipWhile(result => {
                            // console.log({result, intervalsToWaitFor});
                            if( typeof result == 'number'  &&
                                result < intervals
                            ) { return true} else {return false}

                        }),
                        take(1),
					)
					.subscribe(result => {
						// console.log({ keyExpected, result, intervalsToWaitFor });
						if (result === intervalsToWaitFor) {
							// console.log('Se acabó el tiempo: ', keyExpected);
							resolve(null);
						} else if (typeof result != "number") {
							// {
							// console.log(keyExpected, result);
							resolve(result as T);
						}
						//}
                    }, error => console.log(error),
                    // () => {console.log(keyExpected, 'complete');}
                    );


            })
        } else {
            return result
        }
    }

  deleteDataKey(key: string) {
    var sesData =
      this.storage == 'local'
      ? JSON.parse(this.localStorage ? this.localStorage : '')
      : JSON.parse(this.sessionStorage ? this.sessionStorage : '')
    if (sesData) {
      delete sesData[key]

      this.storage == 'local'
        ? localStorage.setItem(this.cacheTagName, JSON.stringify(sesData))
        : sessionStorage.setItem(this.cacheTagName, JSON.stringify(sesData))
    }
  }


}




interface CacheData {
    key: string,
    value: any
}
