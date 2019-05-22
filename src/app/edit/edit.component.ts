import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; // [5.1b]
import {Router} from '@angular/router'; // [5.1e]


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

   public id ; // [5.1b]
public title;

                    // [5.1b]                  [5.1e]
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // [5.1b]
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.title = (this.route.snapshot.paramMap.get('title'));
    // console.log(this.id);
    // console.log(this.title);
  }

  // [5.1d]
  onSubmit2() {
    // console.log(this.id);
    // console.log(this.title);

    this.router.navigate(['/sendEdit', this.id, this.title]);

  }

}
