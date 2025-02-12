import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-rent-tracking',
  imports: [CommonModule],
  templateUrl: './rent-tracking.component.html',
  styleUrl: './rent-tracking.component.css'
})
export class RentTrackingComponent {
  payments = [
    { id: 1, tenantName: 'Eric Mugisha', propertyId: 'P001', amount: 750, dueDate: '2025-03-01', status: 'Paid' },
    { id: 2, tenantName: 'Alice Uwase', propertyId: 'P002', amount: 500, dueDate: '2025-03-05', status: 'Pending' },
    { id: 3, tenantName: 'John Doe', propertyId: 'P003', amount: 1000, dueDate: '2025-02-28', status: 'Overdue' },
  ];

  generateInvoice(payment: any) {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Rent Payment Invoice', 20, 20);
    doc.setFontSize(12);
    doc.text(`Invoice ID: ${payment.id}`, 20, 40);
    doc.text(`Tenant: ${payment.tenantName}`, 20, 50);
    doc.text(`Property ID: ${payment.propertyId}`, 20, 60);
    doc.text(`Amount Paid: $${payment.amount}`, 20, 70);
    doc.text(`Due Date: ${payment.dueDate}`, 20, 80);
    doc.text(`Status: ${payment.status}`, 20, 90);
    
    // Save the invoice as a PDF
    doc.save(`invoice_${payment.id}.pdf`);
  }
}
