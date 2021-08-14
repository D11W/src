import { Component, OnInit } from '@angular/core';
import { TaxInVoiceService } from 'src/app/tax-in-voice.service';
import { TaxInVoice } from './TaxInVoice';


@Component({
  selector: 'app-tax-in-voice',
  templateUrl: './tax-in-voice.component.html',
  styleUrls: ['./tax-in-voice.component.css']
})
export class TaxInVoiceComponent implements OnInit {

  constructor(private taxinvoiceService:TaxInVoiceService) { }

  address={
    line1:'',
    line2:'',
    landmark:'',
    city:'',
    pincode:0,
    state:'',
  }

  clientDetail={
      address:this.address,
      companyName:'',
      email: '',
      gstUIN:'',
  }

  taxInvoice:TaxInVoice={
      address:this.address,
      clientDetail:this.clientDetail,
      invoiceNo:'',
      deliveryNote:'',
      suppliersRef:'',
      despatchDocumentNo:'',
      despatchThrough:'',
      buyerNumber:'',
      dated:'',
      modeOrTermsOfPayment:'',
      otherReferences:'',
      referenceDate:'',
      deliveryNoteDate:'',
      destination:''
}

SubmitDetail(tax:any)
{
  this.address={
    line1:tax.line1,
    line2:tax.line2,
    landmark:tax.landmark,
    city:tax.city,
    pincode:tax.pincode,
    state:tax.state
    }

  this.clientDetail={
    address:this.address,
    companyName:tax.companyName,
      email:tax.email,
      gstUIN:tax.gstUIN,
    }

  this.taxInvoice={
    address:this.address,
      clientDetail:this.clientDetail,
      invoiceNo:tax.invoiceNo,
      deliveryNote:tax.deliveryNote,
      suppliersRef:tax.suppliersRef,
      buyerNumber:tax.buyerNumber,
      despatchDocumentNo:tax.despatchDocumentNo,
      despatchThrough:tax.despatchThrough,
      dated:tax.dated,
      modeOrTermsOfPayment:tax.modeOrTermsOfPayment,
      otherReferences:tax.otherReferences,
      referenceDate:tax.referenceDate,
      deliveryNoteDate:tax.deliveryNote,
      destination:tax.destination
    };
    
    this.taxinvoiceService.createTaxDetail(this.taxInvoice).subscribe((res)=>{
      console.log(res);
    });
   

  }


  ngOnInit(): void {
  }

}
