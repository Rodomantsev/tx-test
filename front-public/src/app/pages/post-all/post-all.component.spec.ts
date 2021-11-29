import { PostAllComponent } from "./post-all.component";
import { PostsService } from "../../shared/services/posts/posts.service";
import { EMPTY, of } from "rxjs";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";

describe('PostAllComponent', () => {

    const post = {
        id: Date.now().valueOf(),
        title: 'string',
        author: 'string',
        category: 'string',
        text: 'string',
        date: 'string',
        imgBig: 'string',
        imgSmall: 'string',
        description: 'string'
    }

    let component: PostAllComponent;
    let fixture: ComponentFixture<PostAllComponent>;
    let service: PostsService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PostAllComponent],
            providers: [PostsService],
            imports: [HttpClientModule]
        }).compileComponents();

        fixture = TestBed.createComponent(PostAllComponent);
        service = TestBed.inject(PostsService);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call getAll when ngOnInit', () => {
        const spy = spyOn(service, 'getAll').and.callFake(() => {
            return EMPTY;
        })
        component.ngOnInit();
        expect(spy).toHaveBeenCalled();
    });

    it('should have value in post when method been called', () => {
        const posts = [post, post, post];
        spyOn(service, 'getAll').and.returnValue(of(posts));
        component.ngOnInit();
        expect(component.posts.length).toBe(posts.length);
    });
})
