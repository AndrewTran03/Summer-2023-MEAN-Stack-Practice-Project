import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
    // posts = [
    //   {title: "First Post", content: "This is the content of the first post"},
    //   {title: "Second Post", content: "This is the content of the second post"},
    //   {title: "Third Post", content: "This is the content of the third post"}
    // ];
    
    // @Input() posts: Post[] = [];
    
    posts: Post[] = [];
    private postSub: Subscription;

    constructor(public postService: PostService) {}

    ngOnInit() {
        // this.posts = this.postService.getPosts();
        this.postService.getPosts();
        this.postSub = this.postService.getPostUpdateListener()
            .subscribe((posts: Post[]) => {
                this.posts = posts;
            });
    }

    ngOnDestroy() {
        this.postSub.unsubscribe();
    }
}
