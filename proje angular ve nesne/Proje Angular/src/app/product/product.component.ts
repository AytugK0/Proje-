import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product';
import { ProductFilterPipe } from "./product-filter.pipe";
import { FormsModule } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';


@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [CommonModule, ProductFilterPipe, FormsModule] // Buraya ekleyin
 // Buraya ekleyin
})
export class ProductComponent {
  constructor(private alertifyService:AlertifyService){ }
  title = "Ürün Listesi"
  filterText=""
  products : Product[] = [
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus Notebook", imageUrl:"https://www.google.com/imgres?q=laptop%20asus%20tuf%20gaming&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71-nXIcTMcL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com.tr%2FASUS-FX507VV-LP242W-Bilgisayar-i7-13620H-Processor%2Fdp%2FB086ZT8JH5&docid=VEMNZHA_uTCRKM&tbnid=J2hYXKxoLQv_VM&vet=12ahUKEwjw8dKB_uaKAxWyS_EDHXspIwYQM3oECGUQAA..i&w=1000&h=748&hcb=2&ved=2ahUKEwjw8dKB_uaKAxWyS_EDHXspIwYQM3oECGUQAA"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://www.google.com/imgres?q=laptop%20asus%20tuf%20gaming&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71-nXIcTMcL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com.tr%2FASUS-FX507VV-LP242W-Bilgisayar-i7-13620H-Processor%2Fdp%2FB086ZT8JH5&docid=VEMNZHA_uTCRKM&tbnid=J2hYXKxoLQv_VM&vet=12ahUKEwjw8dKB_uaKAxWyS_EDHXspIwYQM3oECGUQAA..i&w=1000&h=748&hcb=2&ved=2ahUKEwjw8dKB_uaKAxWyS_EDHXspIwYQM3oECGUQAA"},
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus Notebook",imageUrl:"https://www.google.com/imgres?q=laptop%20asus%20tuf%20gaming&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71-nXIcTMcL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com.tr%2FASUS-FX507VV-LP242W-Bilgisayar-i7-13620H-Processor%2Fdp%2FB086ZT8JH5&docid=VEMNZHA_uTCRKM&tbnid=J2hYXKxoLQv_VM&vet=12ahUKEwjw8dKB_uaKAxWyS_EDHXspIwYQM3oECGUQAA..i&w=1000&h=748&hcb=2&ved=2ahUKEwjw8dKB_uaKAxWyS_EDHXspIwYQM3oECGUQAA"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://www.google.com/imgres?q=laptop%20asus%20tuf%20gaming&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71-nXIcTMcL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com.tr%2FASUS-FX507VV-LP242W-Bilgisayar-i7-13620H-Processor%2Fdp%2FB086ZT8JH5&docid=VEMNZHA_uTCRKM&tbnid=J2hYXKxoLQv_VM&vet=12ahUKEwjw8dKB_uaKAxWyS_EDHXspIwYQM3oECGUQAA..i&w=1000&h=748&hcb=2&ved=2ahUKEwjw8dKB_uaKAxWyS_EDHXspIwYQM3oECGUQAA"},
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus Notebook",imageUrl:"https://www.google.com/imgres?q=laptop%20asus%20tuf%20gaming&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71-nXIcTMcL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com.tr%2FASUS-FX507VV-LP242W-Bilgisayar-i7-13620H-Processor%2Fdp%2FB086ZT8JH5&docid=VEMNZHA_uTCRKM&tbnid=J2hYXKxoLQv_VM&vet=12ahUKEwjw8dKB_uaKAxWyS_EDHXspIwYQM3oECGUQAA..i&w=1000&h=748&hcb=2&ved=2ahUKEwjw8dKB_uaKAxWyS_EDHXspIwYQM3oECGUQAA"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://www.google.com/imgres?q=laptop%20asus%20tuf%20gaming&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71-nXIcTMcL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com.tr%2FASUS-FX507VV-LP242W-Bilgisayar-i7-13620H-Processor%2Fdp%2FB086ZT8JH5&docid=VEMNZHA_uTCRKM&tbnid=J2hYXKxoLQv_VM&vet=12ahUKEwjw8dKB_uaKAxWyS_EDHXspIwYQM3oECGUQAA..i&w=1000&h=748&hcb=2&ved=2ahUKEwjw8dKB_uaKAxWyS_EDHXspIwYQM3oECGUQAA"},
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus Notebook",imageUrl:"https://www.google.com/imgres?q=laptop%20asus%20tuf%20gaming&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71-nXIcTMcL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com.tr%2FASUS-FX507VV-LP242W-Bilgisayar-i7-13620H-Processor%2Fdp%2FB086ZT8JH5&docid=VEMNZHA_uTCRKM&tbnid=J2hYXKxoLQv_VM&vet=12ahUKEwjw8dKB_uaKAxWyS_EDHXspIwYQM3oECGUQAA..i&w=1000&h=748&hcb=2&ved=2ahUKEwjw8dKB_uaKAxWyS_EDHXspIwYQM3oECGUQAA"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://www.google.com/imgres?q=laptop%20asus%20tuf%20gaming&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71-nXIcTMcL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com.tr%2FASUS-FX507VV-LP242W-Bilgisayar-i7-13620H-Processor%2Fdp%2FB086ZT8JH5&docid=VEMNZHA_uTCRKM&tbnid=J2hYXKxoLQv_VM&vet=12ahUKEwjw8dKB_uaKAxWyS_EDHXspIwYQM3oECGUQAA..i&w=1000&h=748&hcb=2&ved=2ahUKEwjw8dKB_uaKAxWyS_EDHXspIwYQM3oECGUQAA"}
  ]
    
  
addToCart(product: Product) {
  this.alertifyService.success(product.name+ " added")
}


}
