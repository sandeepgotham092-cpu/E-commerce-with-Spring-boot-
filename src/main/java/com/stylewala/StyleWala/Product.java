package com.stylewala.StyleWala;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.context.annotation.Primary;

import java.math.BigDecimal;
import java.math.BigDecimal;

@Entity
@Data
@Table(name="STYLEWALA")
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @Column(name="id")
    private int id;
    @Column(name = "Name")
    private String Name;
    @Column(name = "old_price")
    private BigDecimal old_price;
    @Column(name = "new_price")
    private BigDecimal new_price;
    @Column(name="discount")
    private int discount;
    @Column(name = "category")
    private String category;
    @Column(name = "imgfile")
    private String imgfile;
    @Column(name="quantity")
    private int quantity = 0;
}
