package com.stylewala.StyleWala.Service;

import com.stylewala.StyleWala.Product;
import com.stylewala.StyleWala.Repositry.Repo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    Repo repo;

    public ProductService(Repo repo){
        this.repo = repo;
    }

    public List<Product> getallproducts(){
        return repo.findAll();
    }
    public Product getproduct(int id){
        return repo.findById(id).orElse(new Product());
    }
    public void addproducts(Product products) {
        repo.save(products);
    }
    public void addproduct(Product pro){
        repo.save(pro);
    }
    public void deleteproduct(int id){
        repo.deleteById(id);
    }


}
