import { Injectable } from '@angular/core';
@Injectable()

export class todoservice
{
    tdList=[{todo:'Upload on github'},
    {todo:'Signup'}]

    gettodo()
    {
        return this.tdList
    }
    settodo(tdl)
    {
     //this is responsible for adding a data from input section to list  
        this.tdList.push(tdl)
        ///emp object is coming from app.component.ts
    }
}