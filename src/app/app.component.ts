import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MyFormComponent} from "./MyForm";
import {ProfileEditorComponent} from "./profile-editor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFormComponent, ProfileEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected jwe: string | undefined;
  constructor(private http: HttpClient) {
  }

  title = 'my-app-test-redirect';

  onClick() {
    this.http.get<Msg>('http://localhost:8080/api-endpoint').subscribe(data => {
      console.log(data.text);
      this.jwe = data.text;
    }, error => {
      console.error('Error:', error);
    });
  }

}

class Msg {
  text: string;

  constructor(text: string) {
    this.text = text;
  }
}
