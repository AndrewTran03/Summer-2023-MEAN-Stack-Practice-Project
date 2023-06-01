import { Component, EventEmitter, Output } from '@angular/core';

import { Post } from '../post.model';
import { NgForm } from "@angular/forms";
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    // newPost = "NO CONTENT";
    // enteredValue = "";

    enteredTitle = "";
    enteredContent = "";
    // @Output() postCreated = new EventEmitter<Post>();
    
    constructor(public postService: PostService) {}

    // onAddPost() {
    //   this.newPost = "The user\'s post";
    // }  

    // onAddPost(postInput: HTMLTextAreaElement) {
    //   this.newPost = postInput.value;
    // }

    // onAddPost() {
    //   this.newPost = this.enteredValue;
    // }  

    // onAddPost() {
    //     const newPost: Post = {
    //         title: this.enteredTitle, 
    //         content: this.enteredContent
    //     };
    //     this.postCreated.emit(newPost);
    // }

    onAddPost(form: NgForm) {
        if(form.invalid) {
            return;
        }
        
        // const newPost: Post = {
        //     title: form.value.title,
        //     content: form.value.content
        // };

        // this.postCreated.emit(newPost);

        this.postService.addPost(form.value.title, form.value.content);
        form.resetForm();
    }
}
