import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'myabout'
})

export class AboutPipe implements PipeTransform{

    
    transform(value: string): string {
        var limit:number=5;
        var abc:string= value.substring(0,limit)+'...';
        console.log(abc);
        return abc;
        
       }

}
