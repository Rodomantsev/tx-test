import { Component, OnInit } from '@angular/core';
import { IPost } from "../../models/models";
import { BaseComponent } from "../../core/classes/base.component";
import { combineLatest, forkJoin, fromEvent, interval, Observable, of, timer } from "rxjs";
import { Store } from "@ngrx/store";
import { PostStoreSelectors } from "../../root-state/post-state";
import { RootStoreState } from "../../root-state";
import { concatMap, delay, exhaustMap, map, mergeMap, switchMap, take, tap } from "rxjs/operators";

@Component({
    selector: 'app-post-all',
    templateUrl: './post-all.component.html',
    styleUrls: ['./post-all.component.scss']
})
export class PostAllComponent extends BaseComponent implements OnInit {

    error$: Observable<any>;
    posts: IPost[] = [];

    constructor(private store$: Store<RootStoreState.State>) {
        super();
    }

    ngOnInit(): void {

        this.subs = this.store$.select(PostStoreSelectors.selectAllPostItems).subscribe((allPost: IPost[]) => {
            this.posts = allPost;
        });
        this.error$ = this.store$.select(PostStoreSelectors.selectPostError);

        // Если нам нужно сделать новый запрос на бек и получить свежие данные
        // this.store$.dispatch(new PostStoreActions.LoadRequestAction());

        if (false) {
            const timerOne$ = timer(1000, 4000);
            const timerTwo$ = timer(2000, 4000);
            const timerThree$ = timer(3000, 4000);

            combineLatest([timerOne$, timerTwo$, timerThree$]).subscribe(
                ([timerValOne, timerValTwo, timerValThree]) => {
                    // Если хоть из одного обервебла мы получим емит новых данных
                    // то в саскрайбе прилетит три значения новое и последние из не обновленных) надеюсь понятно написал ))
                    console.log(`Timer One Latest: ${timerValOne},Timer Two Latest: ${timerValTwo}, Timer Three Latest: ${timerValThree}`);
                });
        }

        if (false) {
            // Когда все обзервеблы закроюстя то formJoin отдаст последние значения в [], В этом примере мы получим
            // [4,8,0]
            forkJoin([
                of(1, 2, 3, 4),
                Promise.resolve(8),
                timer(4000),
            ]).subscribe({
                next: value => console.log('forkJoin: ', value),
                complete: () => console.log('Конец'),
            });
        }

        if (false) {
            of(1, 2, 3, 4, 5, 6, 7)
                .pipe(
                    tap(v => {
                        // tap просто исполняет фукнцию. никак не влияет на поток
                        console.log('v: ', v)
                    }),
                    map(v => {
                        // а вот map уже может изменять каждое потоковое значения
                        // обязательно нужно возвращать новое значение
                        return v * 2
                    })
                ).subscribe(value => {
                console.log('value: ', value)
            })
        }

        if (false) {
            of(1, 2, 3)
                .pipe(mergeMap(v => {
                    // пример: вместо of() который выше мы пошли на бек и взяли id юзера.
                    // а тут мы делаем запрос с этим id и что-то делаем
                    return of(v + ' value from new observer')
                })).subscribe(v => {
                // получаем результат второго запроса (который в  mergeMap)
                console.log('mergeMap: ', v)
            })
        }

        if (false) {
            of(1, 2, 3)
                .pipe(switchMap(v => {
                    // пример: вместо of() который выше мы пошли на бек и взяли id юзера.
                    // а тут мы делаем запрос с этим id и что-то делаем
                    // switchMap отписывается от верхнего обрезвебла и подписывается тот который внутри
                    // switchMap может отменять запросы
                    return of(v + ' value from new observer')
                })).subscribe(v => {
                // получаем результат второго запроса (который в  switchMap)
                console.log('switchMap: ', v)
            })
        }

        if (false) {

            // Разница между concatMap и mergeMap. Потому что concatmMap не подписывается на следующий обсервебл пока
            // предыдущий не закрылся, в отличии от mergeMap, который подписывается на внутренние обсервеблы-ы немедленно.
            // сообщения из concatMap придут в том порядке в котором он их получил из оператора of.
            // То есть сообщение отложенное на 2000 мс. придет первым. В то время как с ипользованием mergeMap сообщение
            // отложенное на 1000 мс. придет первее.
            const source = of(2000, 1000);

            source.pipe(concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val))))
                .subscribe(val =>
                    console.log(`With concatMap: ${val}`)
                );

            source.pipe(
                delay(5000),
                mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
            ).subscribe(val => console.log(`With mergeMap: ${val}`));
        }


        // На каждое пришедшее значение, подписывается на ObservableInput возвращаемый верхним обзервеблом
        // а все полученные значения из внутреннего Observable отправляет во внешний.
        // Пока внутренний Observable не закроется, exhaustMap будет игнорировать все приходящие значения.
        // То есть в единицу времени имеется только одна подписка.

        const clicks = fromEvent(document, 'click');
        const result = clicks.pipe(
            exhaustMap(ev => interval(1000).pipe(take(5)))
        );
        result.subscribe(x => console.log('exhaustMap: ', x));
    }
}
