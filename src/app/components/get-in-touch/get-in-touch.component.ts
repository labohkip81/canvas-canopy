import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Notiflix from 'notiflix';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material/material.module';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.css',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GetInTouchComponent {
  constructor(private _client: HttpClient, private dialogRef: MatDialogRef<GetInTouchComponent>) {}

  submitFormData(formData: any): Observable<any> {
    return this._client.post(
      `https://www.blinkstudio.co.ke/send-test-email`,
      formData
    );
  }

  DownloadBrochureFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    company: new FormControl(''),
    type: new FormControl(''),
  });

  downloadIt() {
    document.getElementById('downLoadIt')?.click();
    console.log('DOWNLOADING');
  }

  downloadPdf(formData: any) {
    if (this.DownloadBrochureFormGroup.valid) {
      Notiflix.Loading.circle('Sending...');
      formData['website'] = 'canvas-palace'
      this.submitFormData({
        recipients: ["partner@karimcgvisuals.com", "sales@canvas.co.ke"],
        data: formData,
      }).subscribe(
        (response) => {
          console.log(response);
          Notiflix.Loading.remove();
          Notiflix.Notify.success('Success!')
          this.dialogRef.close()
        },
        (error) => {
          console.log(error);
          Notiflix.Loading.remove();
          Notiflix.Notify.success('Success!')
          this.dialogRef.close()
        }
      );
    } else {
      this.DownloadBrochureFormGroup.touched;
      console.log('-------Invalid Form Called-------');
      Notiflix.Notify.failure('Please fill all the required fields!');
    }
  }

}
