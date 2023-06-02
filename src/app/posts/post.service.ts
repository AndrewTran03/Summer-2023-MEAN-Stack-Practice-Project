import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

import { Post } from "./post.model";

@Injectable({providedIn: "root"})
export class PostService {
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    constructor(private http: HttpClient) {}

    getPosts() {
        // return [...this.posts];
    
        this.http.get<{ message: string, posts: Post[] }>("http://localhost:3000/api/posts")
            .subscribe((postData) => {
                this.posts = postData.posts;
                this.postsUpdated.next([...this.posts]);
            });
    }

    getPostUpdateListener() {
        return this.postsUpdated.asObservable();
    }

    addPost(title: string, content: string) {
        // const newPost: Post = {
        //     title: title,
        //     content: content
        // };
        const newPost: Post = {
            id: null,
            title: title,
            content: content
        };
        this.http.post<{ message: string }>("http://localhost:3000/api/posts", newPost)
            .subscribe((responseData) => {
                console.log(responseData.message);
                this.posts.push(newPost);
                this.postsUpdated.next([...this.posts]);
            })
        // this.posts.push(newPost);
        // this.postsUpdated.next([...this.posts]);
    }
}