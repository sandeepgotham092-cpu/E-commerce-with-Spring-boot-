package com.stylewala.StyleWala.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stylewala.StyleWala.Product;
import com.stylewala.StyleWala.Service.ProductService;

@RequestMapping("/api")
@RestController 
@CrossOrigin(origins ="http://localhost:3000")
public class ProductController {
    ProductService service;
    public ProductController(ProductService service){
        this.service = service;
    }
    @RequestMapping("/")
    public String greeting(){
        return "Hello...";
    }
    @GetMapping("/products")
    public List<Product> getallproducts(){
        return service.getallproducts();
    }
    @GetMapping("Products/{id}")
    public Product getproduct(@PathVariable int id){
      return  service.getproduct(id);
    }
    @PostMapping("/products")
   public void addproducts( @RequestBody  Product products){
        service.addproducts(products);
   }
   @PutMapping("/products")
   public void addproduct(@RequestBody Product pro){
        service.addproduct(pro);
   }
   @DeleteMapping("/products/{id}")
   public void deleteproduct(@PathVariable int id){
        service.deleteproduct(id);
   }


}
