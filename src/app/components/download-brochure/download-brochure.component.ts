import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Notiflix from 'notiflix';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../shared/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-download-brochure',
  standalone: true,
  imports: [MaterialModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './download-brochure.component.html',
  styleUrl: './download-brochure.component.css'
})
export class DownloadBrochureComponent {

  constructor(private _client: HttpClient, private dialogRef: MatDialogRef<DownloadBrochureComponent>) {}

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
    agree_to_terms: new FormControl(''),
  });

  downloadIt() {
    document.getElementById('downLoadIt')?.click();
    console.log('DOWNLOADING');
  }

  downloadPdf(formData: any) {
    if (this.DownloadBrochureFormGroup.valid) {
      Notiflix.Loading.circle('Sending...');
      formData['website'] = 'canvas'
      this.submitFormData({
        recipients: ["partner@karimcgvisuals.com", "sales@canvas.co.ke"],
        data: formData,
      }).subscribe(
        (response) => {
          console.log(response);
          Notiflix.Loading.remove();
          Notiflix.Notify.success('Success! Your Brochure will be downloaded in a few.')
          this.downloadIt();
          this.dialogRef.close()

        },
        (error) => {
          console.log(error);
          Notiflix.Loading.remove();
          Notiflix.Notify.success('Success! Your Brochure will be downloaded in a few.')
          this.downloadIt()
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
