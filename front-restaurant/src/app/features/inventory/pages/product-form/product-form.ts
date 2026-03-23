import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './product-form.html'
})
export class ProductForm implements OnInit {
  productForm: FormGroup;
  esEdicion = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
  
    this.productForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      categoria: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0.5)]],
      stock: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {

    if (this.route.snapshot.paramMap.get('id')) {
      this.esEdicion = true;
    }
  }

  guardar() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched(); 
      return;
    }

    console.log('Datos listos para enviar a Spring Boot:', this.productForm.value);
    alert('¡Simulación de guardado exitosa!');
    this.router.navigate(['/inventario']);
  }
}