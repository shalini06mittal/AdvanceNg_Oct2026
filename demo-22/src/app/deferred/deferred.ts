import { Component } from '@angular/core';
import { Comment } from '../comment/comment';
import {NgOptimizedImage} from '@angular/common';

@Component({
  imports: [Comment, NgOptimizedImage],
  selector: 'app-deferred',
  styleUrl: './deferred.css',
  templateUrl: './deferred.html',
  
})
export class Deferred {}
