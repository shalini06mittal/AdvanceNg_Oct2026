import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData { employeeName: string; }

@Component({
  selector: 'app-confirm-delete-dialog',
  standalone: false,
  styleUrl: './confirm-delete-dialog.scss',
  templateUrl: './confirm-delete-dialog.html',
})
export class ConfirmDeleteDialog {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
