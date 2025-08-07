package com.stylewala.StyleWala.Repositry;

import com.stylewala.StyleWala.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Repo extends JpaRepository<Product,Integer> {

}
