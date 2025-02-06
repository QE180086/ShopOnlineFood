package com.atula.Shop.Online.Food.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class PaymentDTO implements Serializable {
    private String status;
    private String message;
    private String URL;
}
