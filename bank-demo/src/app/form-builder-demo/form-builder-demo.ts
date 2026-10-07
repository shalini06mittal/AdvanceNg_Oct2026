import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormArray, FormBuilder, FormControl, FormGroup, FormResetEvent, FormSubmittedEvent, PristineChangeEvent, StatusChangeEvent, TouchedChangeEvent, Validators, ValueChangeEvent } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-form-builder-demo',
  standalone: false,
  styleUrl: './form-builder-demo.css',
  templateUrl: './form-builder-demo.html',
})
export class FormBuilderDemo implements OnInit, OnDestroy{
   

    private fb = inject(FormBuilder);
    intervalId: any;
    bioLength:number = 0;
    private sub:Subscription = new Subscription();

    profileForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      address : this.fb.group({
        city:['', [Validators.required]],
        country:['', [Validators.required]],
      }),
      skills: this.fb.array([this.fb.control('')])
    });

    postForm = new FormGroup({
      title : new FormControl('Angular', [Validators.required]),
      content: new FormControl('')
    });

  

    constructor(private cdr:ChangeDetectorRef){
      this.profileForm.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(()=> this.cdr.markForCheck());

      // this.profileForm.events.subscribe( e => {
      //   // console.log(e.source);
      //   if(e instanceof ValueChangeEvent){
      //     console.log('Value chnaged to : ', e.value); 
      //   }
      //   if(e instanceof StatusChangeEvent){
      //     console.log('Status chnaged to : ', e.status); 
      //   }
      //   if(e instanceof PristineChangeEvent){
      //     console.log('Pristine status chnaged to : ', e.pristine); 
      //   }
      //   if(e instanceof TouchedChangeEvent){
      //     console.log('Touched status chnaged to : ', e.touched); 
      //   }
      //   if(e instanceof FormResetEvent){
      //     console.log('form Reset: '); 
      //   }
      //   if(e instanceof FormSubmittedEvent){
      //     console.log('form was submitted '); 
      //   }
        
      // })
    }
    ngOnDestroy(): void {
      // Cleanup is handled by takeUntilDestroyed() in the constructor
      console.log('destroy');
     // clearInterval(this.intervalId)
     this.sub.unsubscribe();
    }

     ngOnInit(): void {
        console.log('On Init called');
        setTimeout(() => {
          this.skills.push(new FormControl('JS'));  
          console.log('skills array push done');
         // this.cdr.markForCheck();
        }, 2000);

        this.postForm.valueChanges
        .pipe(
          debounceTime(1000),
          distinctUntilChanged((prev, curr)=>
            prev.title === curr.title && prev.content === curr.content
          ),
        )
        .subscribe(formValue => {
          console.log(formValue);
          this.autoSaveDraft(formValue)
        });

        this.sub = this.postForm.get('content')!
        .valueChanges
        .pipe(
          debounceTime(1000),
          distinctUntilChanged()
        )
        .subscribe( (val:any) => {
          this.bioLength = val?.length ?? 0;
        })
    
       // this.intervalId = setInterval(()=> console.log(1), 1000);
    }
    submit(){
      console.log(this.profileForm.value);
      this.profileForm.reset();
    }

    get skills(){
      return this.profileForm.get('skills') as FormArray;
    }

    deleteSkill(index:number){
      console.log(index, 'to be deleted');  
      this.skills.removeAt(index); 
    }

    addSkill(){
      this.skills.push(this.fb.control(''))
    }

    autoSaveDraft(draft:any){
      console.log('auto saving the draft');
      localStorage.setItem('draft', JSON.stringify(draft));
    }
    loadExistingDraft(content:{title:string, content:string}){
      
      
        const savedContent:any = localStorage.getItem('draft')
        console.log(typeof(savedContent));
        
        if(savedContent !== null)
          this.postForm.patchValue(JSON.parse(savedContent), {emitEvent:false})
    }
    setPost(){
        this.postForm.setValue({title:'Angular', content:''})
    }
    setTitle(){
      this.postForm.get('title')?.setValue('Angular')
    }


}
