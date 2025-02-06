package com.atula.Shop.Online.Food.controller;

import com.atula.Shop.Online.Food.config.VNPayConfig;
import com.atula.Shop.Online.Food.dto.PaymentDTO;
import com.atula.Shop.Online.Food.model.Order;
import com.atula.Shop.Online.Food.model.User;
import com.atula.Shop.Online.Food.repository.OrderRepository;
import com.atula.Shop.Online.Food.service.CartService;
import com.atula.Shop.Online.Food.service.OrderService;
import com.atula.Shop.Online.Food.service.UserService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@RequestMapping("/api/payment")
public class PaymentController   {
    @Autowired
    private UserService userService;
    @Autowired
    private OrderService orderService;
    @GetMapping("/create_payment/{id}")
    public ResponseEntity<?> create_payment(
            @RequestHeader("Authorization") String jwt,
            HttpServletRequest req,
            @PathVariable Long id
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        String orderType = "other";
//            long amount = Integer.parseInt(req.getParameter("amount")) * 100;
//            String bankCode = req.getParameter("bankCode");

            String vnp_TxnRef = VNPayConfig.getRandomNumber(8);
            String vnp_IpAddr = VNPayConfig.getIpAddress(req);

            String vnp_TmnCode = VNPayConfig.vnp_TmnCode;
            Order order = orderService.findOrderById(id);

            long amount=order.getTotalAmount()*100;

            Map<String, String> vnp_Params = new HashMap<>();
            vnp_Params.put("vnp_Version", VNPayConfig.vnp_Version);
            vnp_Params.put("vnp_Command", VNPayConfig.vnp_Command);
            vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
            vnp_Params.put("vnp_Amount", String.valueOf(amount));
            vnp_Params.put("vnp_CurrCode", "VND");
            vnp_Params.put("vnp_BankCode", "NCB");
            vnp_Params.put("vnp_TxnRef", vnp_TxnRef);
            vnp_Params.put("vnp_OrderInfo", "Thanh toan don hang:" + vnp_TxnRef);
            vnp_Params.put("vnp_Locale", "vn");
            vnp_Params.put("vnp_ReturnUrl", VNPayConfig.vnp_ReturnUrl);
            vnp_Params.put("vnp_IpAddr", vnp_IpAddr);
            vnp_Params.put("vnp_OrderType", orderType);

//            if (bankCode != null && !bankCode.isEmpty()) {
//                vnp_Params.put("vnp_BankCode", bankCode);
//            }
//            vnp_Params.put("vnp_TxnRef", vnp_TxnRef);
//            vnp_Params.put("vnp_OrderInfo", "Thanh toan don hang:" + vnp_TxnRef);
//
//            String locate = req.getParameter("language");
//            if (locate != null && !locate.isEmpty()) {
//                vnp_Params.put("vnp_Locale", locate);
//            } else {
//                vnp_Params.put("vnp_Locale", "vn");
//            }
//            vnp_Params.put("vnp_ReturnUrl", VNPayConfig.vnp_ReturnUrl);


            Calendar cld = Calendar.getInstance(TimeZone.getTimeZone("Etc/GMT+7"));
            SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
            String vnp_CreateDate = formatter.format(cld.getTime());
            vnp_Params.put("vnp_CreateDate", vnp_CreateDate);

            cld.add(Calendar.MINUTE, 15);
            String vnp_ExpireDate = formatter.format(cld.getTime());
            vnp_Params.put("vnp_ExpireDate", vnp_ExpireDate);

            List fieldNames = new ArrayList(vnp_Params.keySet());
            Collections.sort(fieldNames);
            StringBuilder hashData = new StringBuilder();
            StringBuilder query = new StringBuilder();
            Iterator itr = fieldNames.iterator();
            while (itr.hasNext()) {
                String fieldName = (String) itr.next();
                String fieldValue = (String) vnp_Params.get(fieldName);
                if ((fieldValue != null) && (fieldValue.length() > 0)) {
                    //Build hash data
                    hashData.append(fieldName);
                    hashData.append('=');
                    hashData.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                    //Build query
                    query.append(URLEncoder.encode(fieldName, StandardCharsets.US_ASCII.toString()));
                    query.append('=');
                    query.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                    if (itr.hasNext()) {
                        query.append('&');
                        hashData.append('&');
                    }
                }
            }
            String queryUrl = query.toString();
            String vnp_SecureHash = VNPayConfig.hmacSHA512(VNPayConfig.secretKey, hashData.toString());
            queryUrl += "&vnp_SecureHash=" + vnp_SecureHash;
            String paymentUrl = VNPayConfig.vnp_PayUrl + "?" + queryUrl;
//            com.google.gson.JsonObject job = new JsonObject();
//            job.addProperty("code", "00");
//            job.addProperty("message", "success");
//            job.addProperty("data", paymentUrl);
//            Gson gson = new Gson();
//            resp.getWriter().write(gson.toJson(job));

        PaymentDTO paymentDTO = new PaymentDTO();
        paymentDTO.setStatus("Ok");
        paymentDTO.setMessage("Successfull");
        paymentDTO.setURL(paymentUrl);

        return ResponseEntity.status(HttpStatus.OK).body(paymentDTO);
    }


}
